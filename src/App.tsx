import React from 'react';
import HeroSection from './components/HeroSection';
import MotivationSection from './components/MotivationSection';
import GlowUpHacks from './components/GlowUpHacks';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MotivationSection />
      <GlowUpHacks />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;