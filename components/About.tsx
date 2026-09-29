"use client";

import { motion, useReducedMotion } from "framer-motion";

const cards = [
  { n: "01", title: "BUILD", copy: "Web & Backend" },
  { n: "02", title: "THINK", copy: "DSA & Problem Solving" },
  { n: "03", title: "EXPLORE", copy: "AI / ML / NLP" },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">01 / BEHIND THE CODE</p>
        <h2 className="section-title">
          CURIOUS MIND.
          <br />
          BUILDER MINDSET.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">
          I’m a Computer Science and Engineering student at GLA University with hands-on
          experience in Java, Python, JavaScript, AI/ML, responsive web applications, REST APIs,
          and database-driven systems. I build PWA and AI-powered products using React, FastAPI,
          Firebase, PyTorch, and modern development tools — with strong problem-solving skills
          shown through 250+ DSA problems and hackathon finalist experience.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.n}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_32px_rgba(94,232,212,0.08)]"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent">{c.n}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.copy}</p>
            </motion.article>
          ))}
        </div>

        <motion.blockquote
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="mt-24 max-w-4xl font-sans text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl"
        >
          I don&apos;t just learn technologies.
          <br />
          <span className="text-gradient">I build with them.</span>
        </motion.blockquote>
      </div>
    </section>
  );
}
