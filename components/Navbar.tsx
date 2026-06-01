"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#091929]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
          <div className="text-left">
            <span className="font-playfair text-white text-lg leading-tight block tracking-wide">
              Lithium
            </span>
            <span className="text-[#22d3ee] text-xs tracking-[0.15em] uppercase font-inter font-medium block -mt-0.5">
              Golf Cart Conversions
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["What's Included", "included"],
            ["Why Upgrade", "why"],
            ["Gallery", "gallery"],
            ["Pricing", "pricing"],
            ["Reviews", "reviews"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-[#22d3ee] text-sm font-inter font-medium transition-colors duration-200 tracking-wide"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200 tracking-wide shadow-md hover:shadow-[#22d3ee]/30 hover:shadow-lg"
          >
            Book Now
          </button>
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        } bg-[#091929]/98 backdrop-blur-md`}
      >
        <div className="px-4 pb-4 flex flex-col gap-3">
          {[
            ["What's Included", "included"],
            ["Why Upgrade", "why"],
            ["Gallery", "gallery"],
            ["Pricing", "pricing"],
            ["Reviews", "reviews"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white/80 hover:text-[#22d3ee] text-sm font-inter font-medium text-left py-2 border-b border-white/10 transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-semibold text-sm px-5 py-3 rounded mt-2 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
