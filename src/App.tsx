import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { LeadSection } from './components/LeadSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-primary/20 selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LeadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
