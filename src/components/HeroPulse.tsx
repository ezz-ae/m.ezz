
// components/HeroPulse.tsx
"use client";

import { useEffect, useState } from "react";

export default function HeroPulse() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-white/5 via-transparent to-black opacity-80" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="text-xs tracking-[0.35em] uppercase text-neutral-500">
          ezz.ae
        </div>
        <h1
          className={`text-3xl md:text-5xl font-light transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Mahmoud Ezz
        </h1>
        <p
          className={`text-sm md:text-base text-neutral-400 transition-opacity delay-300 duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Intelligence System Architect · Marketing Strategist · AI-native builder
        </p>
        <div className="mt-10 text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-3">
          <span className="inline-block h-[1px] w-10 bg-neutral-600" />
          scroll to enter thinking
          <span className="inline-block h-[1px] w-10 bg-neutral-600" />
        </div>
      </div>
    </section>
  );
}
