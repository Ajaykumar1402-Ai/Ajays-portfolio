import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPhoto from '../assets/hero-photo.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-[100dvh] min-h-[620px] overflow-hidden bg-black">
      {/* Background Hero Photo - positioned at 35% on mobile to frame Ajaykumar's face perfectly */}
      <img
        src={heroPhoto}
        alt="Ajaykumar K - AI & ML Engineer"
        className="absolute top-0 left-0 w-full h-full object-cover object-[35%_12%] md:object-[65%_center] lg:object-center z-0"
      />

      {/* Dark overlay - strong bottom fade on mobile for text contrast while keeping face clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 via-40% to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/45 md:to-transparent z-10 pointer-events-none" />

      {/* Content Container - bottom-aligned on mobile to avoid covering face, centered on desktop */}
      <div className="absolute inset-0 z-20 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start text-left w-full h-full pb-6 sm:pb-12 pt-16 md:pt-[12%] md:pb-0">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Status Pill for mobile */}
          <div 
            data-aos="fade-up"
            data-aos-delay="50"
            className="flex sm:hidden items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white text-[11px] font-medium shadow-lg mb-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">AI & ML Engineer</span>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-3xl sm:text-5xl md:text-6xl mb-2 sm:mb-5 tracking-tight leading-[1.08]"
          >
            Hi, I'm <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Ajaykumar K
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-xs sm:text-base lg:text-lg mb-4 sm:mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            AI & ML Engineer passionate about building real-world AI systems, including multimodal medical diagnostics, real-time voice assistants, and AI-driven collaboration platforms.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-row items-center gap-3 sm:gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm rounded-full bg-white text-black font-medium hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm rounded-full bg-black/40 border border-white/60 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Status Pill for Tablet & Desktop */}
        <div 
          data-aos="fade-left"
          data-aos-delay="600"
          className="mt-6 md:mt-2 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-white text-xs font-medium shadow-xl self-start md:self-auto hover:bg-black/60 transition-all duration-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">AI & ML Engineer</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="block animate-bounce cursor-pointer group p-2"
        >
          <svg 
            className="w-5 h-5 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;