"use client";

import { motion, useReducedMotion } from "framer-motion";
import { certification, dsaPlatforms, hackathons } from "@/data/experience";

export function Achievements() {
  const reduce = useReducedMotion();

  return (
    <section id="achievements" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">06 / BUILT UNDER PRESSURE</p>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-[12vw] leading-[0.9] sm:text-7xl"
        >
          2× HACKATHON
          <br />
          FINALIST
        </motion.h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {hackathons.map((h) => (
            <div key={h} className="rounded-2xl border border-white/10 px-6 py-8">
              <p className="text-2xl font-semibold tracking-tight">{h}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="font-sans text-[18vw] font-semibold leading-none tracking-[-0.06em] text-ink sm:text-8xl">
              250+
            </p>
            <p className="mt-2 font-mono text-[12px] tracking-[0.22em] text-muted">
              DSA PROBLEMS SOLVED
            </p>
            <p className="mt-3 text-sm text-muted">{dsaPlatforms.join(" · ")}</p>
          </div>
          <article className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <p className="font-mono text-[10px] tracking-[0.22em] text-accent">CREDENTIAL</p>
            <h3 className="mt-4 text-2xl font-semibold">{certification.title}</h3>
            <p className="mt-1 text-sm text-muted">{certification.kind}</p>
            <p className="mt-4 text-sm">{certification.issuer}</p>
            <p className="mt-2 font-mono text-[11px] text-muted">{certification.date}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
