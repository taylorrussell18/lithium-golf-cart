"use client";

import { useEffect, useRef, useState } from "react";

const carts = [
  { brand: "EZGO", models: "TXT · RXV · Medalist", icon: "🟦" },
  { brand: "Club Car", models: "DS · Precedent · Onward", icon: "🟦" },
  { brand: "Yamaha", models: "G-Series · Drive · Drive2", icon: "🟦" },
];

export default function Compatibility() {
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
    <section id="compatibility" className="bg-[#f0f5ff] py-24 sm:py-32 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-14">
          <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
            Wide Compatibility
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#0f2744] font-bold mb-4">
            Works With Your Cart
          </h2>
          <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-8" />
          <p className="font-inter text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compatible with most standard 36V golf carts including EZGO (TXT),
            Club Car, and Yamaha (G-Series to Drive2). Not sure if yours qualifies?
            Just ask — we'll confirm before we book.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {carts.map((cart, i) => (
            <div
              key={cart.brand}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`bg-white border border-[#0f2744]/10 rounded-xl p-7 text-center shadow-sm hover:shadow-md hover:border-[#22d3ee]/40 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="text-3xl mb-3">{cart.icon}</div>
              <h3 className="font-playfair text-[#0f2744] text-2xl font-bold mb-1">{cart.brand}</h3>
              <p className="font-inter text-gray-500 text-sm">{cart.models}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f2744] rounded-xl px-8 py-5">
          <div>
            <p className="font-inter text-white font-medium">Not sure if your cart qualifies?</p>
            <p className="font-inter text-white/50 text-sm mt-0.5">
              Other 36V carts may also be compatible — just reach out and we'll check.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="shrink-0 bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-semibold text-sm px-6 py-3 rounded transition-all duration-200"
          >
            Ask Us →
          </a>
        </div>
      </div>
    </section>
  );
}
