import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Superpower</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses into market leaders through strategic marketing 
              and innovative campaigns that deliver extraordinary results.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Instagram className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Strategic Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Brand Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Creative Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Analytics & Insights</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Our Team</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">hello@superpower-agency.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">123 Marketing Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Superpower Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;