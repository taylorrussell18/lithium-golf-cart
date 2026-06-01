"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1e] border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-playfair text-white text-xl font-bold">Lithium</span>
            </div>
            <p className="font-inter text-white/40 text-xs leading-relaxed">Golf Cart Conversions</p>
            <p className="font-inter text-[#22d3ee]/70 text-sm mt-3 italic font-light">
              "Power your ride — without the compromise."
            </p>
          </div>

          <div>
            <h4 className="font-inter text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Service</h4>
            <ul className="space-y-2 font-inter text-white/50 text-sm">
              <li>36V LiFePO4 Conversion</li>
              <li>Smart Charger Installation</li>
              <li>LCD Battery Monitor Setup</li>
              <li>Custom Battery Tray Fab</li>
              <li>Mobile — We Come To You</li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</h4>
            <ul className="space-y-2 font-inter text-white/50 text-sm">
              <li>
                <a href="tel:+14055203268" className="hover:text-[#22d3ee] transition-colors">
                  (405) 520-3268
                </a>
              </li>
              <li>
                <a href="mailto:G.russellcarts@gmail.com" className="hover:text-[#22d3ee] transition-colors">
                  G.russellcarts@gmail.com
                </a>
              </li>
              <li className="text-white/30 text-xs mt-3">
                Serving golf carts in your area —<br />
                just ask about our service radius.
              </li>
            </ul>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-5 bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-semibold text-xs px-5 py-2.5 rounded transition-all duration-200 tracking-wide"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/25 text-xs font-inter">
          <p>© {year} Lithium Golf Cart Conversions. All rights reserved.</p>
          <p>Premium mobile battery service</p>
        </div>
      </div>
    </footer>
  );
}
