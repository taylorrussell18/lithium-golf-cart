"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f2744]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#091929] via-[#0f2744] to-[#1a4a7a]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#3b82f6]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#22d3ee]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-0">
        <div className="inline-flex items-center gap-2 bg-[#22d3ee]/15 border border-[#22d3ee]/30 text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
          <span>Premium Mobile Service</span>
        </div>

        <h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
        >
          Mobile Golf Cart
          <br />
          <span
            className="text-[#22d3ee]"
            style={{ textShadow: "0 2px 20px rgba(34,211,238,0.3)" }}
          >
            Lithium Conversion
          </span>
          <br />
          <span className="text-white/60 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Serving All of Oklahoma
          </span>
        </h1>

        <p className="font-inter text-xl sm:text-2xl md:text-3xl text-white/80 font-light mb-4 tracking-wide">
          Starting at $1,600 Installed &nbsp;•&nbsp; We Come To Your Home, Business, or Storage Unit
        </p>
        <p className="font-inter text-white/50 text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Full lithium upgrade including battery, custom tray, smart charger, and
          LCD monitor — done at your home or club.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo("contact")}
            className="group bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-bold text-base sm:text-lg px-10 py-4 rounded shadow-xl hover:shadow-[#22d3ee]/40 hover:shadow-2xl transition-all duration-300 tracking-wide w-full sm:w-auto"
          >
            Get Scheduled Today
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollTo("included")}
            className="border border-white/30 hover:border-[#22d3ee]/60 text-white/80 hover:text-[#22d3ee] font-inter font-medium text-base px-8 py-4 rounded transition-all duration-300 tracking-wide w-full sm:w-auto"
          >
            See What's Included
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm font-inter">
          {["Most installs done in 1 day", "Parts + labor all-in price", "EZGO · Club Car · Yamaha"].map((txt) => (
            <span key={txt} className="flex items-center gap-2">
              <span className="text-[#22d3ee]/60">✓</span> {txt}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
