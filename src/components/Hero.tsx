import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

const slides = [
  {
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2024/05/23/213387_large.mp4',
    alt: 'Serene meditation practice at Om Kalyanam Santhigiri',
    heading: 'Tapasvi Mandala:',
    subheading: 'Royal Founder Membership',
    description:
      ' Become a Royal Founder of Om Kalyanam Santhigiri.',
  },
  {
    type: 'image',
    src: (isMobile: boolean) => isMobile ? '/Heroimage.png' : 'https://images.pexels.com/photos/31901560/pexels-photo-31901560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Group of people smiling',
    heading: 'Founders of the Sacred Path',
    subheading: 'Om Kalyanam Santhigiri',
    description:
      'Enter the Tapasvi Mandala and claim your legacy as a Royal Founder where your vision shapes a sanctuary of divine harmony and healing.',
  },
  
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/7077051/7077051-hd_1920_1080_30fps.mp4',
    alt: 'Peaceful natural landscape at our retreat',
    heading: '60+ Years of Trust',
    subheading: 'Highlights the spiritual and historical depth.',
    description:
      'Be a catalyst in a global movement where your support blends Santhigiri rich spiritual heritage with cutting-edge Ayurveda, nurturing peace and well-being across the world.',
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('logo-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-beige-50" id="home">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src as string}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={typeof slide.src === 'function' ? slide.src(isMobile) : slide.src}
                alt={slide.alt}
                className={`object-cover ${isMobile && index === 1 ? 'w-[384px] h-[642px] mx-auto' : 'w-full h-full'}`}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-500 ease-in-out rounded-full backdrop-blur-sm ${
              activeSlide === index
                ? 'w-8 h-2 bg-gold-300/80'
                : 'w-2 h-2 bg-earth-200/30 hover:bg-earth-200/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center items-center px-4 text-center">
        <div key={activeSlide} className="max-w-4xl mx-auto animate-fade-in transition-opacity duration-1200">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-earth-100 leading-tight">
            <span className="block">{slides[activeSlide].heading}</span>
            <span className="block text-gold-300">{slides[activeSlide].subheading}</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-earth-200">
            {slides[activeSlide].description}
          </p>
        </div>
  
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <AnimatedEnquiryButton>
            Explore Royal Founder Membership
          </AnimatedEnquiryButton>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about-om-kalyanam" className="text-gold-600 hover:text-gold-700 transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
