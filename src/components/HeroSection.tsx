'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  
  // Text to be typed out - exact variations from the reference site
  const heroTexts = [
    "Discover, Buy, and Sell\nDigital Products",
    "Sell for Free,\nPay Only When You Earn", 
    "Instant Payouts,\nFull Control, No Limits",
    "Buy Once, Download\nAnytime, Keep Forever"
  ];
  
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  
  // Floating bubble animations - exact positioning from reference site (12 bubbles)
  const bubbleTransforms = [
    // Top-left: Purple cube (3D Models) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(-280px) translateY(-200px)', 'translateX(-140px) translateY(-100px)']),
    // Top-right: Green shopping cart (Checkout) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(260px) translateY(-180px)', 'translateX(180px) translateY(-90px)']),
    // Mid-left: Purple people (Community) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(-180px) translateY(-10px)', 'translateX(-90px) translateY(120px)']),
    // Mid-right: Orange price tag (Pricing) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(180px) translateY(-10px)', 'translateX(130px) translateY(160px)']),
    // Mid-left below: Blue down arrow (Downloads) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(-130px) translateY(60px)', 'translateX(-65px) translateY(200px)']),
    // Mid-right above: Blue magnifying glass (Search) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(220px) translateY(-120px)', 'translateX(110px) translateY(-20px)']),
    // Bottom-left: Red heart (Favorites) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(-220px) translateY(120px)', 'translateX(-110px) translateY(240px)']),
    // Bottom-mid-left: Yellow star (Featured Models) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(-70px) translateY(100px)', 'translateX(-35px) translateY(220px)']),
    // Bottom-mid: Gray headphones (Support) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(-10px) translateY(120px)', 'translateX(-5px) translateY(240px)']),
    // Bottom-mid-right: Pink stacked rectangles (Collections) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(70px) translateY(100px)', 'translateX(35px) translateY(220px)']),
    // Bottom-right: Orange grid (Categories) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(220px) translateY(120px)', 'translateX(110px) translateY(240px)']),
    // Mid-right below: Green up arrow (Upload Models) - exact positioning
    useTransform(scrollYProgress, [0, 1], ['translateX(130px) translateY(60px)', 'translateX(65px) translateY(200px)'])
  ];
  
  const bubbleScales = [
    // Top-left: Purple cube - exact scale
    useTransform(scrollYProgress, [0, 1], [0.5, 0.8]),
    // Top-right: Green shopping cart - exact scale
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Mid-left: Purple people - exact scale
    useTransform(scrollYProgress, [0, 1], [0.7, 1.0]),
    // Mid-right: Orange price tag - exact scale
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Mid-left below: Blue down arrow - exact scale
    useTransform(scrollYProgress, [0, 1], [0.5, 0.8]),
    // Mid-right above: Blue magnifying glass - exact scale
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Bottom-left: Red heart - exact scale
    useTransform(scrollYProgress, [0, 1], [0.5, 0.8]),
    // Bottom-mid-left: Yellow star - exact scale
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Bottom-mid: Gray headphones - exact scale
    useTransform(scrollYProgress, [0, 1], [0.7, 1.0]),
    // Bottom-mid-right: Pink stacked rectangles - exact scale
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Bottom-right: Orange grid - exact scale
    useTransform(scrollYProgress, [0, 1], [0.5, 0.8]),
    // Mid-right below: Green up arrow - exact scale
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9])
  ];
  
  const bubbleOpacities = [
    // Top-left: Purple cube - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.4, 0.8]),
    // Top-right: Green shopping cart - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Mid-left: Purple people - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.8, 1.0]),
    // Mid-right: Orange price tag - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Mid-left below: Blue down arrow - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.4, 0.8]),
    // Mid-right above: Blue magnifying glass - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Bottom-left: Red heart - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.4, 0.8]),
    // Bottom-mid-left: Yellow star - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Bottom-mid: Gray headphones - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.8, 1.0]),
    // Bottom-mid-right: Pink stacked rectangles - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9]),
    // Bottom-right: Orange grid - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.4, 0.8]),
    // Mid-right below: Green up arrow - exact opacity
    useTransform(scrollYProgress, [0, 1], [0.6, 0.9])
  ];

  // Typewriter effect - optimized timing to match reference site
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let currentCharIndex = 0;
    
    const typeWriter = () => {
      const currentText = heroTexts[currentIndex];
      
      if (!isDeleting) {
        // Show text up to current character index
        if (currentCharIndex <= currentText.length) {
          setCurrentText(currentText.substring(0, currentCharIndex));
          currentCharIndex++;
          
          // Optimized typing speed to match reference
          setTimeout(typeWriter, 80); // Faster, more natural typing
        } else {
          // Finished typing current text, wait then move to next
          setTimeout(() => {
            if (currentIndex < heroTexts.length - 1) {
              currentIndex++;
              currentCharIndex = 0;
              setTimeout(typeWriter, 300); // Shorter pause between texts
            } else {
              // Start deleting after showing all texts
              setTimeout(() => {
                isDeleting = true;
                typeWriter();
              }, 1500); // Shorter pause before deleting
            }
          }, 1500); // Shorter pause to read the text
        }
      } else {
        // Delete characters one by one
        if (currentCharIndex > 0) {
          currentCharIndex--;
          setCurrentText(currentText.substring(0, currentCharIndex));
          setTimeout(typeWriter, 40); // Faster deletion
        } else {
          // Finished deleting, move to previous text or reset
          if (currentIndex > 0) {
            currentIndex--;
            currentCharIndex = currentText.length;
            setTimeout(typeWriter, 300);
          } else {
            // Reset and start over
            isDeleting = false;
            currentIndex = 0;
            currentCharIndex = 0;
            setTimeout(typeWriter, 800); // Shorter reset delay
          }
        }
      }
    };

    // Start typewriter effect after component mounts
    const timer = setTimeout(typeWriter, 800); // Shorter initial delay
    
    return () => clearTimeout(timer);
  }, []);

  // Cursor blinking effect - refined timing
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 800); // More natural blinking speed
    
    return () => clearInterval(interval);
  }, []);

  // GSAP animations - optimized timing to match reference site
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate background blur elements with refined timing
      gsap.fromTo('.blur-element', 
        { 
          scale: 0.8, 
          opacity: 0,
          rotation: 0
        },
        { 
          scale: 1, 
          opacity: 0.1,
          rotation: 360,
          duration: 1.8,
          ease: "power2.out",
          stagger: 0.3
        }
      );

      // Animate text elements with refined timing
      gsap.fromTo('.hero-text',
        {
          y: 40,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        }
      );

      // Animate button with refined timing
      gsap.fromTo('.hero-button',
        {
          y: 20,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef}
      className={`relative h-screen lg:h-[200vh] ${className}`}
      role="banner"
      aria-label="Hero section"
    >
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-6000 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      {/* Main hero section */}
      <section 
        className="relative w-full h-full"
        style={{ overflow: 'hidden', zIndex: 10 }}
      >
        {/* Background blur elements - pixel-perfect positioning */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 overflow-hidden z-0"
        >
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-[#ef233c] rounded-full blur-3xl opacity-10 mix-blend-multiply"
            style={{ y: backgroundY }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-80 h-80 bg-[#04868b] rounded-full blur-3xl opacity-10 mix-blend-multiply"
            style={{ y: backgroundY }}
          />
        </div>

        {/* Main content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" id="main-content">
          <motion.div 
            className="w-full absolute top-[40%] -translate-y-[40%] lg:top-[35%] xl:top-[32%] 2xl:top-[30%]"
            style={{ y: textY }}
          >
            {/* Main heading with typewriter effect - pixel-perfect typography */}
            <div className="hero-text">
              <h1 
                ref={textRef}
                className="text-[48px] font-semibold leading-[48px] tracking-tight pb-6 text-[#1e1e1e] dark:text-[#e6e6e6] min-h-[90px] md:min-h-[120px] lg:min-h-[150px] xl:min-h-[180px] whitespace-pre-line ease-in-out"
                aria-label="Discover, Buy, and Sell Digital Products"
              >
                <span className="inline-block" aria-live="polite">
                  {currentText.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < currentText.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
                <span 
                  ref={cursorRef}
                  className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                  aria-hidden="true"
                >
                  |
                </span>
              </h1>
            </div>

            {/* Subtitle - pixel-perfect typography */}
            <div className="hero-text">
              <p className="text-[16px] px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-[#a3a3a3] max-w-3xl mx-auto mb-8 md:mb-16">
                Your one-stop digital platform for 3D models and digital creations.
                <br className="hidden md:block" />
                Join our community of creators and collectors today.
              </p>
            </div>

            {/* CTA Button - pixel-perfect styling */}
            <div className="flex justify-center relative hero-button">
              <motion.a
                href="/search?page=1"
                className="inline-flex items-center justify-center rounded-full transition-all duration-300 text-[16px] font-medium py-[14px] px-[24px] bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-lg hover:shadow-xl transform hover:scale-105 w-[240px] h-[52px] z-[1000]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Explore all products - Navigate to product search page"
                role="button"
              >
                <span className="flex items-center">
                  <span>Explore all products</span>
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </span>
              </motion.a>
            </div>


            {/* Floating bubble icons - exact match to reference site (12 bubbles) */}
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box text-indigo-600">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                ),
                title: "3D Models",
                description: "Browse thousands of high-quality 3D models for your projects. Filter by category, style, format, and more.",
                gradient: "from-white/70 to-indigo-50",
                iconColor: "text-indigo-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart text-green-600">
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                  </svg>
                ),
                title: "Checkout",
                description: "Fast and secure payments for your 3D model purchases",
                gradient: "from-white/70 to-emerald-50",
                iconColor: "text-green-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag text-orange-600">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.586 8.586a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z"/>
                    <circle cx="7.5" cy="7.5" r=".5"/>
                  </svg>
                ),
                title: "Pricing",
                description: "Flexible pricing options for creators and businesses",
                gradient: "from-white/70 to-amber-50",
                iconColor: "text-orange-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-blue-600">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                ),
                title: "Search",
                description: "Find exactly what you need with our powerful search tools",
                gradient: "from-white/70 to-blue-50",
                iconColor: "text-blue-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-purple-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-3-3m0 0a2 2 0 1 0-2.83-2.83 2 2 0 0 0 2.83 2.83Z"/>
                  </svg>
                ),
                title: "Community",
                description: "Join thousands of 3D artists and designers",
                gradient: "from-white/70 to-purple-50",
                iconColor: "text-purple-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload text-teal-600">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17,8 12,3 7,8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                ),
                title: "Upload Models",
                description: "Share your creations with our community. Upload your 3D models and reach thousands of potential buyers.",
                gradient: "from-white/70 to-teal-50",
                iconColor: "text-teal-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download text-cyan-600">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                ),
                title: "Downloads",
                description: "Access your purchased models anywhere, anytime.",
                gradient: "from-white/70 to-cyan-50",
                iconColor: "text-cyan-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder text-pink-600">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                  </svg>
                ),
                title: "Categories",
                description: "Explore our organized collection by categories.",
                gradient: "from-white/70 to-pink-50",
                iconColor: "text-pink-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-600">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ),
                title: "Featured Models",
                description: "Discover our handpicked selection of premium 3D models and assets from top creators.",
                gradient: "from-white/70 to-yellow-50",
                iconColor: "text-yellow-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers text-red-600">
                    <polygon points="12,2 2,7 12,12 22,7 12,2"/>
                    <polyline points="2,17 12,22 22,17"/>
                    <polyline points="2,12 12,17 22,12"/>
                  </svg>
                ),
                title: "Collections",
                description: "Curated sets of models for specific projects and needs.",
                gradient: "from-white/70 to-red-50",
                iconColor: "text-red-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-rose-600">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                  </svg>
                ),
                title: "Favorites",
                description: "Save models you love for quick access later.",
                gradient: "from-white/70 to-rose-50",
                iconColor: "text-rose-600"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle text-slate-600">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <path d="M12 17h.01"/>
                  </svg>
                ),
                title: "Support",
                description: "Get help when you need it from our friendly support team.",
                gradient: "from-white/70 to-slate-50",
                iconColor: "text-slate-600"
              }
            ].map((bubble, index) => (
              <motion.div
                key={`bubble-${index}`}
                className="bubble-item-wrapper absolute top-1/2 left-1/2 will-change-transform group"
                style={{
                  zIndex: 50 - index * 5,
                  transform: bubbleTransforms[index],
                  scale: bubbleScales[index],
                  opacity: bubbleOpacities[index]
                }}
              >
                <div className="relative z-0">
                  {/* Hover Card - enhanced styling */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 scale-95 group-hover:scale-100">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 p-3 min-w-[240px] max-w-[280px] backdrop-blur-sm">
                      <div className="flex items-start space-x-2">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${bubble.gradient} flex items-center justify-center`}>
                          <div className="w-4 h-4 flex items-center justify-center">
                            {React.cloneElement(bubble.icon, { 
                              className: `${bubble.iconColor} w-4 h-4`,
                              width: 16,
                              height: 16
                            })}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">
                            {bubble.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-[10px] leading-relaxed">
                            {bubble.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bubble Icon - pixel-perfect styling */}
                  <motion.div 
                    className={`relative rounded-full backdrop-blur-lg bg-white/90 dark:bg-white/10 shadow-[0px_2px_12px_rgba(0,0,0,0.08)] p-[14px] flex items-center justify-center cursor-pointer border border-white/30 dark:border-white/20 bg-gradient-to-r ${bubble.gradient} dark:from-white/10 dark:to-transparent w-[64px] h-[64px] group-hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] group-hover:bg-white/95 transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                      backgroundColor: "rgba(255,255,255,0.95)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="w-[22px] h-[22px] flex items-center justify-center">
                      {bubble.icon}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* White blank section for testing scroll animations */}
      <section className="relative w-full h-screen bg-white">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Scroll Animation Test Area
            </h2>
            <p className="text-gray-500">
              Scroll up to see the floating bubbles move and test hover effects
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;