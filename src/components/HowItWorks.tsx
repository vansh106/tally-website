import React from 'react';
import { Download, Copy, CheckSquare, UploadCloud } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Open QuikAccount",
    desc: "Launch the software and select your company profile securely.",
    icon: <Download className="w-6 h-6" />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Paste Excel Data",
    desc: "Simply copy your data from any Excel sheet and paste it into our smart template.",
    icon: <Copy className="w-6 h-6" />,
    color: "bg-indigo-500"
  },
  {
    id: 3,
    title: "Auto-Validation",
    desc: "Our engine automatically detects errors, GST mismatches, and duplicates instantly.",
    icon: <CheckSquare className="w-6 h-6" />,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "One-Click Export",
    desc: "Push validated data directly to Tally via API. No XML files needed.",
    icon: <UploadCloud className="w-6 h-6" />,
    color: "bg-brand-accent"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-brand-primary font-semibold tracking-wide uppercase text-sm mb-3">Workflow</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h3>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              From Excel to Tally in four simple steps.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-light/20 via-brand-primary/20 to-brand-accent/20 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0; // Step 2 (idx 1), Step 4 (idx 3) are "Even" in ID but odd in index
              // Actually: Step 1 (idx 0) -> Right side (Reverse row)
              // Step 2 (idx 1) -> Left side (Normal row)
              // Step 3 (idx 2) -> Right side (Reverse row)
              
              // Logic check:
              // Index 0 (Step 1): Even index. We want it on Right. 
              // Index 1 (Step 2): Odd index. We want it on Left.
              
              // In previous code: index % 2 === 0 ? 'md:flex-row-reverse' : ''
              // If index 0: flex-row-reverse. 
              // Visual: [Spacer] [Marker] [Content]. Content is on Right.
              
              // Issue: Content was too close to Marker.
              // Fix: Add padding-left to content when it's on the Right.
              
              const isRightSide = index % 2 === 0;

              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${isRightSide ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card Wrapper */}
                  {/* 
                      If Right Side (Step 1, 3): Needs padding-left (pl-16) to push away from center.
                      If Left Side (Step 2, 4): Needs padding-right (pr-16) to push away from center.
                  */}
                  <div className={`flex-1 w-full md:w-1/2 pl-12 md:pl-0 ${isRightSide ? 'md:pl-20' : 'md:pr-20'}`}>
                    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group`}>
                      <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl ${step.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      <div className="text-sm font-bold text-gray-400 mb-2">STEP 0{step.id}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-4 border-white shadow-md ${step.color} flex items-center justify-center z-10`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
