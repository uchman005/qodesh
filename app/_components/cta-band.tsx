import Link from "next/link";
import { Container } from "./container";
import { site } from "@/app/_lib/content";
import { ArrowRightIcon } from "./icons";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 sm:py-28">
      <Container className="relative flex flex-col items-start gap-6 sm:items-center sm:text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          Have a site, structure, or community in mind?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          Tell us where you&apos;re starting from. We&apos;ll help you plan, design, and
          implement it the right way.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-paper-dim"
          >
            Start a conversation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
          >
            {site.contact.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
