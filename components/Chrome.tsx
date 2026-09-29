"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      style={{ scaleX: reduce ? 0 : scrollYProgress }}
      aria-hidden
    />
  );
}

function useFinePointerHover() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const fine = window.matchMedia("(pointer: fine)");
      const hover = window.matchMedia("(hover: hover)");
      fine.addEventListener("change", onStoreChange);
      hover.addEventListener("change", onStoreChange);
      return () => {
        fine.removeEventListener("change", onStoreChange);
        hover.removeEventListener("change", onStoreChange);
      };
    },
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches,
    () => false,
  );
}

export function CustomCursor() {
  const reduce = useReducedMotion();
  const fineHover = useFinePointerHover();
  const enabled = fineHover && !reduce;
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHover(
        Boolean(t.closest("a, button, [role='button'], input, textarea, summary")),
      );
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className="rounded-full border border-white bg-white/90 transition-[width,height,margin] duration-300"
        style={{
          width: hover ? 28 : 8,
          height: hover ? 28 : 8,
          marginLeft: hover ? -14 : -4,
          marginTop: hover ? -14 : -4,
        }}
      />
    </div>
  );
}
