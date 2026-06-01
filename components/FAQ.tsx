"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How long does the installation take?",
    a: "Most installations are completed in a single day. We come to your home, business, or storage facility and handle everything on-site.",
  },
  {
    q: "What golf cart models are compatible?",
    a: "We support most standard 36V golf carts including EZGO (TXT, RXV, Medalist), Club Car (DS, Precedent, Onward), and Yamaha (G-series through Drive2). Contact us to verify your specific model.",
  },
  {
    q: "How long will the lithium battery last?",
    a: "Our LiFePO4 batteries are rated for 6,000+ charge cycles, which typically translates to 10+ years of reliable use with proper care.",
  },
  {
    q: "What's included in the $1,600 price?",
    a: "Everything: 36V LiFePO4 105Ah battery, custom battery tray, smart charger with external plug, LCD battery monitor, and full mobile installation. There are no hidden fees.",
  },
  {
    q: "Can I charge the battery at home?",
    a: "Yes. We install an external charging plug on your cart so you can charge at home overnight or whenever you need. The smart charger automatically stops when fully charged.",
  },
  {
    q: "How much longer will my cart run on lithium vs. lead-acid?",
    a: "Our lithium batteries provide up to 50 miles of range per charge with consistent power throughout. Most users notice improved speed, better hill-climbing ability, and longer run times.",
  },
  {
    q: "Do you service areas outside Oklahoma?",
    a: "Currently we serve all of Oklahoma. Contact us to discuss your location and we'll let you know if we can help.",
  },
  {
    q: "What if my cart requires a different voltage?",
    a: "While we specialize in 36V systems, pricing varies based on your cart's voltage and configuration. Contact us for a custom quote.",
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#f0f5ff] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Common Questions
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#0f2744] font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto" />
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 30}>
              <div className="bg-white rounded-xl border border-[#0f2744]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-4 hover:bg-[#f0f5ff] transition-colors"
                >
                  <span className="font-playfair text-[#0f2744] font-semibold text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <span className={`text-[#22d3ee] text-2xl font-light mt-0.5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-4 pt-0 border-t border-[#0f2744]/10 font-inter text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
