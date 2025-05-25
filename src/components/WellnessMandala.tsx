import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const WellnessMandala = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [mobileDirection, setMobileDirection] = useState<'left' | 'right'>('right');
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play effect
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wellnessExperiences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const wellnessExperiences = [
    {
      id: 'naturopathy',
      title: 'Naturopathy',
      description: 'Harnessing the 5 elements of nature for healing',
      items: ['Therapy (Abdomen & spinal packs)', 'Hydrotherapy', 'Mud Therapy', 'Fasting'],
      image: "/images/wellness/naturopathyOM.jpg"
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      description: 'Ancient wisdom for holistic health and balance',
      items: ['Panchakarma', 'Abhyangam', 'Shirodhara', 'Nasyam', 'Pizhichil', 'Njavarakizhi'],
      image: "/images/wellness/AyurOM.jpg"
    },
    {
      id: 'yoga',
      title: 'Yoga',
      description: 'Unite body, mind, and spirit through sacred movement',
      items: ['Hatha Yoga', 'Kundalini Yoga', 'Vinyasa Flow', 'Yoga Nidra', 'Partner Yoga'],
      image: "/images/wellness/yogaOM.jpg"
    },
    {
      id: 'emotional',
      title: 'Emotional & Mental Wellness',
      description: 'Tools for inner harmony and mental clarity',
      items: ['Counseling', 'Art Therapy', 'Music Therapy', 'Inner Child Healing', 'Family Constellation'],
      image: "/images/wellness/mentalHealth.jpg"
    },
    {
      id: 'meditation',
      title: 'Meditation',
      description: 'Cultivate presence and inner stillness',
      items: ['Guided Meditation', 'Mindfulness', 'Transcendental Meditation', 'Chakra Meditation', 'Walking Meditation'],
      image: "/images/wellness/MedOM.jpg"
    },
    {
      id: 'alternative',
      title: 'Alternative Therapies',
      description: 'Innovative approaches to wellness',
      items: ['Acupuncture', 'Acupressure', 'Reiki', 'Pranic Healing', 'Crystal Healing', 'Sound Healing'],
      image: "/images/wellness/alternOM.jpg"
    },
    {
      id: 'modern',
      title: 'Modern Therapies',
      description: 'Contemporary techniques for healing',
      items: ['Aqua Therapy', 'Infrared Sauna', 'Hypnotherapy', 'Cognitive Behavioral Therapy', 'NLP'],
      image: "/images/wellness/modernOM.jpg"
    },
    {
      id: 'spiritual',
      title: 'Spiritual Practices and Daily Rituals',
      description: 'Connect with the divine essence within',
      items: ['Havan', 'Puja', 'Guided Spiritual Journeys', 'Sacred Ceremonies', 'Energy Clearing'],
      image: "/images/wellness/spiritualom.jpg"
    },
    {
      id: 'food',
      title: 'Therapeutic Food',
      description: 'Nourishment as medicine for body and soul',
      items: ['Sattvic Diet', 'Plant-Based Healing', 'Detox Nutrition', 'Personalized Meal Plans', 'Cooking Workshops'],
      image: "/images/wellness/theraputic.jpg"
    },
    {
      id: 'rituals',
      title: 'Environmental healing',
      description: 'Sacred routines to anchor your transformation',
      items: ['Deepens connection with the Earth', 'Boosts immunity ', 'Promotes restful sleep', 'Reduces stress C anxiety', 'Awakens spiritual insight'],
      image: "/images/wellness/EnvOM.jpg"
    },
    {
      id: 'wisdom',
      title: 'Wisdom and Miracle Programme',
      description: 'Inner Transformation Workshops',
      items: ['Conscious Manifestation Sessions', 'Daily Affirmation Rituals', 'Vision Alignment Ceremonies', 'Emotional Empowerment Circles', 'Spiritual Intention Mapping', 'Quantum Focus Techniques and many more'],
      image: "/images/wellness/consc.jpg"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wellnessExperiences.length);
    setSelectedExperience(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wellnessExperiences.length) % wellnessExperiences.length);
    setSelectedExperience(null);
  };

  const getCarouselStyles = (index: number) => {
    const totalItems = wellnessExperiences.length;
    const offset = index - currentIndex;
    const normalizedOffset = ((offset % totalItems) + totalItems) % totalItems;
    let translateX = 0;
    let translateZ = 0;
    let opacity = 0;
    let scale = 0.6;

    if (normalizedOffset <= 2 || normalizedOffset >= totalItems - 2) {
      const angle = (normalizedOffset * (360 / totalItems)) % 360;
      const radians = (angle * Math.PI) / 180;
      translateX = Math.sin(radians) * 400;
      translateZ = Math.cos(radians) * 200 - 200;
      opacity = 1 - Math.abs(normalizedOffset) * 0.3;
      scale = 1 - Math.abs(normalizedOffset) * 0.2;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex: 1000 - Math.abs(normalizedOffset),
    };
  };

  // Add this at the top level of the component, before the return statement
  const shimmerAnimation = {
    hidden: {
      background: "linear-gradient(45deg, rgba(234,179,8,0.2) 0%, rgba(234,179,8,0.1) 25%, rgba(234,179,8,0.2) 25%, rgba(234,179,8,0.1) 50%, rgba(234,179,8,0.2) 100%)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0% 0%"
    },
    visible: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
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
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Responsive check
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Handlers for mobile navigation
  const [mobileIndex, setMobileIndex] = useState(0);
  const handlePrevMobile = () => {
    setMobileDirection('left');
    setMobileIndex((prev) => (prev - 1 + wellnessExperiences.length) % wellnessExperiences.length);
  };
  const handleNextMobile = () => {
    setMobileDirection('right');
    setMobileIndex((prev) => (prev + 1) % wellnessExperiences.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 pt-4">
          <motion.div 
            className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img
              src="/bgremflower.png"
              alt="Decorative Flower"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-gold-600">
            Experience the Mandala of Wellness
          </h2>
          <p className="text-xl text-maroon-700 mb-8">
            Discover our transformative journey through various dimensions of wellness
          </p>
          <div className="w-32 h-1 mx-auto bg-gold-600"></div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading text-gold-600 mb-4">
            • Wellness Experiences that Awaken the Soul •
          </h3>
        </div>

        {/* Mobile: Single Slide View */}
        <div className="block sm:hidden max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handlePrevMobile} className="p-2 rounded-full bg-gold-100 text-gold-600 hover:bg-gold-200 transition"><ChevronLeft size={28} /></button>
            <span className="font-heading text-lg text-gold-600">{wellnessExperiences[mobileIndex].title}</span>
            <button onClick={handleNextMobile} className="p-2 rounded-full bg-gold-100 text-gold-600 hover:bg-gold-200 transition"><ChevronRight size={28} /></button>
          </div>
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={mobileDirection}>
              <motion.div
                key={mobileIndex}
                custom={mobileDirection}
                initial={{ x: mobileDirection === 'right' ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: mobileDirection === 'right' ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="rounded-xl shadow-lg border border-gold-200 bg-beige-100/80 backdrop-blur-sm overflow-hidden relative"
              >
                <div className="relative w-full h-64">
                  <img src={wellnessExperiences[mobileIndex].image} alt={wellnessExperiences[mobileIndex].title} className="w-full h-full object-cover" />
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-maroon-800/40 to-transparent" />
                </div>
                <div className="relative z-10 p-4 -mt-12">
                  <div className="bg-maroon-900/60 rounded-lg p-4 shadow-lg">
                    <h4 className="font-heading text-xl text-gold-300 mb-2 drop-shadow-lg">{wellnessExperiences[mobileIndex].title}</h4>
                    <p className="text-beige-100 mb-2 drop-shadow">{wellnessExperiences[mobileIndex].description}</p>
                    <ul className="list-disc list-inside text-gold-200 text-sm pl-2">
                      {wellnessExperiences[mobileIndex].items.map((item, i) => (
                        <li key={i} className="drop-shadow">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop/Tablet: Carousel */}
        <div 
          className="hidden sm:block relative h-[400px] sm:h-[600px] perspective-1000 mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={carouselRef}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {wellnessExperiences.map((experience, index) => {
              // Calculate circular offset for a true 3D ring effect
              const total = wellnessExperiences.length;
              // Use modular arithmetic for seamless circular movement
              let offset = index - currentIndex;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;
              const angle = (offset * (360 / total)) % 360;
              const radians = (angle * Math.PI) / 180;
              // Adjust radius for better mobile view
              const radiusX = 400;
              const radiusZ = 220;
              const translateX = Math.sin(radians) * radiusX;
              const translateZ = Math.cos(radians) * radiusZ - radiusZ;
              // Symmetric scale and opacity
              const absOffset = Math.abs(offset);
              const scale = 1 - absOffset * 0.13;
              const opacity = 1 - absOffset * 0.22;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={experience.id}
                  className={`absolute w-[85vw] max-w-[300px] sm:w-[500px] sm:max-w-none h-[280px] sm:h-[380px] rounded-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer
                    ${isCenter ? 'hover:scale-110' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                    opacity,
                    zIndex: 1000 - absOffset,
                    pointerEvents: opacity < 0.2 ? 'none' : 'auto',
                  }}
                  initial={false}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 18,
                    mass: 1
                  }}
                  whileHover={isCenter ? { scale: 1.1 } : undefined}
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Enhanced Golden Border */}
                  <div className="absolute -inset-[3px] rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 z-0 animate-gradient-x"></div>
                  {/* Inner Shadow Overlay - Lighter */}
                  <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_8px_rgba(234,179,8,0.08)] z-10 pointer-events-none" />
                  <div className="relative w-full h-full group z-20 bg-white rounded-xl overflow-hidden">
                    {/* Subtle golden glow */}
                    <div className={`absolute inset-0 rounded-xl transition-opacity duration-300
                      shadow-[0_0_15px_rgba(234,179,8,0.08)] ${isCenter ? 'group-hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]' : ''}`} 
                    />
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className={`w-full h-full object-cover transition-transform duration-500 brightness-105 saturate-110 ${
                        isCenter ? 'group-hover:scale-105' : ''
                      }`}
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 z-20 flex flex-col justify-end"
                      style={{height: '50%'}}
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-maroon-900/80 via-maroon-800/40 to-transparent rounded-b-xl" />
                      <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl font-heading text-gold-300 mb-2 sm:mb-3 font-bold drop-shadow-lg">
                          {experience.title}
                        </h3>
                        <p className="text-beige-100 text-sm sm:text-base mb-3 sm:mb-4 drop-shadow">
                          {experience.description}
                        </p>
                        <ul className="list-disc list-inside text-gold-200 text-xs sm:text-base pl-2 drop-shadow">
                          {experience.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessMandala;