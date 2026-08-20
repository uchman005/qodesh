import type { Metadata } from "next";
import { site } from "./content";

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const images = image
    ? [{ url: absoluteUrl(image), alt: imageAlt ?? title }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_US",
      title: `${title} | ${site.name}`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: images?.map((i) => i.url),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/qodesh-logo.png"),
    image: absoluteUrl("/qodesh-logo.png"),
    description: site.description,
    foundingDate: site.foundedISO,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLine1,
      addressLocality: site.contact.city,
      addressRegion: site.contact.region,
      postalCode: site.contact.postalCode,
      addressCountry: site.contact.country,
    },
    areaServed: "US",
    sameAs: ["https://www.linkedin.com/company/qodesh-cm/"],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: {
  name: string;
  summary: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.serviceRegion,
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data);
}
