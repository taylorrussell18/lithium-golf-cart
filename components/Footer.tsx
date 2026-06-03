"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1e] border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-playfair text-white text-xl font-bold">Mobile Golf Carts</span>
            </div>
            <p className="font-inter text-white/40 text-xs leading-relaxed">
              Golf Cart Lithium Battery Conversions<br />Oklahoma
            </p>
            <p className="font-inter text-[#22d3ee]/70 text-sm mt-3 italic font-light">
              "Power your ride — without the compromise."
            </p>
            {/* NAP for local SEO */}
            <address className="not-italic font-inter text-white/30 text-xs mt-4 leading-relaxed">
              Mobile Golf Carts<br />
              Oklahoma City, OK<br />
              <a href="tel:+14055203268" className="hover:text-[#22d3ee] transition-colors">(405) 520-3268</a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Service</h4>
            <ul className="space-y-2 font-inter text-white/50 text-sm">
              <li>36V LiFePO4 Lithium Conversion</li>
              <li>Smart Charger Installation</li>
              <li>LCD Battery Monitor Setup</li>
              <li>Custom Battery Tray Fabrication</li>
              <li>Mobile — We Come To You</li>
            </ul>
            <h4 className="font-inter text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mt-6 mb-3">Service Area</h4>
            <p className="font-inter text-white/40 text-xs leading-relaxed">
              Oklahoma City · Edmond · Tulsa · Norman<br />
              Lawton · Stillwater · McAlester · Eufaula<br />
              + statewide across Oklahoma
            </p>
          </div>

          {/* Contact */}
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
              <li className="text-white/30 text-xs mt-3 leading-relaxed">
                Serving golf cart owners across all of Oklahoma —<br />
                we come to your home, club, or storage facility.
              </li>
            </ul>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="mt-5 inline-block bg-[#22d3ee] hover:bg-[#67e8f9] text-[#091929] font-inter font-semibold text-xs px-5 py-2.5 rounded transition-all duration-200 tracking-wide"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/25 text-xs font-inter">
          <p>© {year} Mobile Golf Carts — Oklahoma. All rights reserved.</p>
          <p>Golf cart lithium battery conversion · Oklahoma City, OK</p>
        </div>
      </div>
    </footer>
  );
}
