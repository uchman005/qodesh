import Image from "next/image";

export function HeroBackground({
  src,
  alt = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <div aria-hidden={alt === ""} className="absolute inset-0">
      <Image src={src} alt={alt} fill priority={priority} className="object-cover" />
      <div className="absolute inset-0 bg-blueprint-dark opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/85 to-forest-deep/70" />
    </div>
  );
}
