"use client";

import { useState, useRef, useEffect } from "react";

const CONTACT_EMAIL = "G.russellcarts@gmail.com";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    cartModel: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 hover:border-[#22d3ee]/40 focus:border-[#22d3ee] focus:outline-none rounded-lg px-4 py-3.5 font-inter text-white placeholder-white/30 text-sm transition-colors duration-200";
  const labelClass =
    "block font-inter text-white/70 text-xs font-semibold tracking-widest uppercase mb-2";

  return (
    <section id="contact" className="bg-[#0f2744] py-24 sm:py-32 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-14">
          <span className="text-[#22d3ee] text-xs font-inter font-semibold tracking-[0.25em] uppercase mb-3 block">
            Let's Get Started
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl text-white font-bold mb-4">
            Book Your Conversion
          </h2>
          <div className="w-16 h-0.5 bg-[#22d3ee] mx-auto mb-6" />
          <p className="font-inter text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Fill out the form below and we'll reach out to confirm your install date.
            Most installs are scheduled within the week.
          </p>
        </div>

        <div className="bg-[#091929] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/40">
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-playfair text-white text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="font-inter text-white/60 text-sm">
                We received your inquiry and will be in touch shortly to confirm your install date.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} htmlFor="name">Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="cartModel">Cart Model *</label>
                  <input id="cartModel" name="cartModel" type="text" required placeholder="e.g. EZGO TXT, Club Car DS" value={form.cartModel} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="location">Location / City *</label>
                <input id="location" name="location" type="text" required placeholder="City and state where you'd like us to come" value={form.location} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass} htmlFor="message">Additional Details</label>
                <textarea id="message" name="message" rows={4} placeholder="Any other info about your cart, current battery setup, or questions..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm font-inter text-center">
                  Something went wrong. Please try emailing us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#22d3ee] hover:bg-[#67e8f9] disabled:opacity-60 disabled:cursor-not-allowed text-[#091929] font-inter font-bold text-base py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#22d3ee]/30 hover:shadow-xl tracking-wide"
              >
                {status === "sending" ? "Sending..." : "Send Message & Get Scheduled"}
              </button>

              <p className="text-center font-inter text-white/30 text-xs">
                Or email us directly at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#22d3ee]/60 hover:text-[#22d3ee] transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
