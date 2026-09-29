"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe, X } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">03 / SELECTED WORK</p>
        <h2 className="section-title">THINGS I&apos;VE BUILT.</h2>
        <div className="mt-14 space-y-24">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={i % 2 === 1}
              onOpen={() => setOpen(project)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open ? <ProjectCaseStudy project={open} onClose={() => setOpen(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  reverse,
  onOpen,
}: {
  project: Project;
  reverse: boolean;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className={`group grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A0A0A] text-left transition duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(94,232,212,0.12)]"
      >
        <div className="overflow-hidden">
          <div className="transition duration-500 group-hover:scale-[1.03]">
            <ProjectVisual project={project} />
          </div>
        </div>
      </button>

      <div>
        <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
          {project.number} / {project.category}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight transition duration-300 group-hover:translate-x-1 sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] text-muted">{project.date}</p>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-ink transition duration-300 group-hover:border-accent/30"
            >
              {t}
            </li>
          ))}
        </ul>
        <ul className="mt-5 space-y-1 text-sm text-muted">
          {project.features.slice(0, 4).map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button type="button" onClick={onOpen} className="btn-ghost !px-0 border-0">
            VIEW CASE STUDY
            <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
          </button>
          <PlaceholderLink href={project.liveDemo} label="Live Demo" icon={<Globe size={14} />} missing="[ADD LIVE DEMO]" />
          <PlaceholderLink href={project.github} label="GitHub" icon={<GitHubIcon size={14} />} missing="[ADD GITHUB]" />
        </div>
      </div>
    </motion.article>
  );
}

function PlaceholderLink({
  href,
  label,
  icon,
  missing,
}: {
  href: string | null;
  label: string;
  icon: ReactNode;
  missing: string;
}) {
  if (!href) {
    return <span className="font-mono text-[10px] tracking-widest text-muted">{missing}</span>;
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-ink hover:text-accent"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "oswal-point-centre") {
    return (
      <div className="flex min-h-[320px] flex-col justify-between p-6 sm:min-h-[420px]">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted">ENTERPRISE FLOW</p>
        <div className="flex flex-wrap items-center gap-2">
          {project.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 font-mono text-[11px] text-accent">
                {step}
              </span>
              {i < project.flow.length - 1 ? <span className="text-muted">↓</span> : null}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 p-4">
            <p className="font-mono text-[10px] text-muted">QR SCAN</p>
            <div className="mt-3 h-16 rounded-md border border-dashed border-accent/30" />
          </div>
          <div className="rounded-xl border border-white/10 p-4">
            <p className="font-mono text-[10px] text-muted">WARRANTY</p>
            <div className="mt-3 h-2 w-2/3 rounded-full bg-accent/40" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "image-caption-generator") {
    return (
      <div className="flex min-h-[320px] flex-col gap-4 p-6 sm:min-h-[420px]">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted">VISION → LANGUAGE</p>
        {["Upload Image", "Generating Caption...", "Generated natural-language description"].map(
          (step, i) => (
            <div key={step} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="font-mono text-[10px] text-accent">0{i + 1}</p>
              <p className="mt-1 text-sm text-ink">{step}</p>
            </div>
          ),
        )}
        <div className="flex flex-wrap gap-2">
          {project.flow.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[320px] flex-col justify-between p-6 sm:min-h-[420px]">
      <p className="font-mono text-[10px] tracking-[0.2em] text-muted">THIS WEBSITE</p>
      <div className="rounded-xl border border-accent/25 p-4">
        <div className="mb-3 h-2 w-24 rounded-full bg-accent/50" />
        <p className="text-2xl font-semibold tracking-tight">NIKHIL AGRAWAL</p>
        <p className="mt-1 font-mono text-[10px] text-muted">SOFTWARE DEVELOPER • AI/ML BUILDER</p>
      </div>
      <p className="text-xs text-muted">A live case study of brand, layout, and interaction.</p>
    </div>
  );
}

function ProjectCaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[75] overflow-y-auto bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.id}-title`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-auto min-h-full max-w-4xl px-5 py-16">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
              {project.number} / CASE STUDY
            </p>
            <h3 id={`${project.id}-title`} className="mt-3 text-4xl font-semibold">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 p-2"
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        <dl className="mt-10 space-y-8">
          <Block title="PROBLEM" value={project.caseStudy.problem} />
          <Block title="SOLUTION" value={project.caseStudy.solution} />
          <div>
            <dt className="font-mono text-[11px] tracking-[0.2em] text-accent">FEATURES</dt>
            <dd className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <p key={f} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-muted">
                  {f}
                </p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-[0.2em] text-accent">TECHNOLOGY</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full border border-accent/25 px-3 py-1 text-sm">
                  {t}
                </span>
              ))}
            </dd>
          </div>
          <Block title="MY CONTRIBUTION" value={project.caseStudy.contribution} missing="[ADD MY CONTRIBUTION]" />
          <Block title="CURRENT STATUS" value={project.caseStudy.status} />
        </dl>
      </div>
    </motion.div>
  );
}

function Block({
  title,
  value,
  missing = "[ADD DETAILS]",
}: {
  title: string;
  value: string | null;
  missing?: string;
}) {
  return (
    <div>
      <dt className="font-mono text-[11px] tracking-[0.2em] text-accent">{title}</dt>
      <dd className="mt-2 max-w-2xl text-sm leading-7 text-muted">{value ?? missing}</dd>
    </div>
  );
}
