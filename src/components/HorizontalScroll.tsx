import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, TrendingUp, Megaphone, Palette, BarChart3, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const growthSteps = [
    {
      icon: Target,
      title: 'Strategic Foundation',
      description: 'We start by understanding your business goals, target audience, and competitive landscape to build a solid strategic foundation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth Planning',
      description: 'Develop comprehensive growth strategies that align with your objectives and market opportunities for maximum impact.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Megaphone,
      title: 'Brand Amplification',
      description: 'Execute multi-channel campaigns that amplify your brand message and reach your ideal customers effectively.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Creative Excellence',
      description: 'Deliver stunning creative assets that capture attention, communicate value, and inspire action across all touchpoints.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Continuously monitor, analyze, and optimize campaigns to ensure maximum ROI and sustainable growth.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Scale & Expand',
      description: 'Scale successful strategies and expand into new markets, channels, and opportunities for continued growth.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;

    if (!container || !scrollContainer) return;

    const sections = scrollContainer.children;
    const totalWidth = sections.length * 100; // 100vw per section

    // Set up horizontal scroll
    gsap.set(scrollContainer, {
      width: `${totalWidth}vw`,
      display: 'flex'
    });

    // Create horizontal scroll animation
    const horizontalScroll = gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Animate individual cards
    gsap.fromTo(
      '.growth-card',
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
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div ref={scrollRef} className="flex">
        {growthSteps.map((step, index) => (
          <div
            key={index}
            className="min-w-screen h-screen flex items-center justify-center px-8 relative"
          >
            <div className="max-w-4xl mx-auto text-center growth-card">
              <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${step.color} mb-8 shadow-2xl`}>
                <step.icon className="h-16 w-16 text-white" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {step.title}
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {step.description}
              </p>
              
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  {growthSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === index ? 'bg-orange-500 scale-125' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm mb-2">Scroll to explore our growth process</p>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;