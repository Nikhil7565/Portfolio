import Link from "next/link";
import { Logo } from "@/components/Logo";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Nikhil Agrawal",
  description: site.summary,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 print:px-0 print:py-0">
      <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-accent print:hidden">
        ← Back to portfolio
      </Link>
      <header className="border-b border-white/10 pb-6">
        <Logo variant="nav" className="mb-4 h-14 max-w-[280px] sm:h-16 sm:max-w-[320px]" />
        <div>
          <h1 className="text-3xl font-semibold">{site.name}</h1>
          <p className="mt-1 text-sm text-muted">{site.roleLong}</p>
          <p className="mt-2 text-sm text-muted">
            {site.education.school} · {site.location}
          </p>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent">SUMMARY</h2>
        <p className="mt-2 text-sm leading-7 text-muted">{site.summary}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent">EDUCATION</h2>
        <p className="mt-2 text-sm">
          {site.education.degree}, {site.education.school} ({site.education.years})
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent">EXPERIENCE</h2>
        <div className="mt-3 space-y-5">
          {experience.map((item) => (
            <div key={item.id}>
              <p className="text-sm font-semibold">
                {item.title} — {item.org}
              </p>
              <p className="font-mono text-[11px] text-muted">{item.date}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent">PROJECTS</h2>
        <div className="mt-3 space-y-4">
          {projects.map((p) => (
            <div key={p.id}>
              <p className="text-sm font-semibold">
                {p.title} — {p.category}
              </p>
              <p className="font-mono text-[11px] text-muted">{p.date}</p>
              <p className="mt-1 text-sm text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent">SKILLS</h2>
        <div className="mt-3 space-y-2 text-sm text-muted">
          {skillCategories.map((c) => (
            <p key={c.id}>
              <span className="text-ink">{c.label}:</span> {c.items.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <p className="mt-12 text-xs text-muted print:hidden">
        Tip: use your browser print dialog to save this page as PDF, or replace{" "}
        <code>public/resume.pdf</code> and point <code>site.resumeHref</code> to it.
      </p>
    </div>
  );
}
