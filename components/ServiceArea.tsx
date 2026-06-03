"use client";

import { useEffect, useRef, useState } from "react";

const cities = [
  "Oklahoma City", "Edmond", "Yukon", "Mustang", "Tuttle",
  "Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks",
  "Norman", "Moore", "Midwest City", "Del City", "Choctaw",
  "Stillwater", "Enid", "Lawton", "Shawnee", "Ardmore",
  "Durant", "McAlester", "Eufaula", "Muskogee", "Tahlequah",
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

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#f0f5ff] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Where We Work
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#0f2744] font-bold mb-4">
              Mobile Golf Cart Lithium Conversion Across Oklahoma
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-6" />
            <p className="font-inter text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We travel to customers across Oklahoma to perform golf cart lithium battery conversions on-site.
              Whether you're in the Oklahoma City metro, Tulsa area, or a smaller community — just reach out
              and we'll confirm we can come to you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="bg-white border border-[#0f2744]/10 rounded-2xl p-8 sm:p-10 shadow-sm mb-8">
            <p className="font-inter text-[#0f2744]/60 text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-center">
              Cities & Areas Currently Served
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {cities.map((city) => (
                <span
                  key={city}
                  className="bg-[#f0f5ff] border border-[#0f2744]/15 text-[#0f2744] font-inter text-sm px-4 py-1.5 rounded-full"
                >
                  {city}, OK
                </span>
              ))}
              <span className="bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#0f2744] font-inter text-sm px-4 py-1.5 rounded-full font-medium">
                + more — just ask
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {[
              { label: "OKC Metro", detail: "Oklahoma City, Edmond, Yukon, Mustang, Moore, Norman, Midwest City" },
              { label: "Tulsa Area", detail: "Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Muskogee" },
              { label: "Statewide", detail: "Lawton, Stillwater, Enid, Shawnee, McAlester, Durant, Ardmore, Eufaula" },
            ].map((region) => (
              <div key={region.label} className="bg-[#0f2744] rounded-xl p-6 text-left">
                <p className="font-playfair text-[#22d3ee] font-bold text-lg mb-2">{region.label}</p>
                <p className="font-inter text-white/50 text-xs leading-relaxed">{region.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-center font-inter text-gray-500 text-sm mt-8">
            Don't see your city?{" "}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="text-[#0f2744] font-semibold underline underline-offset-2 hover:text-[#22d3ee] transition-colors"
            >
              Contact us anyway
            </a>{" "}
            — we're always expanding our service radius across Oklahoma.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
