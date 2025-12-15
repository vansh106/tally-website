import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', to: 'features' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Contact', to: 'lead-section' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:support@quikaccount.com" className="flex items-center hover:text-brand-light transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              support@quikaccount.com
            </a>
            <a href="tel:+919876543210" className="flex items-center hover:text-brand-light transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </a>
          </div>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-green-400 hover:text-green-300 font-medium"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo_techaccount.png" 
                alt="Tech Account Logo" 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-100}
                  duration={700}
                  className="text-gray-600 hover:text-brand-primary font-medium cursor-pointer transition-colors text-sm tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="lead-section" smooth={true} offset={-50} duration={800}>
                <Button variant="primary" size="sm" className="shadow-lg shadow-brand-accent/20">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-brand-dark p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary rounded-md cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="lead-section" smooth={true} onClick={() => setIsMobileMenuOpen(false)}>
                    <Button fullWidth>Get Started</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
