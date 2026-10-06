import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import RealResults from './components/RealResults';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import FooterLogos from './components/FooterLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Header />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <RealResults />
        <Industries />
        <Pricing />
      </main>

      <FooterLogos />
    </div>
  );
}