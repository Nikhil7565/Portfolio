"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">04 / EXPERIENCE</p>
        <h2 className="section-title">WHERE I&apos;VE PRACTICED.</h2>
        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-white/10 sm:left-[15px]" />
          <ol className="space-y-12">
            {experience.map((item, i) => (
              <motion.li
                key={item.id}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="relative grid gap-4 pl-10 sm:grid-cols-[220px_1fr] sm:pl-14"
              >
                <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border border-accent/50 bg-[#050505] shadow-[0_0_12px_rgba(94,232,212,0.35)]" />
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-accent">{item.date}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.org}</p>
                  {item.subtitle ? <p className="text-xs text-muted">{item.subtitle}</p> : null}
                </div>
                <ul className="space-y-2 text-sm leading-6 text-muted">
                  {item.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
