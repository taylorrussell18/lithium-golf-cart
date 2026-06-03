"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Cart",
    desc: "Reach out by phone, email, or the form below. Let us know your cart make, model, and voltage — that's all we need to confirm compatibility and give you an exact price. No obligation, no pressure.",
  },
  {
    number: "02",
    title: "We Confirm & Schedule",
    desc: "Once we verify your cart qualifies, we'll lock in an install date that works for you. Most customers in the Oklahoma City, Edmond, Tulsa, and surrounding areas get scheduled within the same week.",
  },
  {
    number: "03",
    title: "We Come to You",
    desc: "Our tech arrives at your home, golf club, or storage facility on the scheduled day with all parts in hand — battery, tray, charger, monitor, and every tool needed. No towing, no drop-off required.",
  },
  {
    number: "04",
    title: "Done the Same Day — Ride Tonight",
    desc: "Most installs are completed in a few hours on-site. We test the system, walk you through the LCD monitor and charger, and you're back on the course the same day. Clean job, no mess left behind.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {children}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="process" className="bg-[#0f2744] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Simple Process
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-white font-bold mb-4">
              How It Works
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-6" />
            <p className="font-inter text-white/50 text-base max-w-xl mx-auto leading-relaxed">
              From first contact to riding on lithium — here's exactly what to expect when you book a mobile golf cart lithium conversion in Oklahoma.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="group h-full bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#22d3ee]/40 rounded-xl p-7 transition-all duration-300">
                <div className="font-playfair text-[#22d3ee]/30 text-5xl font-bold leading-none mb-4 group-hover:text-[#22d3ee]/50 transition-colors">
                  {step.number}
                </div>
                <h3 className="font-playfair text-white text-xl font-semibold mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
