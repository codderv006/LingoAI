import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <FeaturesSection />
          <LanguagesSection />
          <HowItWorksSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}