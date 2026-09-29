import { Logo } from "@/components/Logo";
import { site } from "@/data/site";
import { withBase } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-md">
          <Logo variant="full" />
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          {site.github ? (
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          ) : null}
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            Email
          </a>
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
            Phone
          </a>
          <a
            href={withBase(site.resumeHref)}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Resume
          </a>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>© 2026 Nikhil Agrawal</p>
          <p className="font-mono tracking-[0.18em]">BUILT WITH CODE + CURIOSITY</p>
        </div>
      </div>
    </footer>
  );
}
