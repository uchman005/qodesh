import { site } from "@/app/_lib/content";

export function StatStrip() {
  const years = new Date().getFullYear() - site.founded;
  const stats = [
    { value: `${years}+`, label: "Years in practice" },
    { value: "4", label: "Core disciplines" },
    { value: "DBE / MBE", label: "Certified firm" },
    { value: "2", label: "Continents served" },
  ] as const;

  return (
    <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="flex flex-col gap-1 border-l border-paper/20 pl-4"
        >
          <dt className="order-2 font-mono text-xs uppercase tracking-[0.15em] text-paper/60">
            {stat.label}
          </dt>
          <dd className="order-1 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
