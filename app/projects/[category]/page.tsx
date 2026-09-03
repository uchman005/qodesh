import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "../../_components/container";
import { HeroBackground } from "../../_components/hero-background";
import { CatalogueTabs } from "../../_components/catalogue-tabs";
import { ProjectCard } from "../../_components/project-card";
import { JsonLd } from "../../_components/json-ld";
import { services, site } from "../../_lib/content";
import { projectsByCategory } from "../../_lib/projects";
import { breadcrumbJsonLd, pageMetadata } from "../../_lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ category: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[category]">
): Promise<Metadata> {
  const { category } = await props.params;
  const service = services.find((s) => s.slug === category);
  if (!service) return {};

  return pageMetadata({
    title: `${service.name} Projects`,
    description: `A selection of ${service.name.toLowerCase()} projects delivered by ${site.name}: ${service.summary}`,
    path: `/projects/${category}`,
    image: service.image,
    imageAlt: service.imageAlt,
  });
}

export default async function ProjectCategoryPage(
  props: PageProps<"/projects/[category]">
) {
  const { category } = await props.params;
  const service = services.find((s) => s.slug === category);
  if (!service) notFound();

  const categoryProjects = projectsByCategory(category);
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: service.name, path: `/projects/${category}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative overflow-hidden bg-forest-deep">
        <HeroBackground src={service.image} priority />
        <Container className="relative flex flex-col gap-6 py-20 sm:py-28">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Project Catalogue
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            {service.name} projects
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/70">
            {service.summary}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <CatalogueTabs active={category} />
          {categoryProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProjects.map((project, i) => (
                <div key={project.slug} id={project.slug}>
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-base text-ink/60">
              We&apos;re adding {service.name.toLowerCase()} projects to the catalogue soon.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
