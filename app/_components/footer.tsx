import Link from "next/link";
import { Container } from "./container";
import { LogoWordmark } from "./logo-mark";
import { certifications, navLinks, sisterCompany, site } from "@/app/_lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-dim">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <LogoWordmark className="h-10 w-auto" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ink/60">
            {site.tradeName}, based in Baltimore, Maryland since {site.founded}.
          </p>
          <div className="flex gap-2 pt-1">
            {certifications.map((cert) => (
              <span
                key={cert.abbr}
                title={cert.name}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink/60"
              >
                {cert.abbr}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink/40">
            Navigate
          </h3>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.basecampUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/70 hover:text-ink"
          >
            Client Login (Basecamp)
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink/40">
            Contact
          </h3>
          <address className="flex flex-col gap-1 text-sm not-italic text-ink/70">
            <span>{site.contact.addressLine1}</span>
            <span>{site.contact.addressLine2}</span>
            <a href={`tel:${site.contact.phoneHref}`} className="hover:text-ink">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
              {site.contact.email}
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink/40">
            Sister Company
          </h3>
          <p className="text-sm leading-relaxed text-ink/70">{sisterCompany.name}</p>
          <a
            href={sisterCompany.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-forest hover:text-forest-soft"
          >
            dhaeastafrica.com &rarr;
          </a>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>Baltimore, Maryland</p>
        </Container>
      </div>
    </footer>
  );
}
