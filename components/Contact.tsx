"use client";

import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/data/site";

export function Contact() {
  const mailHref = `mailto:${site.email}`;
  const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">08 / LET&apos;S CONNECT</p>
        <h2 className="section-title text-[12vw] sm:text-7xl lg:text-8xl">
          LET&apos;S BUILD
          <br />
          SOMETHING.
        </h2>
        <p className="mt-6 max-w-xl text-muted">
          Have an idea, opportunity, or interesting problem to solve?
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={mailHref} className="btn-primary group w-full sm:w-auto">
            START A CONVERSATION
            <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={site.resumeHref}
            className="btn-ghost w-full sm:w-auto"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </a>
        </div>
        <ul className="mt-10 space-y-3 text-sm">
          <li className="flex items-center gap-3 text-muted">
            <Mail size={16} className="text-accent" />
            <a href={mailHref} className="hover:text-ink">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <Phone size={16} className="text-accent" />
            <a href={phoneHref} className="hover:text-ink">
              {site.phone}
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <LinkedInIcon size={16} className="text-accent" />
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              linkedin.com/in/nikhil-agrawal-58734b2a2
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <GitHubIcon size={16} className="text-accent" />
            {site.github ? (
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                GitHub
              </a>
            ) : (
              <span className="font-mono text-[11px] tracking-widest">[ADD GITHUB]</span>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
