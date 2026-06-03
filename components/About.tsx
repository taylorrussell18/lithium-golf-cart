"use client";

import { useEffect, useRef, useState } from "react";

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

const credentials = [
  { icon: "📍", label: "Based in Oklahoma", detail: "Locally owned and operated — not a franchise, not a call center." },
  { icon: "🔋", label: "LiFePO4 Specialist", detail: "We exclusively install lithium iron phosphate — the safest, longest-lasting chemistry available." },
  { icon: "🚐", label: "Fully Mobile", detail: "Every job is done on-site at your location. No shop, no drop-off, no hassle." },
  { icon: "✅", label: "Satisfaction Guaranteed", detail: "We don't leave until the system is tested and you're comfortable with how it works." },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f0f5ff] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Who We Are
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#0f2744] font-bold mb-4">
              Oklahoma's Mobile Golf Cart Lithium Expert
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeIn delay={100}>
            <div className="space-y-5 font-inter text-gray-600 text-base leading-relaxed">
              <p>
                Hi — I'm <strong className="text-[#0f2744]">Gary Russell</strong>, and I run Mobile Golf Carts out of Oklahoma.
                I started this business because I kept seeing the same problem: golf cart owners in Oklahoma were spending
                hundreds of dollars every few years on new lead-acid batteries, dealing with maintenance headaches, and
                getting less and less range as the batteries aged.
              </p>
              <p>
                The fix is lithium — specifically LiFePO4 chemistry, which lasts 10+ years, requires zero maintenance,
                and delivers full power on every single charge. The problem was that most conversion services either
                required you to haul your cart somewhere or charged a premium for the convenience of on-site work.
              </p>
              <p>
                I built Mobile Golf Carts to make lithium conversions accessible and genuinely convenient for Oklahomans.
                I come to your home, your golf club, or your storage unit — anywhere in Oklahoma — and complete the
                entire installation the same day. No hassle. No middleman. Just a clean, professional job done right.
              </p>
              <p className="text-[#0f2744] font-medium">
                Every cart I work on gets the same attention I'd give my own. That's the whole business model.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div key={c.label} className="bg-white border border-[#0f2744]/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#22d3ee]/30 transition-all duration-300">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <p className="font-playfair text-[#0f2744] font-semibold text-base mb-1">{c.label}</p>
                  <p className="font-inter text-gray-500 text-xs leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
