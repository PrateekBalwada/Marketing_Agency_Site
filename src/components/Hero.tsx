import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 relative overflow-hidden">
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-orange-100/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Unleash Your Brand's
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {' '}Superpower
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-reveal">
            We transform businesses into market leaders through strategic marketing, 
            innovative campaigns, and data-driven results that exceed expectations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 text-reveal">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-item">
            <div className="text-center stagger-child">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
            <div className="text-center stagger-child">
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center stagger-child">
              <div className="text-4xl font-bold text-red-500 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;