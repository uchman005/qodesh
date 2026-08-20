import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../_components/container";
import { CtaBand } from "../../_components/cta-band";
import {
  CivilEnvironmentalIcon,
  ConstructionManagementIcon,
  MasterPlanningIcon,
  ShieldIcon,
  StructuralEngineeringIcon,
  ArrowRightIcon,
} from "../../_components/icons";
import { services, site } from "../../_lib/content";

const serviceIcons = {
  "master-planning": MasterPlanningIcon,
  "structural-engineering": StructuralEngineeringIcon,
  "civil-environmental-engineering": CivilEnvironmentalIcon,
  "project-construction-management": ConstructionManagementIcon,
} as const;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.summary,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = services[index];
  const Icon = serviceIcons[service.slug];
  const other = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/85 to-forest-deep/60" />
        </div>
        <Container className="relative flex flex-col gap-6 py-20 sm:py-28">
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-paper/70 hover:text-paper"
          >
            &larr; All services
          </Link>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper text-forest">
            <Icon className="h-7 w-7" />
          </div>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Service {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            {service.name}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/75">
            {service.tagline}
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
              {service.intro}
            </p>
            <ul className="flex flex-col gap-3">
              {service.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 rounded-xl border border-line bg-paper-dim p-4 text-sm leading-relaxed text-ink/75"
                >
                  <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-sm text-ink/50">{service.project}</figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-dim py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <h2 className="text-xl font-semibold tracking-tight">Other services</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {other.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-2 rounded-xl border border-line bg-paper p-5 transition-colors hover:border-forest/40"
              >
                <span className="font-medium">{s.name}</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-forest">
                  Learn more
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
