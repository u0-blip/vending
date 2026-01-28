import Link from 'next/link';
import Hero from './components/Hero';
import StickyCTA from './components/StickyCTA';
import TrustAnchors from './components/TrustAnchors';
import HowItWorks from './components/HowItWorks';
import ProductVisuals from './components/ProductVisuals';
import WhoItsFor from './components/WhoItsFor';
import PrimaryCTABlock from './components/PrimaryCTABlock';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white pb-24 md:pb-0 relative overflow-x-hidden font-sans">
      {/* 0. Status Bar / Top - No Nav */}
      <header className="absolute top-0 left-0 w-full p-6 md:px-12 md:py-8 z-10 pointer-events-none md:flex md:justify-between md:items-center">
        <span className="font-bold text-sage-dark text-lg md:text-2xl tracking-wider pointer-events-auto">NURA VENDING.</span>
        <Link href="#contact" className="hidden md:block pointer-events-auto bg-sage text-white font-bold py-2 px-6 rounded-full shadow-sm hover:bg-sage-dark transition">
          Get Started
        </Link>
      </header>

      <Hero />
      <TrustAnchors />
      <HowItWorks />
      <ProductVisuals />
      <WhoItsFor />
      {/* <PrimaryCTABlock /> */}
      <ContactForm />
      <Footer />

      <StickyCTA />
    </main>
  );
}
