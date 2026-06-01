"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Drop your install photos into /public/installs/
// Name them install-1.jpg, install-2.jpg, etc. and add them to this array.
// Supported formats: .jpg, .jpeg, .png, .webp
const photos: { src: string; alt: string }[] = [
  { src: "/installs/install-battery-and-charger.jpeg", alt: "Lithium battery and smart charger mounted in golf cart floor" },
  { src: "/installs/install-lcd-monitor.jpeg", alt: "Smart battery LCD monitor installed in dash showing 72% charge" },
  { src: "/installs/install-charging-port.jpeg", alt: "External charging port installed on cart body" },
  { src: "/installs/charger-specs.png", alt: "Smart charger — 0 to 100% in under 5.5 hours" },
  { src: "/installs/battery-specs.png", alt: "LiFePO4 105Ah battery — 6000+ cycle lifespan" },
];

const PLACEHOLDER_COUNT = 6;

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
      className={`transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      {children}
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const hasPhotos = photos.length > 0;

  return (
    <section id="gallery" className="bg-[#f0f5ff] py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
              Our Work
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#0f2744] font-bold mb-4">
              Install Gallery
            </h2>
            <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-4" />
            <p className="font-inter text-gray-500 text-sm max-w-md mx-auto">
              Real installs, real carts. Every job finished clean and professional.
            </p>
          </div>
        </FadeIn>

        {hasPhotos ? (
          <>
            {/* Photo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {photos.map((photo, i) => (
                <FadeIn key={photo.src} delay={i * 60}>
                  <button
                    onClick={() => setLightbox(i)}
                    className="group relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[#0f2744]/10 border border-[#0f2744]/10 hover:border-[#22d3ee]/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#0f2744]/0 group-hover:bg-[#0f2744]/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl">🔍</span>
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setLightbox(null)}
              >
                <button
                  className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl font-light"
                  onClick={() => setLightbox(null)}
                >
                  ✕
                </button>
                <div className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3]">
                  <Image
                    src={photos[lightbox].src}
                    alt={photos[lightbox].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
                <div className="absolute bottom-6 flex gap-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-inter text-sm transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-inter text-sm transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Placeholder state — shown until photos are added */
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div className="w-full aspect-[4/3] rounded-xl bg-[#0f2744]/8 border-2 border-dashed border-[#0f2744]/20 flex flex-col items-center justify-center gap-2">
                    <span className="text-3xl opacity-30">📷</span>
                    <span className="font-inter text-[#0f2744]/30 text-xs">Photo {i + 1}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="text-center bg-[#0f2744]/5 border border-[#0f2744]/10 rounded-xl p-6">
              <p className="font-inter text-[#0f2744]/60 text-sm mb-1 font-medium">
                📂 Add your install photos
              </p>
              <p className="font-inter text-[#0f2744]/40 text-xs">
                Drop images into <code className="bg-[#0f2744]/10 px-1.5 py-0.5 rounded text-[#0f2744]/60">/public/installs/</code> and add them to the{" "}
                <code className="bg-[#0f2744]/10 px-1.5 py-0.5 rounded text-[#0f2744]/60">photos</code> array in{" "}
                <code className="bg-[#0f2744]/10 px-1.5 py-0.5 rounded text-[#0f2744]/60">components/Gallery.tsx</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
