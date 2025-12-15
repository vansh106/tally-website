import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { motion } from 'framer-motion';

const companies = [
  "Mehta & Associates", "Apex Financials", "TaxWise Solutions", "Global Audit Partners", 
  "FinTech Consultants", "Standard Chartered Accountants", "Prime Books", "Zenith Tax"
];

export const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/50 via-white to-white pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] rounded-full bg-brand-light/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm mb-8 hover:border-brand-light/50 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Rated #1 Excel to Tally Automation Tool</span>
              <div className="flex ml-3 space-x-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark tracking-tight leading-[1.1] mb-6">
              Accounting Automation <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light">
                Reimagined.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Import Excel data to Tally in seconds. Zero XML knowledge required. 
              The most trusted tool for CAs and Business Owners to eliminate manual data entry errors.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex justify-center mb-20">
            <Link to="lead-section" smooth={true} offset={-50} duration={800}>
              <Button size="lg" className="min-w-[240px] shadow-xl shadow-brand-accent/20 group text-lg h-14">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>

          {/* Trusted By Section - Beautified */}
          <FadeIn delay={0.6} className="w-full border-t border-gray-100 pt-12">
             <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
               Trusted by 2000+ CA Firms & Businesses
             </p>
             
             <div className="relative w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks for smooth fade effect on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
                
                <div className="flex overflow-hidden">
                  <motion.div 
                    className="flex space-x-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 30, 
                      ease: "linear" 
                    }}
                  >
                    {[...companies, ...companies, ...companies].map((company, index) => (
                      <div key={index} className="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default group">
                        <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                           <span className="text-xs font-bold text-gray-400 group-hover:text-brand-primary">{company.charAt(0)}</span>
                        </div>
                        <span className="text-lg font-bold text-gray-400 group-hover:text-gray-600 font-sans">{company}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
             </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
