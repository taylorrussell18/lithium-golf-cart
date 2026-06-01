"use client";

import { useEffect, useRef, useState } from "react";

// Add real customer reviews here. Copy the text from Google/Facebook/texts.
// Set googleReviewUrl to your Google Business review link.
const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"; // ← replace with your link

const reviews = [
  {
    name: "Mike T.",
    location: "Sun City, AZ",
    stars: 5,
    text: "These guys did an amazing job. Came out to my house, had the whole thing done in a few hours. Cart runs better than it ever did with the old lead-acid. Wish I had done this years ago.",
    cart: "EZGO TXT",
  },
  {
    name: "Sandra R.",
    location: "The Villages, FL",
    stars: 5,
    text: "Super professional from start to finish. The LCD monitor is a game changer — I always know exactly how much charge I have left. Installation was spotless, no mess whatsoever.",
    cart: "Club Car Precedent",
  },
  {
    name: "Dave K.",
    location: "Scottsdale, AZ",
    stars: 5,
    text: "Outstanding value. $1,600 all-in and you get a battery that'll last 10+ years. The cart is noticeably faster going up hills now. 10/10 recommend.",
    cart: "Yamaha Drive2",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-[#22d3ee]" : "text-white/20"}>★</span>
      ))}
    </div>
  );
}

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

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#091929] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Customer Reviews
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-white font-bold mb-4">
              What Our Customers Say
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-4" />
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#22d3ee] text-xl">★</span>
                ))}
              </div>
              <span className="font-inter text-white/50 text-sm">5.0 average rating</span>
            </div>
          </div>
        </FadeIn>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 100}>
              <div className="h-full bg-white/5 border border-white/10 hover:border-[#22d3ee]/30 rounded-xl p-7 transition-all duration-300 flex flex-col gap-4">
                <Stars count={r.stars} />
                <p className="font-inter text-white/75 text-sm leading-relaxed flex-1">
                  "{r.text}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-inter text-white font-semibold text-sm">{r.name}</p>
                  <p className="font-inter text-white/40 text-xs mt-0.5">{r.location} · {r.cart}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Leave a review CTA */}
        <FadeIn delay={300}>
          <div className="text-center bg-gradient-to-br from-[#0f2744] to-[#1a4a7a] border border-[#22d3ee]/20 rounded-2xl p-8 sm:p-10">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-playfair text-white text-2xl sm:text-3xl font-bold mb-2">
              Had a great experience?
            </h3>
            <p className="font-inter text-white/50 text-sm sm:text-base mb-6 max-w-md mx-auto">
              We'd love to hear from you. Leaving a Google review takes less than a minute and helps other cart owners find us.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-bold text-sm px-8 py-3.5 rounded shadow-lg hover:shadow-[#22d3ee]/30 hover:shadow-xl transition-all duration-200 tracking-wide"
            >
              <span>Leave a Google Review</span>
              <span>→</span>
            </a>
            <p className="font-inter text-white/25 text-xs mt-4">
              Opens Google Reviews in a new tab
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
