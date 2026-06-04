import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import TrustSection from '@/components/trust-section';
import FeaturesSection from '@/components/features-section';
import GoalsSection from '@/components/goals-section';
import AppShowcase from '@/components/app-showcase';
import AICoachSection from '@/components/ai-coach-section';
import GamificationSection from '@/components/gamification-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import FAQSection from '@/components/faq-section';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';
import { MockupsSection } from '@/components/mockups-section'

export default function Page() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <FeaturesSection />
      <MockupsSection />

      <GoalsSection />
      <AppShowcase />
      <AICoachSection />
      <GamificationSection />
      
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
