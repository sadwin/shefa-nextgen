import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Brands from './components/Brands';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <DashboardPreview />
      <Brands />
    </main>
  );
}