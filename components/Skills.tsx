"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active) ?? skillCategories[0];
  const nodes = useMemo(() => {
    const r = 38;
    return skillCategories.map((c, i) => {
      const a = (Math.PI * 2 * i) / skillCategories.length - Math.PI / 2;
      return { ...c, x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
    });
  }, []);

  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">02 / DEVELOPER DNA</p>
        <h2 className="section-title">CONNECTED SYSTEMS.</h2>
        <p className="mt-4 max-w-xl text-sm text-muted">
          A working map of the stack I use to design, build, and ship software.
        </p>

        <div className="mt-10 hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <svg viewBox="0 0 100 100" className="h-auto w-full overflow-visible">
            {nodes.map((n) => (
              <line
                key={`l-${n.id}`}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke={n.id === active ? "rgba(94,232,212,0.7)" : "rgba(255,255,255,0.12)"}
                strokeWidth={n.id === active ? 0.45 : 0.22}
              />
            ))}
            <circle cx="50" cy="50" r="11" fill="#0A0A0A" stroke="rgba(94,232,212,0.45)" strokeWidth="0.4" />
            <text
              x="50"
              y="51.5"
              textAnchor="middle"
              fill="#F5F5F5"
              fontSize="3.2"
              letterSpacing="0.18"
            >
              NIKHIL
            </text>
            {nodes.map((n) => (
              <g key={n.id} className="cursor-pointer" onMouseEnter={() => setActive(n.id)}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.id === active ? 3.4 : 2.5}
                  fill={n.id === active ? "#5EE8D4" : "#0A0A0A"}
                  stroke="#5EE8D4"
                  strokeWidth="0.35"
                />
                <text
                  x={n.x}
                  y={n.y > 50 ? n.y + 6.2 : n.y - 4.4}
                  textAnchor="middle"
                  fill={n.id === active ? "#5EE8D4" : "#9A9A9A"}
                  fontSize="2.6"
                  letterSpacing="0.12"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="font-mono text-[11px] tracking-[0.24em] text-accent">{current.label}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {current.items.map((item) => (
                <motion.li
                  key={item}
                  layout
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-ink"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-3 lg:hidden">
          {skillCategories.map((c) => {
            const open = active === c.id;
            return (
              <div key={c.id} className="overflow-hidden rounded-2xl border border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                  onClick={() => setActive(c.id)}
                  aria-expanded={open}
                >
                  <span className="tracking-[0.14em] text-sm">{c.label}</span>
                  <ChevronDown
                    size={16}
                    className={`transition duration-300 ${open ? "rotate-180 text-accent" : "text-muted"}`}
                  />
                </button>
                {open ? (
                  <div className="flex flex-wrap gap-2 px-4 pb-4">
                    {c.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
