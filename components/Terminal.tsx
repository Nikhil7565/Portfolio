"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";

const commands = {
  whoami: ["Software Developer", "AI/ML Builder", "Problem Solver"],
  stack: ["Java", "Python", "TypeScript", "React", "FastAPI", "PyTorch"],
  experience: ["AI/ML", "Web Development"],
  status: ["OPEN TO OPPORTUNITIES"],
} as const;

type Cmd = keyof typeof commands;

export function Terminal() {
  const [cmd, setCmd] = useState<Cmd>("whoami");
  const lines = useMemo(() => commands[cmd], [cmd]);

  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <p className="ml-3 font-mono text-[11px] tracking-widest text-muted">nikhil@portfolio</p>
        </div>
        <div className="p-5 font-mono text-[13px] leading-7">
          <p className="text-muted">
            {site.name.split(" ")[0].toLowerCase()}@portfolio:~$ {cmd}
          </p>
          {lines.map((line) => (
            <p key={line} className="text-ink">
              <span className="text-accent">&gt;</span> {line}
            </p>
          ))}
          <div className="mt-5 flex flex-wrap gap-2">
            {(Object.keys(commands) as Cmd[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCmd(c)}
                className={`rounded-full border px-3 py-1 text-[11px] tracking-widest ${
                  cmd === c ? "border-accent text-accent" : "border-white/10 text-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
