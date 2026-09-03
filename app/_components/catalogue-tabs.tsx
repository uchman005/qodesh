import Link from "next/link";
import { services } from "../_lib/content";

export function CatalogueTabs({ active }: { active?: string }) {
  const tabs = [
    { slug: undefined, label: "All", href: "/projects" },
    ...services.map((s) => ({
      slug: s.slug,
      label: s.name,
      href: `/projects/${s.slug}`,
    })),
  ];

  return (
    <nav aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.slug === active;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-forest bg-forest text-paper"
                : "border-line bg-paper text-ink/70 hover:border-forest/40"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
