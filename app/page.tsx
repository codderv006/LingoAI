import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LanguagesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}