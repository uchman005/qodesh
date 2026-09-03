import type { Metadata } from "next";
import { Container } from "../_components/container";
import { HeroBackground } from "../_components/hero-background";
import { CatalogueTabs } from "../_components/catalogue-tabs";
import { ProjectCard } from "../_components/project-card";
import { JsonLd } from "../_components/json-ld";
import { heroImages, site } from "../_lib/content";
import { projects } from "../_lib/projects";
import { breadcrumbJsonLd, pageMetadata } from "../_lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Project Catalogue",
  description: `Browse structural, civil, and master planning projects delivered by ${site.name} across the northeastern U.S.`,
  path: "/projects",
  image: heroImages.services,
  imageAlt: "Concrete formwork and rebar under construction at Holtwood Dam",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Qodesh CM Project Catalogue",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    url: `${site.url}/projects/${p.category}#${p.slug}`,
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={itemListJsonLd} />

      <section className="relative overflow-hidden bg-forest-deep">
        <HeroBackground src={heroImages.services} priority />
        <Container className="relative flex flex-col gap-6 py-20 sm:py-28">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Project Catalogue
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            A sample of our project history.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/70">
            A growing selection from {site.name}&apos;s project history across master
            planning, structural, civil and environmental engineering, and construction
            management &mdash; with more added as our archive is digitized.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <CatalogueTabs />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div key={project.slug} id={project.slug}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
