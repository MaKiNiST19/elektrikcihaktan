"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "eh_consent_v1";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const update = (granted: boolean) => {
    const state = granted ? "granted" : "denied";
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      "consent",
      "update",
      {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      }
    );
    localStorage.setItem(STORAGE_KEY, granted ? "accepted" : "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-primary text-white p-4 shadow-xl z-50 text-sm">
      <p className="mb-3">
        Hizmet kalitesini artırmak için çerez kullanıyoruz. Analitik ve reklam çerezlerini onaylıyor musunuz?
      </p>
      <div className="flex gap-2">
        <button onClick={() => update(true)} className="flex-1 bg-accent hover:bg-accent-600 px-3 py-2 font-semibold">
          Kabul et
        </button>
        <button onClick={() => update(false)} className="flex-1 bg-primary-700 hover:bg-primary-600 px-3 py-2">
          Reddet
        </button>
      </div>
    </div>
  );
}
