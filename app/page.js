import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import RealResults from './components/RealResults';
import FooterLogos from './components/FooterLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8] font-sans antialiased text-[#171717]">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <RealResults />
      </main>
      <FooterLogos />
    </div>
  );
}