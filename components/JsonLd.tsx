import { site } from "@/lib/site";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${site.url}#business`,
  name: site.name,
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  image: `${site.url}/logo.png`,
  logo: `${site.url}/logo.png`,
  description: site.description,
  priceRange: "₺₺",
  founder: { "@type": "Person", name: site.founder },
  foundingDate: `${site.foundingYear}`,
  areaServed: {
    "@type": "City",
    name: "İzmir",
    "@id": "https://www.wikidata.org/wiki/Q35997",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "İzmir",
    addressRegion: "İzmir",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneTel,
    contactType: "emergency",
    availableLanguage: ["Turkish"],
    areaServed: "TR",
  },
  sameAs: [] as string[],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og-image.jpg`,
  description: site.description,
  email: site.email,
  telephone: site.phoneTel,
  foundingDate: `${site.foundingYear}`,
  founder: {
    "@type": "Person",
    name: site.founder,
    jobTitle: site.founderTitle,
    worksFor: { "@id": `${site.url}#business` },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "İzmir",
    addressRegion: "İzmir",
    addressCountry: "TR",
  },
  areaServed: { "@type": "City", name: "İzmir" },
  sameAs: [] as string[],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "tr-TR",
  publisher: { "@id": `${site.url}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}#founder`,
  name: site.founder,
  jobTitle: site.founderTitle,
  worksFor: { "@id": `${site.url}#business` },
  image: `${site.url}/logo.png`,
  url: `${site.url}/hakkimizda`,
  knowsAbout: [
    "Elektrik tesisatı", "Elektrik arıza tamiri", "Topraklama",
    "Kaçak akım tespiti", "Kombi elektrik montajı", "Klima elektrik tesisatı",
    "W-otomat pano yenileme", "TEDAŞ standartları",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Elektrik Teknisyeni",
    occupationLocation: { "@type": "City", name: "İzmir" },
  },
};
