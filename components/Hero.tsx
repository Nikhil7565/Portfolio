"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12"
    >
      <HeroBackdrop reduce={Boolean(reduce)} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-accent">
            SOFTWARE DEVELOPER • AI/ML BUILDER
          </p>
          <h1 className="font-sans text-[14vw] font-semibold leading-[0.86] tracking-[-0.05em] text-ink sm:text-7xl lg:text-[6.4rem]">
            I BUILD
            <br />
            <span className="text-gradient">INTELLIGENT</span>
            <br />
            DIGITAL PRODUCTS.
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
            {site.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#projects" className="btn-primary">
              EXPLORE MY WORK
              <ArrowRight size={16} />
            </a>
            <a
              href={site.resumeHref}
              className="btn-ghost"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted">
            {site.linkedin ? (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-accent"
              >
                <LinkedInIcon size={18} />
              </a>
            ) : (
              <span className="font-mono text-[10px] tracking-widest">[ADD LINKEDIN]</span>
            )}
            {site.github ? (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-accent"
              >
                <GitHubIcon size={18} />
              </a>
            ) : (
              <span className="font-mono text-[10px] tracking-widest">[ADD GITHUB]</span>
            )}
            {site.email ? (
              <a href={`mailto:${site.email}`} aria-label="Email" className="transition hover:text-accent">
                <Mail size={18} />
              </a>
            ) : (
              <span className="font-mono text-[10px] tracking-widest">[ADD EMAIL]</span>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
        >
          <Portrait />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3">
        {site.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
          >
            <p className="font-sans text-3xl font-semibold tracking-tight text-ink">{m.value}</p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.22em] text-muted">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_center,rgba(94,232,212,0.16),transparent_62%)]" />
      <div className="grid-bg absolute inset-6 rounded-[1.6rem] opacity-50" />
      <div className="glass relative overflow-hidden rounded-[1.75rem] border border-accent/35 p-3 shadow-[0_0_50px_rgba(79,215,204,0.12)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[#070707]">
          <Image
            src={site.profileImage}
            alt="Nikhil Agrawal — Software Developer and AI/ML Builder"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-top transition duration-700 hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <div className="pointer-events-none absolute right-4 top-4 rounded-lg border border-white/10 bg-black/40 px-2 py-1 font-mono text-[9px] tracking-widest text-accent backdrop-blur-sm">
            NA-01
          </div>
          <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.18em] text-white/80">
            {site.location.toUpperCase()}
          </p>
        </div>
      </div>

      <aside className="glass absolute -bottom-6 left-3 max-w-[220px] rounded-2xl border border-white/12 p-4 sm:left-[-18px]">
        <p className="font-mono text-[9px] tracking-[0.24em] text-muted">SYSTEM STATUS</p>
        <p className="mt-2 flex items-center gap-2 text-[12px] tracking-[0.14em] text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#5EE8D4]" />
          ONLINE
        </p>
        <div className="mt-3 space-y-1 font-mono text-[10px] tracking-[0.16em] text-muted">
          <p>
            FOCUS <span className="text-ink">AI + WEB</span>
          </p>
          <p>
            BUILDING <span className="text-ink">DIGITAL PRODUCTS</span>
          </p>
        </div>
      </aside>
    </div>
  );
}

function HeroBackdrop({ reduce }: { reduce: boolean }) {
  return (
    <div
      className="absolute inset-0 -z-0"
      onMouseMove={(e) => {
        if (reduce) return;
        const el = e.currentTarget.querySelector("[data-light]") as HTMLElement | null;
        if (!el) return;
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
      }}
    >
      <div className="grid-bg absolute inset-0 opacity-[0.35]" />
      <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,232,212,0.16),transparent_68%)]" />
      {!reduce ? (
        <div
          data-light
          className="pointer-events-none absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,232,212,0.14),transparent_70%)]"
          style={{ left: "60%", top: "40%" }}
        />
      ) : null}
    </div>
  );
}
