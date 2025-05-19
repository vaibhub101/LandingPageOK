import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const WellnessMandala = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
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
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      description: 'Ancient wisdom for holistic health and balance',
      items: ['Panchakarma', 'Abhyangam', 'Shirodhara', 'Nasyam', 'Pizhichil', 'Njavarakizhi'],
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
    },
    {
      id: 'yoga',
      title: 'Yoga',
      description: 'Unite body, mind, and spirit through sacred movement',
      items: ['Hatha Yoga', 'Kundalini Yoga', 'Vinyasa Flow', 'Yoga Nidra', 'Partner Yoga'],
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg"
    },
    {
      id: 'emotional',
      title: 'Emotional & Mental Wellness',
      description: 'Tools for inner harmony and mental clarity',
      items: ['Counseling', 'Art Therapy', 'Music Therapy', 'Inner Child Healing', 'Family Constellation'],
      image: "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg"
    },
    {
      id: 'meditation',
      title: 'Meditation',
      description: 'Cultivate presence and inner stillness',
      items: ['Guided Meditation', 'Mindfulness', 'Transcendental Meditation', 'Chakra Meditation', 'Walking Meditation'],
      image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg"
    },
    {
      id: 'alternative',
      title: 'Alternative Therapies',
      description: 'Innovative approaches to wellness',
      items: ['Acupuncture', 'Acupressure', 'Reiki', 'Pranic Healing', 'Crystal Healing', 'Sound Healing'],
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
    },
    {
      id: 'modern',
      title: 'Modern Therapies',
      description: 'Contemporary techniques for healing',
      items: ['Aqua Therapy', 'Infrared Sauna', 'Hypnotherapy', 'Cognitive Behavioral Therapy', 'NLP'],
      image: "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg"
    },
    {
      id: 'spiritual',
      title: 'Spiritual Practices',
      description: 'Connect with the divine essence within',
      items: ['Havan', 'Puja', 'Guided Spiritual Journeys', 'Sacred Ceremonies', 'Energy Clearing'],
      image: "https://images.pexels.com/photos/3759661/pexels-photo-3759661.jpeg"
    },
    {
      id: 'food',
      title: 'Therapeutic Food',
      description: 'Nourishment as medicine for body and soul',
      items: ['Sattvic Diet', 'Plant-Based Healing', 'Detox Nutrition', 'Personalized Meal Plans', 'Cooking Workshops'],
      image: "https://img.freepik.com/free-photo/flat-lay-healthy-immunity-boosting-foods_23-2149211597.jpg?t=st=1747642940~exp=1747646540~hmac=f2a51b176e07dd12315fde5cd0f9af9eb320434dead24f29a37e554a033ffbdb&w=740"
    },
    {
      id: 'rituals',
      title: 'Daily Rituals',
      description: 'Sacred routines to anchor your transformation',
      items: ['Morning Silence', 'Gratitude Practices', 'Self-Reflection', 'Nature Connection', 'Evening Unwinding'],
      image: "https://images.pexels.com/photos/3822715/pexels-photo-3822715.jpeg"
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
      background: "linear-gradient(45deg, rgba(234,179,8,0.2) 0%, rgba(234,179,8,0.1) 25%, rgba(234,179,8,0.2) 50%, rgba(234,179,8,0.1) 75%, rgba(234,179,8,0.2) 100%)",
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

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
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
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-gold-600">
            Experience the Mandala of Wellness
          </h2>
          <p className="text-xl text-maroon-700 font-accent mb-8">
            Discover our transformative journey through various dimensions of wellness
          </p>
          <div className="w-32 h-1 mx-auto bg-gold-600"></div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading text-gold-600 mb-4">
            • Wellness Experiences that Awaken the Soul •
          </h3>
        </div>

        <div 
          className="relative h-[400px] sm:h-[600px] perspective-1000 mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-50 px-2 sm:px-4">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + wellnessExperiences.length) % wellnessExperiences.length)}
              className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-gold-600/90 to-gold-700/90 text-white
                shadow-[0_2px_10px_rgba(234,179,8,0.2)] hover:shadow-[0_5px_15px_rgba(234,179,8,0.4)]
                transform hover:scale-110 transition-all duration-300 hover:-translate-x-1"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % wellnessExperiences.length)}
              className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-gold-600/90 to-gold-700/90 text-white
                shadow-[0_2px_10px_rgba(234,179,8,0.2)] hover:shadow-[0_5px_15px_rgba(234,179,8,0.4)]
                transform hover:scale-110 transition-all duration-300 hover:translate-x-1"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            {wellnessExperiences.map((experience, index) => {
              const offset = index - currentIndex;
              const normalizedOffset = ((offset % wellnessExperiences.length) + wellnessExperiences.length) % wellnessExperiences.length;
              const angle = (normalizedOffset * (360 / wellnessExperiences.length)) % 360;
              const radians = (angle * Math.PI) / 180;
              const translateX = Math.sin(radians) * 400;
              const translateZ = Math.cos(radians) * 200 - 200;
              const opacity = 1 - Math.abs(normalizedOffset) * 0.2;
              const scale = 1 - Math.abs(normalizedOffset) * 0.15;
              const isCenter = index === currentIndex;

              return (
                <motion.div
                  key={experience.id}
                  className={`absolute w-[90vw] max-w-[340px] sm:w-[600px] sm:max-w-none h-[320px] sm:h-[400px] rounded-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer
                    ${isCenter ? 'hover:scale-110' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                    opacity,
                    zIndex: 1000 - Math.abs(normalizedOffset),
                  }}
                  initial={false}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                  }}
                  whileHover={isCenter ? { scale: 1.1 } : undefined}
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Golden Border with Shimmer Effect */}
                  <motion.div 
                    className="absolute -inset-[2px] rounded-xl z-0"
                    initial="hidden"
                    animate="visible"
                    variants={shimmerAnimation}
                  />
                  {/* Inner Shadow Overlay */}
                  <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_8px_rgba(234,179,8,0.3)] z-10" />
                  
                  <div className="relative w-full h-full group z-20">
                    {/* Add a subtle golden glow to the card */}
                    <div className={`absolute inset-0 rounded-xl transition-opacity duration-300
                      shadow-[0_0_15px_rgba(234,179,8,0.2)] ${isCenter ? 'group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]' : ''}`} 
                    />
                    
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isCenter ? 'group-hover:scale-105' : ''
                      }`}
                    />
                    {/* Slide number indicator with enhanced golden styling */}
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-full 
                      bg-gradient-to-br from-gold-300/20 to-gold-600/20 backdrop-blur-sm
                      flex items-center justify-center border-2 border-gold-300/40 transform rotate-12
                      shadow-[0_0_10px_rgba(234,179,8,0.2)]
                      ${isCenter ? 'group-hover:rotate-0 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]' : ''} 
                      transition-all duration-300`}>
                      <span className={`font-heading text-gold-300 text-lg transform -rotate-12 
                        ${isCenter ? 'group-hover:rotate-0' : ''} transition-all duration-300`}>
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-beige-900/90 via-beige-800/70 to-transparent 
                      flex flex-col justify-end p-8 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className={`text-2xl font-heading text-gold-300 mb-3 font-bold transition-transform duration-300 ${
                        isCenter ? 'group-hover:scale-105' : ''
                      }`}>
                        {experience.title}
                      </h3>
                      <p className={`text-maroon-200 mb-4 transition-transform duration-300 ${
                        isCenter ? 'group-hover:translate-y-0' : ''
                      }`}>
                        {experience.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExperience(selectedExperience === index ? null : index);
                        }}
                        className={`inline-flex items-center text-gold-300 hover:text-gold-400 transition-all duration-300 ${
                          isCenter ? 'group-hover:translate-x-2' : ''
                        }`}
                      >
                        {selectedExperience === index ? 'Show Less' : 'Know More'} 
                        <span className="ml-2">→</span>
                      </button>

                      {selectedExperience === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="mt-4 bg-beige-50/10 backdrop-blur-sm rounded-lg p-4 border border-gold-300/20
                            shadow-[0_0_15px_rgba(234,179,8,0.1)]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ul className="grid grid-cols-2 gap-2">
                            {experience.items.map((item, idx) => (
                              <li key={idx} className="text-maroon-200 flex items-center">
                                <span className="text-gold-400 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
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