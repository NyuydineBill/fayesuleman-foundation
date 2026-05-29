"use client";

import { useEffect, useRef, useState } from "react";

interface Stat { value: number; suffix: string; label: string; detail: string }

const ACCENT = ["#C8932A", "#2E7DC4", "#0D2137", "#C8932A"];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1800, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(p < 1 ? Math.floor(eased * value) : value);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref} className="tabular-nums">{display.toLocaleString()}{suffix}</span>;
}

export default function ImpactCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 shadow-[0_8px_40px_rgba(13,33,55,0.14)]">
      {stats.map((s, i) => (
        <div key={s.label}
          className="bg-white px-5 py-8 sm:px-6 sm:py-10 lg:py-12 stat-animate border-b border-r border-border
            [&:nth-child(2)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0
            lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-b lg:[&:nth-child(4)]:border-b
            lg:last:border-r-0 border-l-4"
          style={{ animationDelay: `${i * 0.1}s`, borderLeftColor: ACCENT[i] }}
        >
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-medium mb-2 leading-none">
            <AnimatedNumber value={s.value} suffix={s.suffix} />
          </p>
          <p className="text-sm font-bold text-navy/90 mb-1">{s.label}</p>
          <p className="text-xs text-muted leading-relaxed">{s.detail}</p>
        </div>
      ))}
    </div>
  );
}
