"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How long does the installation take?",
    a: "Most installations are completed in a single day — typically 2 to 4 hours on-site depending on your cart model and configuration. We arrive with all parts ready to go, handle everything from removing the old batteries to testing the new system, and clean up before we leave. You can ride the same day.",
  },
  {
    q: "What golf cart models are compatible?",
    a: "We support most standard 36V golf carts including EZGO (TXT, RXV, Medalist), Club Car (DS, Precedent, Onward), and Yamaha (G-series through Drive2). Other 36V carts may also qualify — just contact us with your make, model, and year and we'll confirm before we book. We'll never schedule a job we can't complete correctly.",
  },
  {
    q: "How long will the lithium battery last?",
    a: "Our LiFePO4 batteries are rated for 6,000+ charge cycles, which translates to 10 or more years of regular use. Compare that to lead-acid batteries, which typically need replacement every 2–4 years. Over a 10-year period, lithium is far more cost-effective — even before you factor in the maintenance savings and improved performance.",
  },
  {
    q: "What's included in the $1,600 price?",
    a: "Everything: the 36V LiFePO4 105Ah lithium battery, a custom battery tray fitted to your cart, a smart charger with external charging port installed on the cart body, an LCD battery monitor mounted in the dash, and full mobile installation with testing. Parts and labor are all included — no hidden fees. Final price may vary based on voltage and cart configuration.",
  },
  {
    q: "Can I charge the battery at home?",
    a: "Yes — and it couldn't be simpler. We install an external charging port on your cart so you just plug in like you would a phone or power tool. The included smart charger automatically stops when the battery reaches 100%, so you can leave it plugged in overnight without worry. A standard 110V household outlet is all you need.",
  },
  {
    q: "How much longer will my cart run on lithium vs. lead-acid?",
    a: "Significantly longer. Our lithium batteries provide up to 50 miles of range per charge with consistent power from start to finish. Lead-acid batteries not only offer less total range — they also fade as the charge drops, meaning you lose power and speed before the battery is even fully depleted. With lithium, you get full performance until the battery is nearly empty.",
  },
  {
    q: "Is lithium safe in a golf cart?",
    a: "LiFePO4 (lithium iron phosphate) is the safest lithium chemistry available — it's specifically chosen for golf cart and electric vehicle applications because of its thermal stability. It does not overheat or catch fire the way cheaper lithium-ion chemistries can. It's the same chemistry used in many electric buses and commercial EVs.",
  },
  {
    q: "Do I need to do any maintenance on the lithium battery?",
    a: "No. That's one of the biggest advantages over lead-acid. Lead-acid batteries require regular water top-offs, periodic equalization charges, and careful monitoring to avoid sulfation. LiFePO4 requires none of that — just plug it in when you're done riding and you're good to go.",
  },
  {
    q: "What if my cart requires a different voltage?",
    a: "While we specialize in 36V systems, we do work with other configurations. Pricing and parts vary based on your cart's voltage — higher-voltage systems require additional components. Contact us with your cart's make, model, and voltage and we'll give you an exact quote before anything is scheduled.",
  },
  {
    q: "Do you service areas outside Oklahoma City?",
    a: "Yes — we travel throughout Oklahoma. We regularly serve the OKC metro (Edmond, Yukon, Mustang, Moore, Norman), the Tulsa area (Broken Arrow, Owasso, Jenks, Bixby), and statewide destinations including Lawton, Stillwater, Shawnee, McAlester, Eufaula, Durant, Ardmore, and more. Contact us with your city and we'll confirm we can reach you.",
  },
  {
    q: "How do I get started?",
    a: "Just fill out the contact form below or call us at (405) 520-3268. Tell us your cart make, model, and where you're located in Oklahoma. We'll confirm compatibility, give you a firm price, and get you on the schedule — usually within the same week.",
  },
  {
    q: "Will the lithium battery work with my existing charger?",
    a: "We include a new smart charger specifically matched to your lithium battery as part of every installation. Using an old lead-acid charger on a lithium battery is not recommended and can reduce battery life. The new charger and external charging port are part of the all-in price.",
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
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-4" />
            <p className="font-inter text-gray-500 text-sm max-w-lg mx-auto">
              Everything you need to know about golf cart lithium battery conversions in Oklahoma.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 20}>
              <div className="bg-white rounded-xl border border-[#0f2744]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-4 hover:bg-[#f0f5ff] transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-playfair text-[#0f2744] font-semibold text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <span className={`text-[#22d3ee] text-2xl font-light mt-0.5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 pt-0 border-t border-[#0f2744]/10 font-inter text-gray-600 text-sm sm:text-base leading-relaxed">
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
