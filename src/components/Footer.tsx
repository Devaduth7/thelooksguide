import React from 'react';
import { Instagram, Mail, Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/thelooksguide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">@thelooksguide</span>
            </a>
            
            <a 
              href="mailto:contact@thelooksguide.com"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Contact</span>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Copyright className="w-4 h-4" />
            <span>2025 thelooksguide. All rights reserved.</span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Transform your appearance, transform your life. Professional glow-up guidance 
            for the modern individual seeking excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;