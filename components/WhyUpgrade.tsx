"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "No More Buying Batteries Every Year",
    desc: "Lead-acid batteries need replacement every 2–4 years. LiFePO4 lasts a decade or more with proper care.",
  },
  {
    title: "2–3x Longer Lifespan",
    desc: "Lithium cells deliver 2,000–3,000+ charge cycles vs. 500–700 for lead-acid — a dramatic difference in long-term value.",
  },
  {
    title: "50-Mile Charge Range",
    desc: "Get up to 50 miles of range per charge — more than enough for a full day of riding, hauling, or work.",
  },
  {
    title: "More Power & Better Performance",
    desc: "Consistent voltage throughout the charge means full power from start to finish, not a fade at the end of the round.",
  },
  {
    title: "Lightweight — Better Ride & Speed",
    desc: "Lithium packs weigh roughly 60% less than lead-acid, reducing strain on the motor and improving hill-climbing ability.",
  },
  {
    title: "Plug In and Go — Super Simple",
    desc: "No water maintenance, no sulfation, no equalizing charges. Just plug in overnight and you're ready to roll.",
  },
];

function FadeInCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
    >
      {children}
    </div>
  );
}

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#22d3ee]/40 rounded-xl p-7 transition-all duration-300 cursor-default">
      <div className="w-8 h-0.5 bg-[#22d3ee] mb-5" />
      <h3 className="font-playfair text-white text-xl font-semibold mb-3 leading-snug">{title}</h3>
      <p className="font-inter text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function WhyUpgrade() {
  return (
    <section id="why" className="bg-[#0f2744] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInCard>
          <div className="text-center mb-16">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              The Upgrade Advantage
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-white font-bold mb-4">
              Why Go Lithium?
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto" />
          </div>
        </FadeInCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <FadeInCard key={b.title} delay={i * 100}>
              <BenefitCard {...b} />
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  );
}
