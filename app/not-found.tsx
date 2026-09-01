import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "./_components/container";
import { HeroBackground } from "./_components/hero-background";
import { CompassIcon, ArrowRightIcon } from "./_components/icons";
import { heroImages, navLinks, site } from "./_lib/content";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for has moved, been renamed, or never existed.",
};

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-forest-deep">
      <HeroBackground src={heroImages.about} priority />
      <Container className="relative flex flex-col items-start gap-8 py-24 sm:py-32">
        <div data-aos="fade-up" className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper text-forest">
            <CompassIcon className="h-7 w-7" />
          </div>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            404 &middot; Off the Blueprint
          </span>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-6xl"
        >
          This page didn&apos;t make it into the final plans.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-xl text-lg leading-relaxed text-paper/70"
        >
          The link you followed may be outdated, mistyped, or from a page we&apos;ve since
          redrawn. Here&apos;s what we stand for, and where to go from here.
        </p>

        <blockquote
          data-aos="fade-up"
          data-aos-delay="300"
          className="border-l-2 border-accent pl-4 text-xl font-medium leading-snug text-paper sm:text-2xl"
        >
          &ldquo;{site.tagline}&rdquo;
        </blockquote>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-2 rounded-xl border border-paper/20 px-4 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/5"
            >
              {link.label}
              <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        <a
          data-aos="fade-up"
          data-aos-delay="500"
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-paper/60 hover:text-paper"
        >
          Or tell us what you were looking for: {site.contact.email}
        </a>
      </Container>
    </section>
  );
}
