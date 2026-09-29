"use client";

import { motion, useReducedMotion } from "framer-motion";
import { workflow } from "@/data/experience";

export function Workflow() {
  const reduce = useReducedMotion();

  return (
    <section id="workflow" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">05 / HOW I BUILD</p>
        <h2 className="section-title">A CALM PROCESS.</h2>
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {workflow.map((step, i) => (
            <motion.div
              key={step.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] text-accent">{step.id}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-wide">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.copy}</p>
              {i < workflow.length - 1 ? (
                <span className="pointer-events-none absolute right-[-10px] top-1/2 hidden text-accent lg:block">
                  →
                </span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
