import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
    src: 'https://images.pexels.com/photos/31901560/pexels-photo-31901560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Authentic ritual setting',
    heading: 'Founders of the Sacred Path',
    subheading: 'Om Kalyanam Santhigiri',
    description:
      'Enter the Tapasvi Mandala and claim your legacy as a Royal Founder where your vision shapes a sanctuary of divine harmony and healing.',
  },
  
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/7077051/7077051-hd_1920_1080_30fps.mp4',
    alt: 'Peaceful natural landscape at our retreat',
    heading: '65+ Years of Trust',
    subheading: 'Highlights the spiritual and historical depth.',
    description:
      'Be a catalyst in a global movement where your support blends Santhigiri rich spiritual heritage with cutting-edge Ayurveda, nurturing peace and well-being across the world.',
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-beige-50" id="home">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
              activeSlide === index
                ? 'opacity-100 translate-x-0 z-10'
                : 'opacity-0 translate-x-full z-0'
            } ${isTransitioning ? 'bg-beige-100' : ''}`}
          >
            {slide.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
            )}
          </div>
        ))}

        {/* Overlay - Using beige gradient for consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-beige-900/80 via-beige-800/40 to-transparent z-20"></div>
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
          <a
            href="#membership"
            className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-full text-lg hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Royal Founder Membership
          </a>
        </div>
      
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 z-30 p-4 text-earth-100/50 hover:text-earth-100 transition-all duration-300 animate-bounce hover:animate-none group"
        aria-label="Scroll to next section"
      >
        <ChevronDown
          size={32}
          className="transform group-hover:scale-110 transition-transform duration-300"
        />
      </button>
    </section>
  );
};

export default Hero;
