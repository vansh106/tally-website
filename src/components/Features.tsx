import React from 'react';
import { FileSpreadsheet, Database, Link2, Box, Settings2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

const features = [
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
    title: "Excel to Tally Import",
    description: "Seamlessly import Sales, Purchase, Bank statements, and Inventory data directly from Excel templates.",
    color: "bg-green-500"
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "GST Connect",
    description: "Auto-fetch GSTR 1, 2A, and 2B data. Validate GSTIN numbers and business details instantly.",
    color: "bg-blue-500"
  },
  {
    icon: <Link2 className="w-6 h-6 text-white" />,
    title: "Auto-Connect",
    description: "Smartly matches stock items and ledgers, reducing manual mapping errors significantly.",
    color: "bg-purple-500"
  },
  {
    icon: <Box className="w-6 h-6 text-white" />,
    title: "Master Creation",
    description: "Create Ledgers and Stock Items in bulk automatically while importing vouchers.",
    color: "bg-orange-500"
  },
  {
    icon: <Settings2 className="w-6 h-6 text-white" />,
    title: "Custom Mapping",
    description: "Map your existing Excel formats to Tally fields without changing your current workflow.",
    color: "bg-pink-500"
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Direct Import",
    description: "No complex XML generation required. Direct API-based integration for faster data transfer.",
    color: "bg-yellow-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-brand-primary font-semibold tracking-wide uppercase text-sm mb-3">Powerful Features</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything You Need to Automate Accounting
            </h3>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Designed for CAs, Accountants, and Business Owners to save time and eliminate errors.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl ${feature.color} shadow-lg shadow-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
