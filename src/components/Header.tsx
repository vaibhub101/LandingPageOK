import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ logoUrl }: { logoUrl?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const finalLogo = logoUrl || '/logo.png';

  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio < 1);
      },
      { threshold: [0, 1] }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto backdrop-blur-sm shadow-lg bg-beige-50/95 py-2'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      ref={headerRef}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={finalLogo} 
            alt="Om Kalyanam Santhigiri Logo" 
            className="h-16 md:h-20"
          />
          <div className="ml-4">
            <h1 className="text-gold-600 font-heading text-xl md:text-2xl"></h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Wellness', 'Membership', 'Experiences', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-maroon-700 hover:text-gold-600 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#membership"
                className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded hover:from-gold-700 hover:to-gold-800 transition-all duration-300"
              >
                Join Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-maroon-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-beige-50/95 backdrop-blur-sm">
          <ul className="flex flex-col py-4">
            {['Home', 'About', 'Wellness', 'Membership', 'Experiences', 'Contact'].map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 text-maroon-700 hover:text-gold-600 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="py-2 px-4">
              <a
                href="#membership"
                className="inline-block px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded hover:from-gold-700 hover:to-gold-800 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
