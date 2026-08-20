import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export function ServiceCard({
  icon,
  name,
  summary,
  index,
  href,
  image,
  imageAlt,
}: {
  icon: ReactNode;
  name: string;
  summary: string;
  index: number;
  href: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Link
      href={href}
      data-aos="fade-up"
      data-aos-delay={((index - 1) % 4) * 100}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-colors hover:border-forest/40"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-dim">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-forest shadow-sm">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6 sm:p-8">
        <span className="font-mono text-xs text-ink/40">{String(index).padStart(2, "0")}</span>
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        <p className="text-sm leading-relaxed text-ink/65">{summary}</p>
        <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-forest">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
