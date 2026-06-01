import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsIncluded from "@/components/WhatsIncluded";
import WhyUpgrade from "@/components/WhyUpgrade";
import Compatibility from "@/components/Compatibility";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatsIncluded />
        <WhyUpgrade />
        <Compatibility />
        <Gallery />
        <Pricing />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
