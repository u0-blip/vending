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
      <header className="absolute top-0 left-0 w-full p-6 z-10 pointer-events-none">
        <span className="font-bold text-sage-dark text-lg tracking-wider pointer-events-auto">VENDING.</span>
      </header>

      <Hero />
      <TrustAnchors />
      <HowItWorks />
      <ProductVisuals />
      <WhoItsFor />
      <PrimaryCTABlock />
      <ContactForm />
      <Footer />

      <StickyCTA />
    </main>
  );
}
