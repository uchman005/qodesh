import type { Metadata } from "next";
import { Container } from "../_components/container";
import { HeroBackground } from "../_components/hero-background";
import { JsonLd } from "../_components/json-ld";
import { ArrowRightIcon, CompassIcon } from "../_components/icons";
import { heroImages, site } from "../_lib/content";
import { breadcrumbJsonLd, pageMetadata } from "../_lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach Qodesh CM at 30 W. 25th Street, Baltimore, MD 21218, by phone at 410.662.5599, or by email at info@qodeshcm.com.",
  path: "/contact",
  image: heroImages.contact,
  imageAlt: "Campus building survey map for the University of Maryland Eastern Shore",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  const fullAddress = `${site.contact.addressLine1}, ${site.contact.addressLine2}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;
  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&z=15&output=embed`;

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative overflow-hidden bg-forest-deep">
        <HeroBackground src={heroImages.contact} priority />
        <Container className="relative flex flex-col gap-6 py-20 sm:py-28">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Contact
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/70">
            Whether you&apos;re early in planning or ready to break ground, our team is
            based in Baltimore and ready to help.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            data-aos="fade-up"
            className="flex flex-col gap-6 rounded-2xl border border-line bg-paper-dim p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight">Office</h2>
            <address className="flex flex-col gap-1 text-base not-italic leading-relaxed text-ink/75">
              <span>{site.contact.addressLine1}</span>
              <span>{site.contact.addressLine2}</span>
            </address>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-forest-soft"
            >
              <CompassIcon className="h-4 w-4" />
              Get directions
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col gap-6 rounded-2xl border border-line bg-paper-dim p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight">Get in touch</h2>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center justify-between gap-3 rounded-xl bg-forest px-5 py-4 text-sm font-semibold text-paper transition-colors hover:bg-forest-soft"
              >
                {site.contact.email}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="inline-flex items-center justify-between gap-3 rounded-xl border border-line px-5 py-4 text-sm font-semibold text-ink transition-colors hover:border-forest/40"
              >
                {site.contact.phone}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div data-aos="fade-up" className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title={`Map showing ${site.name}'s office at ${fullAddress}`}
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
