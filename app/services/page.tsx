import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../_components/container";
import { CtaBand } from "../_components/cta-band";
import { HeroBackground } from "../_components/hero-background";
import { JsonLd } from "../_components/json-ld";
import { ArrowRightIcon } from "../_components/icons";
import { heroImages, services, site } from "../_lib/content";
import { breadcrumbJsonLd, pageMetadata } from "../_lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Master planning, structural engineering, civil and environmental engineering, and project & construction management from Qodesh CM in Baltimore, MD.",
  path: "/services",
  image: heroImages.services,
  imageAlt: "Concrete formwork and rebar under construction at Holtwood Dam",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative overflow-hidden bg-forest-deep">
        <HeroBackground src={heroImages.services} priority />
        <Container className="relative flex flex-col gap-6 py-20 sm:py-28">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Services
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Four disciplines, one standard of excellence.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/70">
            {site.name} carries projects from master plan to punch list, so nothing gets
            lost in the handoff between planning, design, and construction.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 100}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-colors hover:border-forest/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-dim">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
                <span className="font-mono text-xs text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold tracking-tight">{service.name}</h2>
                <p className="text-sm leading-relaxed text-ink/65">{service.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-forest">
                  View service
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
