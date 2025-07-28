import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  useEffect(() => {
    // Smooth reveal animations for all sections
    gsap.utils.toArray('.reveal-section').forEach((section: any) => {
      gsap.fromTo(
        section,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effect for hero background
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Stagger animations for cards
    gsap.utils.toArray('.stagger-item').forEach((container: any) => {
      const items = container.querySelectorAll('.stagger-child');
      
      gsap.fromTo(
        items,
        {
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((text: any) => {
      gsap.fromTo(
        text,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Scale on scroll for images
    gsap.utils.toArray('.scale-on-scroll').forEach((img: any) => {
      gsap.fromTo(
        img,
        {
          scale: 1.2,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // This component only handles animations
};

export default ScrollAnimations;