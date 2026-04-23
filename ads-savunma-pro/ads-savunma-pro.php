<?php
/**
 * Plugin Name: Ads Savunma Ultimate V11 (Shadow Avcısı)
 * Description: Shadow Ban, Hız Radarı, Cihaz Parmak İzi, Mahalle Tespiti ve Otomatik Saldırı Uyarısı (Tam Profesyonel).
 * Version: 11.0
 */

if (!defined('ABSPATH')) exit;

// 1. VERİTABANI (Dönüşüm, Hız ve Shadow Ban Eklendi)
register_activation_hook(__FILE__, 'ads_v11_install');
function ads_v11_install() {
    global $wpdb;
    $table = $wpdb->prefix . 'ads_v11_logs';
    $charset_collate = $wpdb->get_charset_collate();
    $sql = "CREATE TABLE $table (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        ip_adresi varchar(45) NOT NULL,
        cihaz_id varchar(100),
        konum varchar(255),
        is_ads tinyint(1) DEFAULT 0,
        clicked_call tinyint(1) DEFAULT 0,
        visit_duration int DEFAULT 0, -- Saniye bazlı ziyaret süresi
        tarih datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
    
    if (!get_option('ads_v11_shadow_blacklist')) add_option('ads_v11_shadow_blacklist', array()); // Shadow Banlılar
    if (!get_option('ads_v11_hard_blacklist')) add_option('ads_v11_hard_blacklist', array()); // Tam Banlılar
}

// 2. OTOMATİK GÜVENLİK (BANLIYSA SİTEYE SOKMA VEYA HATA VER)
add_action('init', 'ads_v11_firewall');
function ads_v11_firewall() {
    $ip = $_SERVER['REMOTE_ADDR'];
    $shadow_list = get_option('ads_v11_shadow_blacklist', array());
    $hard_list = get_option('ads_v11_hard_blacklist', array());

    // TAM BANLI (Kovulmuş) -> Beyaz ekran ve hata mesajı
    if (in_array($ip, $hard_list)) {
        wp_die("<h1 style='color:red;'>⚠️ GÜVENLİK ENGELİ</h1><p>Şüpheli etkinlik nedeniyle bu siteye erişiminiz kalıcı olarak kısıtlanmıştır.</p>", "Erişim Reddedildi", array('response' => 403));
    }

    // SHADOW BANLI (Gölge Ban) -> Siteyi bozuk gibi göster (Error 500 - Sunucu Hatası)
    if (in_array($ip, $shadow_list)) {
        // Rakibi şaşırtmak için gerçek bir sunucu hatası (Error 500) taklidi yapalım
        header('HTTP/1.1 500 Internal Server Error');
        echo "<!DOCTYPE html><html><head><title>500 Internal Server Error</title></head><body><h1>Internal Server Error</h1><p>The server encountered an internal error or misconfiguration and was unable to complete your request.</p></body></html>";
        exit;
    }
}

// 3. GELİŞMİŞ TAKİP SCRIPT (SÜRE VE ARAMA BUTONU DAHİL)
add_action('wp_footer', 'ads_v11_script');
function ads_v11_script() {
    if (is_admin() || is_user_logged_in()) return;
    $fp = md5($_SERVER['HTTP_USER_AGENT'] . $_SERVER['HTTP_ACCEPT_LANGUAGE']);
    $is_ads = (isset($_GET['gclid']) || (isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], 'googleads') !== false)) ? 1 : 0;
    ?>
    <script>
    (function() {
        let startTime = new Date();
        const sendLog = (callClicked = 0) => {
            let duration = Math.round((new Date() - startTime) / 1000); // Saniye cinsinden süre
            fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `action=ads_save_v11&fp=<?php echo $fp; ?>&ads=<?php echo $is_ads; ?>&call=${callClicked}&duration=${duration}`
            });
        };
        // Giriş ve ilk süre (0 sn)
        sendLog(0);
        // Telefon/WhatsApp Tıklama Takibi
        document.addEventListener('click', function(e) {
            if (e.target.closest('a[href^="tel:"], a[href*="wa.me"]')) {
                sendLog(1); // "Ara" tıklandı
            }
        });
        // Sayfadan çıkışta süreyi kaydet (Unload)
        window.addEventListener('unload', function() {
            sendLog(0); // Son süreyi kaydet
        });
    })();
    </script>
    <?php
}

// 4. AJAX KAYIT, HIZ RADARI VE OTOMATİK SHADOW BAN MANTIĞI
add_action('wp_ajax_ads_save_v11', 'ads_v11_callback');
add_action('wp_ajax_nopriv_ads_save_v11', 'ads_v11_callback');
function ads_v11_callback() {
    global $wpdb;
    $ip = $_SERVER['REMOTE_ADDR'];
    $ua = strtolower($_SERVER['HTTP_USER_AGENT']);
    // Botları kaydetme
    if (strpos($ua, 'bot') !== false || strpos($ua, 'spider') !== false) wp_die();

    $fp = sanitize_text_field($_POST['fp']);
    $is_ads = intval($_POST['ads']);
    $call = intval($_POST['call']);
    $duration = intval($_POST['duration']);
    $table = $wpdb->prefix . 'ads_v11_logs';

    // Konum ve ISP Çek (Manisa/Saruhanlı vb.)
    $res = wp_remote_get("http://ip-api.com/json/{$ip}?fields=status,regionName,city,district,isp&lang=tr");
    $d = json_decode(wp_remote_retrieve_body($res));
    $konum = ($d && $d->status == 'success') ? 
             "{$d->regionName} / {$d->city} / " . ($d->district ?? "Merkez") . " [{$d->isp}]" : "Bilinmiyor";

    // Önceki ziyareti güncelle veya yeni kayıt aç (Süre takibi için)
    $wpdb->insert($table, ['ip_adresi' => $ip, 'cihaz_id' => $fp, 'konum' => $konum, 'is_ads' => $is_ads, 'clicked_call' => $call, 'visit_duration' => $duration]);

    // OTOMATİK SHADOW BAN (HIZ RADARI): 
    // Son 10 dakikada 3'ten fazla REKLAM tıkı yapmış ama bir kez bile aramamışsa SHADOW BANLA
    $count = $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $table WHERE ip_adresi = %s AND is_ads = 1 AND clicked_call = 0 AND tarih > DATE_SUB(NOW(), INTERVAL 10 MINUTE)", $ip));
    if ($count >= 3) {
        $shadow_list = get_option('ads_v11_shadow_blacklist', array());
        $shadow_list[] = $ip;
        update_option('ads_v11_shadow_blacklist', array_unique($shadow_list));
    }
    wp_die();
}

// 5. PROFESYONEL PANEL (SHADOW BAN VE HIZ ANALİZİ)
add_action('admin_menu', function() {
    add_menu_page('Ads Gölge', 'Ads Gölge', 'manage_options', 'ads-v11', 'ads_v11_render', 'dashicons-visibility');
});

function ads_v11_render() {
    global $wpdb;
    $table = $wpdb->prefix . 'ads_v11_logs';
    $shadow_list = get_option('ads_v11_shadow_blacklist', array());
    $hard_list = get_option('ads_v11_hard_blacklist', array());

    // Manüel İşlemler (Shadow Ban/Tam Ban/Geri Al)
    if(isset($_GET['action']) && isset($_GET['ip'])) {
        $ip = sanitize_text_field($_GET['ip']);
        if($_GET['action'] == 'shadow') { $shadow_list[] = $ip; update_option('ads_v11_shadow_blacklist', array_unique($shadow_list)); }
        elseif($_GET['action'] == 'hard') { $hard_list[] = $ip; update_option('ads_v11_hard_blacklist', array_unique($hard_list)); }
        elseif($_GET['action'] == 'unban') { 
            update_option('ads_v11_shadow_blacklist', array_diff($shadow_list, array($ip))); 
            update_option('ads_v11_hard_blacklist', array_diff($hard_list, array($ip))); 
        }
    }

    $results = $wpdb->get_results("SELECT cihaz_id, konum, GROUP_CONCAT(DISTINCT ip_adresi) as ipler, SUM(is_ads) as ads_tık, SUM(clicked_call) as aramalar, AVG(visit_duration) as ort_süre FROM $table GROUP BY cihaz_id ORDER BY ads_tık DESC LIMIT 50");

    ?>
    <style>
        .v11-wrap { background: #010409; color: #fff; padding: 25px; border-radius: 15px; font-family: 'Inter', sans-serif; margin-right:20px;}
        .v11-table { width: 100%; border-collapse: collapse; margin-top: 20px; background: #0d1117; border: 1px solid #30363d; }
        .v11-table th, .v11-table td { padding: 15px; text-align: left; border-bottom: 1px solid #30363d; }
        .shadow-ban { color: #f85149; background: rgba(248, 81, 73, 0.1); padding: 3px 6px; border-radius: 5px; font-weight: bold; animation: shadowBlink 2s infinite;}
        .hard-ban { color: #fff; background: #f85149; padding: 3px 6px; border-radius: 5px; font-weight: bold;}
        .status-good { color: #56d364; font-weight: bold; }
        .badge-manisa { background: #1f6feb; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: bold; }
        .btn-v11 { padding: 5px 10px; border-radius: 5px; font-size: 11px; text-decoration: none; cursor: pointer; display: inline-block;}
        .btn-shadow { background: #f85149; color: white; }
        .btn-copy { background: #1f6feb; color: white; margin-right: 5px; }
        @keyframes shadowBlink { 0% { opacity: 1; } 50% { opacity: 0.7; } 100% { opacity: 1; } }
    </style>

    <div class="v11-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2>🕵️ Ads Savunma Ultimate V11 "Gölge Avcısı"</h2>
            <form method="post"><button type="submit" name="clear_v11" class="button button-secondary" onclick="return confirm('Emin misiniz?')">Tüm Kayıtları Sıfırla</button></form>
        </div>
        
        <p>Sistem şu an Manisa/Saruhanlı bölgesindeki rakipleri "hata" mesajlarıyla caydırıyor.</p>
        
        <table class="v11-table">
            <thead>
                <tr><th>Konum / ISP</th><th>IP Listesi</th><th>Ads / Süre</th><th>Arama</th><th>Durum / İşlem</th></tr>
            </thead>
            <tbody>
                <?php foreach($results as $row): 
                    $ips = explode(',', $row->ipler);
                    $first_ip = $ips[0];
                    $is_shadow = in_array($first_ip, $shadow_list);
                    $is_hard = in_array($first_ip, $hard_list);
                    $is_manisa = (strpos($row->konum, 'Manisa') !== false);
                ?>
                <tr>
                    <td>
                        <span class="badge-manisa" style="background:<?php echo $is_manisa ? '#1f6feb' : '#484f58'; ?>"><?php echo $row->konum; ?></span><br>
                        <small style="color:#8b949e; font-size:11px;">ID: <?php echo substr($row->cihaz_id, 0, 8); ?></small>
                    </td>
                    <td style="font-size:11px; max-width:150px; overflow:hidden;"><?php echo str_replace(',', '<br>', $row->ipler); ?></td>
                    <td>
                        <span style="font-size:18px; color:#fbbf24; font-weight:bold;">★ <?php echo $row->ads_tık; ?> Ads</span><br>
                        <small><?php echo round($row->ort_süre); ?> sn (Ort.)</small>
                    </td>
                    <td><?php echo $row->aramalar > 0 ? '<span class="status-good">✅ Aradı</span>' : '<span style="color:#64748b;">❌ Aramadı</span>'; ?></td>
                    <td>
                        <?php if($is_shadow): ?>
                            <span class="shadow-ban">GÖLGE BAN (BOZUK SİTE)</span><br><a href="?page=ads-v11&action=unban&ip=<?php echo $first_ip; ?>" style="color:#56d364; font-size:11px;">Aç</a>
                        <?php elseif($is_hard): ?>
                            <span class="hard-ban">TAM BAN (KOVULDU)</span><br><a href="?page=ads-v11&action=unban&ip=<?php echo $first_ip; ?>" style="color:#56d364; font-size:11px;">Aç</a>
                        <?php else: ?>
                            <span style="color:#56d364;">İzleniyor</span><br>
                            <a href="?page=ads-v11&action=shadow&ip=<?php echo $first_ip; ?>" class="btn-v11 btn-shadow">Shadow Ban (Caydır)</a>
                            <a href="?page=ads-v11&action=hard&ip=<?php echo $first_ip; ?>" class="btn-v11 button" style="color:#f85149;">Siteden Kov</a>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php
}
