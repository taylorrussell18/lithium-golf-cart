"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    icon: "🔋",
    title: "36V LiFePO4 Lithium Battery",
    desc: "High-performance lithium iron phosphate battery engineered for golf cart applications — safer chemistry, consistent voltage delivery.",
  },
  {
    icon: "🔧",
    title: "Custom Battery Tray & Floor",
    desc: "Purpose-built mounting solution fitted to your specific cart model. Clean, secure, and professionally finished.",
  },
  {
    icon: "🔌",
    title: "Smart Charger + External Plug",
    desc: "Automatic smart charger with external plug installation for easy, damage-free charging without opening the cart.",
  },
  {
    icon: "📊",
    title: "LCD Battery Monitor",
    desc: "Real-time display of battery percentage, voltage, and temperature. Always know exactly how much charge you have left.",
  },
  {
    icon: "🚐",
    title: "Clean Professional Mobile Installation",
    desc: "Our tech comes to your home, club, or storage facility. No towing, no drop-off — we handle everything on-site.",
  },
];

function FadeInItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

export default function WhatsIncluded() {
  return (
    <section id="included" className="bg-[#f0f5ff] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInItem>
          <div className="text-center mb-16">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Everything Included
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#0f2744] font-bold mb-4">
              What's in the Package
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto" />
          </div>
        </FadeInItem>

        <div className="grid gap-6 sm:gap-8">
          {items.map((item, i) => (
            <FadeInItem key={item.title} delay={i * 80}>
              <div className="group flex gap-5 sm:gap-6 bg-white rounded-xl p-6 sm:p-7 border border-[#0f2744]/8 shadow-sm hover:shadow-md hover:border-[#22d3ee]/40 transition-all duration-300">
                <div className="shrink-0 w-14 h-14 bg-[#0f2744]/5 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#0f2744]/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-[#0f2744] text-xl font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </div>

        <FadeInItem delay={500}>
          <div className="mt-12 bg-[#0f2744] rounded-2xl p-8 text-white">
            <p className="font-playfair text-xl sm:text-2xl font-bold mb-6 text-center">
              Battery Specifications
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { value: "105 Ah", label: "Amp Hours" },
                { value: "50 mi", label: "Charge Range" },
                { value: "4,032 Wh", label: "Energy Capacity" },
                { value: "6,000+", label: "Cycle Life" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-playfair text-[#22d3ee] text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="font-inter text-white/50 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInItem>
      </div>
    </section>
  );
}
