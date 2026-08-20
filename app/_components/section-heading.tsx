export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const subtleColor = tone === "dark" ? "text-paper/70" : "text-ink/60";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`} data-aos="fade-up">
      {eyebrow ? (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${subtleColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
