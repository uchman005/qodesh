import Image from "next/image";
import type { Project } from "../_lib/projects";
import { projectMapQuery } from "../_lib/projects";
import { services } from "../_lib/content";
import { CompassIcon } from "./icons";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const mapQuery = projectMapQuery(project);
  const mapsHref = mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
    : null;
  const categoryName = services.find((s) => s.slug === project.category)?.name ?? project.category;

  return (
    <figure
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-dim">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          itemProp="image"
        />
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-forest">
          {categoryName}
        </span>
      </div>
      <figcaption className="flex flex-col gap-1.5 p-5">
        <span className="text-base font-semibold tracking-tight text-ink" itemProp="name">
          {project.title}
        </span>
        {project.client ? (
          <span className="text-sm text-ink/60">{project.client}</span>
        ) : null}
        <span className="text-sm text-ink/50" itemProp="description">
          {project.role}
        </span>
        {mapsHref ? (
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-forest hover:text-forest-soft"
          >
            <CompassIcon className="h-3.5 w-3.5" />
            {project.location ?? project.client}
          </a>
        ) : null}
      </figcaption>
    </figure>
  );
}
