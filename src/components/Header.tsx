import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > heroHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setMobileMenuOpen(false);
    openEnquiryModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto backdrop-blur-sm shadow-lg bg-beige-50/95 py-1 transform-gpu'
          : 'opacity-0 -translate-y-full pointer-events-none transform-gpu'
      }`}
      ref={headerRef}
    >
      <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="flex items-center space-x-4">
          <img 
            src="/omkfinal.png"
            alt="Om Kalyanam Santhigiri Logo" 
            className={`h-12 md:h-14 transition-all duration-700 ease-out ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          />
          <img 
            src="/60yearstrust.png"
            alt="Trust of 60 Years"
            className="h-12 cursor-pointer"
            onClick={handleClick}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {["Home", "Our Story", "Founder Membership", "Wellness Experiences"].map((item, index) => (
              <li key={item}>
                <a
                  href={
                    item === 'Wellness Experiences'
                      ? '#wellness-mandala'
                      : item === 'Founder Membership'
                      ? '#membership-tiers'
                      : item === 'Our Story'
                      ? '#about-om-kalyanam'
                      : `#${item.toLowerCase().replace(' ', '-')}`
                  }
                  className={`text-maroon-700 hover:text-gold-600 transition-all duration-500 text-sm font-bold ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <AnimatedEnquiryButton 
                className={`text-xs px-3 py-0 h-4 ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
                }`}
              >
                Join Now
              </AnimatedEnquiryButton>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-maroon-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-beige-50/95 backdrop-blur-sm">
          <ul className="flex flex-col py-2">
            {["Home", "Our Story", "Founder Membership", "Wellness Experiences"].map((item) => (
              <li key={item} className="py-1.5">
                <a
                  href={
                    item === 'Wellness Experiences'
                      ? '#wellness-mandala'
                      : item === 'Founder Membership'
                      ? '#membership-tiers'
                      : item === 'Our Story'
                      ? '#about-om-kalyanam'
                      : `#${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="block px-4 text-maroon-700 hover:text-gold-600 transition-colors duration-300 text-sm font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="py-1.5">
              <AnimatedEnquiryButton 
                className="text-xs px-3 py-0 h-4"
              >
                Join Now
              </AnimatedEnquiryButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
