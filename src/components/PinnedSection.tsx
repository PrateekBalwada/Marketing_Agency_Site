import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, TrendingUp, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PinnedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Award, number: '500+', label: 'Successful Campaigns', color: 'text-blue-500' },
    { icon: Users, number: '150+', label: 'Happy Clients', color: 'text-orange-500' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI Increase', color: 'text-green-500' },
    { icon: Zap, number: '10+', label: 'Years Experience', color: 'text-purple-500' }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const pinned = pinnedRef.current;
    const content = contentRef.current;

    if (!container || !pinned || !content) return;

    // Pin the left content while right content scrolls
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      pin: pinned,
      pinSpacing: false
    });

    // Animate stats on scroll
    gsap.fromTo(
      '.stat-item',
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate background elements
    gsap.to('.floating-element', {
      y: -50,
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="flex h-screen">
        {/* Pinned Left Content */}
        <div ref={pinnedRef} className="w-1/2 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10"></div>
          
          {/* Floating background elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 floating-element"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 floating-element" style={{ animationDelay: '-5s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 floating-element" style={{ animationDelay: '-10s' }}></div>
          
          <div className="text-center z-10 max-w-lg px-8">
            <div className="mb-8">
              <Zap className="h-20 w-20 text-orange-500 mx-auto mb-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Designed for
              <span className="block text-orange-500">Growth</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our proven methodology transforms businesses through strategic innovation and data-driven results.
            </p>
          </div>
        </div>

        {/* Scrolling Right Content */}
        <div ref={contentRef} className="w-1/2 flex flex-col justify-center space-y-32 py-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item bg-white p-12 rounded-3xl shadow-2xl mx-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center">
                <div className={`${stat.color} mb-6 flex justify-center`}>
                  <stat.icon className="h-16 w-16" />
                </div>
                <div className="text-6xl font-bold text-gray-900 mb-4">{stat.number}</div>
                <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
                <div className="mt-6 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
            </div>
          ))}
          
          <div className="stat-item bg-gradient-to-br from-orange-500 to-red-500 p-12 rounded-3xl shadow-2xl mx-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform?</h3>
            <p className="text-xl mb-8 opacity-90">Join hundreds of successful businesses that trust us with their growth.</p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedSection;