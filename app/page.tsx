import Link from "next/link";
import { Container } from "./_components/container";
import { SectionHeading } from "./_components/section-heading";
import { ServiceCard } from "./_components/service-card";
import { StatStrip } from "./_components/stat-strip";
import { CtaBand } from "./_components/cta-band";
import { HeroBackground } from "./_components/hero-background";
import {
  ArrowRightIcon,
  CivilEnvironmentalIcon,
  ConstructionManagementIcon,
  MasterPlanningIcon,
  StructuralEngineeringIcon,
} from "./_components/icons";
import Image from "next/image";
import { certifications, heroImages, services, site, sisterCompany } from "./_lib/content";

const serviceIcons = [
  MasterPlanningIcon,
  StructuralEngineeringIcon,
  CivilEnvironmentalIcon,
  ConstructionManagementIcon,
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep">
        <HeroBackground src={heroImages.home} priority />
        <Container className="relative flex flex-col gap-8 py-24 sm:py-32">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            {site.tradeName} &middot; Baltimore, MD &middot; Est. {site.founded}
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-6xl sm:leading-tight">
            {site.tagline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/70">
            {site.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-paper-dim"
            >
              Explore our services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
            >
              Start a project
            </Link>
          </div>

          <div className="mt-8 border-t border-paper/15 pt-10">
            <StatStrip />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What we do"
            title="Four disciplines, one Plan &ndash; Design &ndash; Implement process"
            description="From the first site survey to the final punch list, our teams carry projects through master planning, engineering, and construction management without handing off the vision."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ServiceCard
                  key={service.slug}
                  index={i + 1}
                  name={service.name}
                  summary={service.summary}
                  href={`/services/${service.slug}`}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  icon={<Icon className="h-5 w-5" />}
                />
              );
            })}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-soft"
          >
            See every service in detail
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      <section className="bg-paper-dim py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Featured work"
            title="Projects our services stand behind"
            description="A sample of the sites and structures our disciplines have carried from plan to completion."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm leading-snug text-ink/60">{service.project}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our philosophy
            </span>
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              &ldquo;{site.guidingPrinciple}&rdquo;
            </blockquote>
            <p className="max-w-lg text-base leading-relaxed text-ink/65">
              We&apos;re unabashed advocates for the built environment&apos;s natural
              counterpart &mdash; designing toward Net Zero, minimal waste, and energy
              independence without giving up aesthetic or structural rigor.
            </p>
            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-forest-soft"
            >
              Read our story
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <ol className="flex flex-col gap-6">
            {site.process.map((item) => (
              <li key={item.step} className="flex gap-5 rounded-2xl border border-line bg-paper p-6">
                <span className="font-mono text-sm text-forest">{item.step}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Credentials
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Certified. Accountable. Local.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="flex flex-1 min-w-[220px] flex-col gap-1 rounded-2xl border border-line bg-paper-dim p-6"
              >
                <span className="font-mono text-2xl font-semibold text-forest">
                  {cert.abbr}
                </span>
                <span className="text-sm text-ink/60">{cert.name}</span>
              </div>
            ))}
            <div className="flex flex-1 min-w-[220px] flex-col gap-2 rounded-2xl border border-dashed border-line p-6">
              <span className="text-sm font-semibold text-ink">{sisterCompany.name}</span>
              <p className="text-sm leading-relaxed text-ink/60">
                {sisterCompany.description}
              </p>
              <a
                href={sisterCompany.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:text-forest-soft"
              >
                Visit dhaeastafrica.com
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
