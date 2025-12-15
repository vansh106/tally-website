import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
               <img 
                src="https://i.ibb.co/67X3xfSV/image.png" 
                alt="QuikAccount Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="ml-3 text-xl font-bold text-white">QuikAccount</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Tech Driven Accounting Solution. Automating financial data processing for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-light transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-light transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-light transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-light transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-brand-light flex-shrink-0" />
                <span>123 Business Park, Tech City,<br />Mumbai, India 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-brand-light flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-brand-light flex-shrink-0" />
                <span>support@quikaccount.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} QuikAccount Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
