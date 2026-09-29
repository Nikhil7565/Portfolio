import { site } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">07 / EDUCATION</p>
        <h2 className="section-title">FOUNDATION.</h2>
        <article className="mt-10 overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-10">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent">{site.education.years}</p>
          <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.education.school}
          </h3>
          <p className="mt-3 text-muted">{site.location}</p>
          <p className="mt-8 max-w-xl text-lg text-ink">{site.education.degree}</p>
        </article>
      </div>
    </section>
  );
}
