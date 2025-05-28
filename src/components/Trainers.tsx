import React, { useState, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const trainers = [
    {
      name: "Dr Nishi Bhatt",
      role: "Ayurvedic Doctor",
      image: "/trainers/nishi.jpg",
      description: "Dr Nishi Bhatt is one of the leading doctors in the emerging field of holistic & neurological treatments involving Ayurveda, Naturopathy and various healing modalities."
    },
    {
      name: "Dr. Himani Jolly",
      role: "Horoscope Teller",
      image: "/trainers/drHimani.jpg",
      description: "Dr. Himani Jolly is Global Consultant - Tarot Reader, Horoscope Teller, Spiritual Reader, Fortune Teller having 15 years of successful reading experience"
    },
    {
      name: "Anjali Mathur",
      role: "Gong Master",
      image: "/trainers/anjali.jpg",
      description: "Anjali Mathur is a globally certified Gong Master, Sound and Yoga Therapist, and the worlds only Conch Therapist, blending ancient Indian wisdom with modern healing sciences."
    },
    {
      name: "Acharya Anupam Jolly",
      role: "Astrologer",
      image: "/trainers/anupam.jpg",
      description: "Acharya Anupam Jolly is CoFounder - International School of Astrology & Divine Sciences and Chief Editor–India Asking. He is a much acclaimed astrologer practicing Vedic and K P Astrology."
    },
    {
      name: "Sonika Vickraman",
      role: "Martial Arts Expert",
      image: "/trainers/sonika.jpg",
      description: "Sonika vickraman is a martial arts expert with 30 years of experience in Karate and Tai Chi, using them as tools for healing through movement, breath, and energy flow. She integrates mindfulness, self-defense, and energy healing to address both mental and physical health challenges."
    },
    {
      name: "PS Rathore",
      role: "Business Development Expert",
      image: "/trainers/rathoreOM.jpg",
      description: "PS Rathore is a visionary in personal and business development, trained in Practical NLP and Firewalking under Tony Robbins in the USA. He brings strategic insights from global experts like Michael Porter and Tom Peters to his transformative work."
    },
    {
      name: "Vinod Phutela",
      role: "NLP Coach",
      image: "/trainers/vinod.jpg",
      description: "Vinod Phutela is a Leading NLP COACH of India, Author, mentalist, and a dedicated parent."
    }
  ];

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [trainers.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + trainers.length) % trainers.length);
  };

  return (
    <section id="trainers" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6">
            <Users size={28} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">Our Healing Guides</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Meet the experienced practitioners guiding your transformation journey
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-beige-100/80 text-gold-600 hover:bg-gold-100 transition-colors shadow-lg"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-beige-100/80 text-gold-600 hover:bg-gold-100 transition-colors shadow-lg"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Content */}
          <div className="relative h-[600px] w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl overflow-hidden shadow-xl">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="relative h-72 md:h-[500px]">
                        <img 
                          src={trainers[currentIndex].image} 
                          alt={trainers[currentIndex].name} 
                          className={`w-full h-full transition-transform duration-700 hover:scale-105 ${
                            trainers[currentIndex].name === "Sonika Vickraman" ? "object-cover object-top" :
                            trainers[currentIndex].name === "Acharya Anupam Jolly" ? "object-cover object-top" :
                            trainers[currentIndex].name === "Dr. Himani Jolly" ? "object-cover object-[center_25%]" :
                            "object-cover"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-beige-100/20"></div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="font-heading text-3xl text-gold-600 mb-2">{trainers[currentIndex].name}</h3>
                      <p className="text-gold-500 text-xl mb-6">{trainers[currentIndex].role}</p>
                      <p className="text-maroon-700 text-lg leading-relaxed">{trainers[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {trainers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-600 w-6' 
                    : 'bg-gold-300 hover:bg-gold-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;