import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../_components/container";
import { SectionHeading } from "../_components/section-heading";
import { CtaBand } from "../_components/cta-band";
import { HeroBackground } from "../_components/hero-background";
import { JsonLd } from "../_components/json-ld";
import { ArrowRightIcon, LeafIcon, LinkedInIcon } from "../_components/icons";
import {
  certifications,
  heroImages,
  leadership,
  principles,
  services,
  site,
  sisterCompany,
} from "../_lib/content";
import { breadcrumbJsonLd, pageMetadata } from "../_lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Qodesh CM is the trade name of QPS, Inc., a Maryland corporation established in 1996 whose firm and predecessors span over forty years of structural, civil, and project management services.",
  path: "/about",
  image: heroImages.about,
  imageAlt: "A pond bordered by trees on a Qodesh CM project site",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const storyImage = services.find(
  (s) => s.slug === "civil-environmental-engineering"
)!;
const planningImage = services.find((s) => s.slug === "master-planning")!;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative overflow-hidden bg-forest-deep">
        <HeroBackground src={heroImages.about} priority />
        <Container className="relative flex flex-col gap-6 py-20 sm:py-28">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            About {site.name}
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Over forty years of engineering with the environment, not around it.
          </h1>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our story
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From {site.predecessorName} to {site.name}
            </h2>
            <p className="text-base leading-relaxed text-ink/70">
              {site.name} is the trade name of {site.legalName}, a Maryland corporation
              established in {site.founded}. The firm and its predecessors, including{" "}
              {site.predecessorName}, span {site.legacyYears} years of continuous practice
              in Baltimore &mdash; a history that has made us{" "}
              {site.distinction.charAt(0).toLowerCase() + site.distinction.slice(1)}
            </p>
            <p className="rounded-xl border border-line bg-paper-dim p-4 text-sm italic leading-relaxed text-ink/70">
              &ldquo;{site.mission}&rdquo;
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              Our project work spans the {site.serviceRegion.toLowerCase()}, serving
              institutions, government agencies, and private developers who need a firm
              that treats client trust and quality management as inseparable from the
              engineering itself &mdash; on-time delivery, minimal change orders, and
              plans that hold up under real construction conditions.
            </p>
            <p className="rounded-xl border border-line bg-paper-dim p-4 text-sm leading-relaxed text-ink/70">
              {site.nameMeaning}
            </p>
          </div>

          <div data-aos="fade-left" className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={storyImage.image}
                alt={storyImage.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-paper-dim p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-paper">
                <LeafIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">
                Sustainability isn&apos;t an add-on
              </h3>
              <p className="text-base leading-relaxed text-ink/70">
                As global citizens as much as engineers, we design toward Net Zero
                performance and treat environmental interdependence as a design
                constraint &mdash; not a marketing line.
              </p>
              <blockquote className="border-l-2 border-forest pl-4 text-lg font-medium leading-snug text-ink">
                &ldquo;{site.guidingPrinciple}&rdquo;
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-dim py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <ol className="order-2 flex flex-col gap-6 lg:order-1">
            {site.process.map((item, i) => (
              <li
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex gap-5 rounded-2xl border border-line bg-paper p-6"
              >
                <span className="font-mono text-sm text-forest">{item.step}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <SectionHeading
              eyebrow="How we work"
              title="Plan. Design. Implement."
              description="A single team carries every project through all three phases, so intent set on day one survives all the way to closeout."
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={planningImage.image}
                alt={planningImage.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Management principles"
            title="Four principles run through every engagement"
            description="Built on the Baldrige Excellence Framework's emphasis on systems thinking, visionary leadership, and organizational learning."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <div
                key={principle.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex flex-col gap-2 rounded-2xl border border-line bg-paper-dim p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight">{principle.name}</h3>
                <p className="text-sm leading-relaxed text-ink/60">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-dim py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind the work"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, i) => (
              <div
                key={person.name}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-dim">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-base font-semibold tracking-tight">
                      {person.name}
                    </span>
                    {person.linkedin ? (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on LinkedIn`}
                        className="shrink-0 text-ink/40 transition-colors hover:text-forest"
                      >
                        <LinkedInIcon className="h-6 w-6" />
                      </a>
                    ) : null}
                  </div>
                  <span className="text-sm font-medium text-forest">{person.title}</span>
                  <span className="pt-1 text-sm leading-relaxed text-ink/60">
                    {person.bio}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Certifications
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Recognized and certified
            </h2>
            <p className="text-base leading-relaxed text-ink/65">
              {site.name} holds Disadvantaged Business Enterprise (DBE) and
              Minority-Owned Business Enterprise (MBE) certification in the Baltimore
              and Philadelphia markets.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {certifications.map((cert) => (
                <div
                  key={cert.abbr}
                  className="flex flex-col gap-1 rounded-2xl border border-line bg-paper-dim p-6"
                >
                  <span className="font-mono text-2xl font-semibold text-forest">
                    {cert.abbr}
                  </span>
                  <span className="text-sm text-ink/60">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col gap-4 rounded-2xl border border-line bg-forest p-8 text-paper"
          >
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
              Sister company
            </span>
            <h2 className="text-2xl font-semibold tracking-tight">{sisterCompany.name}</h2>
            <p className="text-sm leading-relaxed text-paper/75">
              Founded in {sisterCompany.founded} and based in {sisterCompany.location},
              {" "}
              {sisterCompany.description} We&apos;re a member of the {sisterCompany.membership}.
            </p>
            <a
              href={sisterCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-paper-dim"
            >
              Visit dhaeastafrica.com
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
