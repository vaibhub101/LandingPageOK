import React, { useState, useRef, useEffect } from 'react';
import {
  Leaf, Heart, Shield, Flame,
  Briefcase, Users, Mountain, Wind
} from 'lucide-react';

const WellnessDimensions = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const autoScrollRef = useRef<number | null>(null);

  const dimensions = [
    {
      icon: <Leaf className="h-6 w-6 text-gold-600" />,
      title: "Physical Wellness",
      description: "Reclaim your body with our specialized physical wellness programs.",
      items: ["Detox", "Weight Management", "Pain Management", "Therapeutic Yoga", "Body Cleansing"],
      image: "https://images.pexels.com/photos/8795582/pexels-photo-8795582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Heart className="h-6 w-6 text-gold-600" />,
      title: "Emotional & Mental Wellness",
      description: "Heal, express, and transform your emotional landscape.",
      items: ["Stress Management", "Anxiety & Depression Management", "Calm Mind Programme", "Trauma Relief", "Emotional Release"],
      image: "https://images.pexels.com/photos/9577189/pexels-photo-9577189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Shield className="h-6 w-6 text-gold-600" />,
      title: "Immune & Biological Wellness",
      description: "Empower your body's defense systems and optimize biological functions.",
      items: ["Hormonal Balance", "Immune Boost", "Gut Healing", "Auto-immune Conditions", "Metabolic Reset"],
      image: "https://images.pexels.com/photos/5480052/pexels-photo-5480052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Flame className="h-6 w-6 text-gold-600" />,
      title: "Spiritual Wellness",
      description: "Reunite with the sacred dimensions of your being.",
      items: ["Spiritual Balance", "Energy Healing", "Chakra Balancing", "Rituals", "Sacred Healing"],
      image: "https://images.pexels.com/photos/11435059/pexels-photo-11435059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Mountain className="h-6 w-6 text-gold-600" />,
      title: "Lifestyle & Preventive Wellness",
      description: "Craft a way of life that promotes ongoing wellness and prevents disease.",
      items: ["Corporate Wellness Programme", "Digital Detox", "Sleep Enhancement", "Lifestyle Diseases", "Anti-Aging"],
      image: "https://images.pexels.com/photos/16791298/pexels-photo-16791298/free-photo-of-juice-with-drinking-straw-and-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Users className="h-6 w-6 text-gold-600" />,
      title: "Social Wellness",
      description: "Building meaningful connections and healthy relationships.",
      items: ["Couple's healing", "Family Bonding", "Social Intelligence", "Conscious Relationships", "Conscious Parenting"],
      image: "https://images.pexels.com/photos/30318143/pexels-photo-30318143/free-photo-of-romantic-couple-with-coffee-in-vancouver-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Wind className="h-6 w-6 text-gold-600" />,
      title: "Environmental Wellness",
      description: "Let nature be your healer as you reconnect with the earth.",
      items: ["Reflexology paths", "Forest Bathing", "Barefoot Walking", "Nature Meditation", "Garden Therapy"],
      image: "https://images.pexels.com/photos/16338316/pexels-photo-16338316/free-photo-of-stream-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-gold-600" />,
      title: "Financial Wellness",
      description: "Financial wellness is feeling secure, balanced, and in control of your money.",
      items: ["Budgeting", "Investing", "Debt Management", "Savings Plan", "Financial Literacy"],
      image: "https://images.pexels.com/photos/6775160/pexels-photo-6775160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-gold-600" />,
      title: "Corporate Wellness",
      description: "Peak performance through holistic well-being for professionals.",
      items: ["Stress detox for executives", "Leadership Wellness", "Team Bonding", "Performance Enhancement", "Workplace Wellness"],
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  // Double the array for seamless looping
  const loopedDimensions = [...dimensions, ...dimensions];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let intervalId: number | undefined;

    const startAutoScroll = () => {
      if (autoScrollRef.current) return;

      const scroll = () => {
        if (!container || isDragging) return;

        // Calculate the width of one card including its margin
        const cardWidth = container.querySelector('div')?.offsetWidth || 0;
        const cardMargin = 16; // space-x-4 = 1rem = 16px
        const totalWidth = cardWidth + cardMargin;

        // Smooth scroll to the next position
        container.scrollTo({
          left: container.scrollLeft + totalWidth,
          behavior: 'smooth'
        });

        // When we reach the end of the first set of cards, smoothly reset to the beginning
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }
      };

      // Set interval for 2 seconds between each scroll
      intervalId = window.setInterval(() => {
        if (!isDragging) {
          scroll();
        }
      }, 2000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    // Start auto-scroll
    startAutoScroll();

    // Pause auto-scroll when user interacts
    const handleInteractionStart = () => {
      stopAutoScroll();
    };

    const handleInteractionEnd = () => {
      startAutoScroll();
    };

    container.addEventListener('mouseenter', handleInteractionStart);
    container.addEventListener('mouseleave', handleInteractionEnd);
    container.addEventListener('touchstart', handleInteractionStart);
    container.addEventListener('touchend', handleInteractionEnd);

    return () => {
      stopAutoScroll();
      container.removeEventListener('mouseenter', handleInteractionStart);
      container.removeEventListener('mouseleave', handleInteractionEnd);
      container.removeEventListener('touchstart', handleInteractionStart);
      container.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && containerRef.current) {
          containerRef.current.scrollLeft += 320;
        } else if (containerRef.current) {
          containerRef.current.scrollLeft -= 320;
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="dimensions" className="bg-gradient-to-b from-beige-50 to-beige-100 py-16 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Logo Image */}
        <div className="flex justify-center mb-6">
          <img 
            src="/finalcrop.png" 
            alt="Om Kalyanam Logo" 
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-gold-600 mb-4">
            OM KALYANAM – 9 Dimensions of Transformational Wellness
          </h2>
          <p className="text-xl text-maroon-700">
            Our holistic approach addresses every aspect of your being for complete transformation.
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        {/* Carousel Container with Fade Effects */}
        <div className="relative">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-beige-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-beige-50 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 px-1 cursor-grab active:cursor-grabbing scrollbar-none snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              transition: 'scroll-left 0.25s ease-in-out'
            }}
          >
            {loopedDimensions.map((dim, index) => (
              <div
                key={index}
                className="min-w-[85vw] max-w-[340px] sm:min-w-[300px] sm:max-w-[300px] flex-shrink-0 
                  bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl overflow-hidden 
                  transition-all duration-500 ease-in-out hover:transform hover:scale-105 
                  hover:[animation-play-state:paused] group snap-center"
              >
                {/* Image Top with Golden Border */}
                <div className="w-full h-48 overflow-hidden relative">
                  <div className="absolute inset-0 border-2 border-gold-300/30 rounded-t-xl"></div>
                  <img
                    src={dim.image}
                    alt={dim.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-full bg-gold-500/10">
                      {dim.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading text-gold-600">{dim.title}</h3>
                  </div>
                  <p className="text-maroon-600 text-sm mb-4">{dim.description}</p>
                  <ul className="space-y-2">
                    {dim.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-maroon-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessDimensions;