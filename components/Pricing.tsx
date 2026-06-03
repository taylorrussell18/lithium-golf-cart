"use client";

import { useEffect, useRef, useState } from "react";

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="bg-[#091929] py-24 sm:py-32 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl text-white font-bold mb-4">
            Straightforward Pricing
          </h2>
          <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto" />
        </div>

        <div className="relative bg-gradient-to-br from-[#0f2744] to-[#1a4a7a] border border-[#22d3ee]/30 rounded-2xl p-10 sm:p-14 text-center shadow-2xl shadow-black/40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.06)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative">
            <p className="font-inter text-[#22d3ee]/70 text-sm tracking-widest uppercase mb-2">Starting At</p>
            <div
              className="font-playfair text-[#22d3ee] font-bold leading-none mb-2"
              style={{ fontSize: "clamp(4rem, 13vw, 7rem)", textShadow: "0 4px 30px rgba(34,211,238,0.25)" }}
            >
              $1,600
            </div>
            <p className="font-inter text-white/60 text-sm mb-2">Installed — parts and labor included</p>

            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 mb-10 max-w-xl mx-auto text-left">
              <p className="font-inter text-white/80 text-sm leading-relaxed">
                Pricing starts at $1,600 installed. Final pricing depends on your golf cart's voltage and configuration. Higher-voltage carts require additional components and may cost more. For example, one recent installation was completed for $1,980 installed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto mb-10">
              {[
                "36V LiFePO4 Battery",
                "Custom Battery Tray",
                "Smart Charger + Plug",
                "LCD Battery Monitor",
                "Full Mobile Installation",
                "Same-Day Completion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 font-inter text-white/80 text-sm">
                  <span className="text-[#22d3ee] text-base leading-none">&#10003;</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="bg-[#22d3ee]/15 border border-[#22d3ee]/30 text-[#22d3ee] font-inter text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
                Most installs completed in 1 day
              </span>
              <span className="bg-[#22d3ee]/15 border border-[#22d3ee]/30 text-[#22d3ee] font-inter text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
                We come to your home, business, or storage unit
              </span>
            </div>

            <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg px-5 py-3 mb-10 inline-block">
              <p className="font-inter text-amber-300 text-sm font-medium">
                Limited weekly install spots available — book early to secure your date.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-bold text-lg px-12 py-4 rounded shadow-xl hover:shadow-[#22d3ee]/30 hover:shadow-2xl transition-all duration-300 tracking-wide"
            >
              Get Scheduled Today
            </a>
          </div>
        </div>

        <p className="text-center font-inter text-white/30 text-xs mt-6">
          Contact us with your cart make, model, and voltage for an exact quote.
        </p>
      </div>
    </section>
  );
}
