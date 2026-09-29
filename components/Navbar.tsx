"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";
import { withBase } from "@/lib/utils";

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = site.nav.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0A0A0A]/70 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[padding,background] duration-300 ${
          compact ? "px-3 py-2" : "px-4 py-3"
        }`}
        aria-label="Primary"
      >
        <Link
          href="/"
          aria-label="Nikhil Agrawal — Home"
          className="group rounded-lg outline-none ring-accent/0 transition duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="block transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(94,232,212,0.55)]">
            <Logo variant="nav" />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 text-[12px] tracking-[0.12em] uppercase transition duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={withBase(site.resumeHref)}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-accent/50 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-accent shadow-[0_0_18px_rgba(94,232,212,0.18)] transition duration-300 hover:border-accent hover:bg-accent/10 sm:inline-flex"
          >
            RESUME
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="pointer-events-auto absolute inset-x-3 top-[4.5rem] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-sm tracking-[0.16em] uppercase text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={withBase(site.resumeHref)}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full border border-accent/50 px-4 py-3 text-center text-[12px] tracking-[0.18em] text-accent"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
