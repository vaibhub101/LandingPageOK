import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > heroHeight * 0.8); // Show header after scrolling 80% of hero height
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto backdrop-blur-sm shadow-lg bg-beige-50/95 py-2 transform-gpu'
          : 'opacity-0 -translate-y-full pointer-events-none transform-gpu'
      }`}
      ref={headerRef}
    >
      <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="flex items-center">
          <img 
            src="/newlogoOMK.jpg"
            alt="Om Kalyanam Santhigiri Logo" 
            className={`h-16 md:h-20 transition-all duration-700 ease-out ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Wellness', 'Membership', 'Experiences'].map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-maroon-700 hover:text-gold-600 transition-all duration-500 ${
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
              <Link
                to="/enquiry"
                className={`text-maroon-700 hover:text-gold-600 transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${5 * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="#membership"
                className={`px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded hover:from-gold-700 hover:to-gold-800 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  transitionDelay: '700ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
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
            {['Home', 'About', 'Wellness', 'Membership', 'Experiences'].map((item) => (
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
            <li className="py-2">
              <Link
                to="/enquiry"
                className="block px-4 text-maroon-700 hover:text-gold-600 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
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
