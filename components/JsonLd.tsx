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
