import React, { useState } from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const LeadSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data here
  };

  return (
    <section id="lead-section" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div className="text-white space-y-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Save <span className="text-brand-accent">90%</span> of Your Data Entry Time?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Join thousands of CAs and accountants who have switched to QuikAccount. 
                Get started with a free demo and see the magic yourself.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <ul className="space-y-4">
                {[
                  "Unlimited Import for 7 Days",
                  "Full Access to GST Connect",
                  "Priority Support Setup",
                  "No Credit Card Required"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-50">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <FadeIn delay={0.4} direction="left">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Get Your Free Demo</h3>
                <p className="text-gray-500 mt-2">Fill in the details below to get started immediately.</p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 rounded-xl p-8 text-center border border-green-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                  <p className="text-gray-600">Our team will contact you within 2 hours.</p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number</label>
                      <input
                        type="tel"
                        id="mobile"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1.5">I am a</label>
                    <select id="role" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all outline-none text-gray-600">
                      <option>Chartered Accountant</option>
                      <option>Business Owner</option>
                      <option>Accountant</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <Button type="submit" fullWidth size="lg" className="mt-2 text-lg shadow-lg shadow-brand-accent/20">
                    Get Free Access
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <div className="flex items-center justify-center text-xs text-gray-400 mt-4">
                    <ShieldCheck className="w-4 h-4 mr-1.5" />
                    Your data is 100% secure and never shared.
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
