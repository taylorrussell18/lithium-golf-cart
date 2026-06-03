import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsIncluded from "@/components/WhatsIncluded";
import HowItWorks from "@/components/HowItWorks";
import WhyUpgrade from "@/components/WhyUpgrade";
import Compatibility from "@/components/Compatibility";
import ServiceArea from "@/components/ServiceArea";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
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
        <HowItWorks />
        <WhyUpgrade />
        <Compatibility />
        <ServiceArea />
        <Gallery />
        <Pricing />
        <Reviews />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
