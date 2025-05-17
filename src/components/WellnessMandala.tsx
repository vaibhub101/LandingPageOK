import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const WellnessMandala = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Images for Special Programs categories
  const programImages = {
    healing: "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg",
    breathing: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg",
    meditation: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg",
    therapy: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    mindfulness: "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg"
  };

  // Carousel data with updated navigation links
  const carouselData = {
    specialPrograms: [
      // Group 1: Healing & Energy
      {
        title: "Healing Therapies",
        items: [
          { name: "PRANIC HEALING", description: "Supports physical healing, promotes emotional well-being, and enhances mental clarity", link: "#special-programs" },
          { name: "REIKI", description: "Energy healing technique for stress reduction and relaxation", link: "#special-programs" },
          { name: "AKASHIC RECORD", description: "Accesses soul records to understand life patterns and challenges", link: "#special-programs" },
          { name: "TIBETAN PULSING", description: "Releases emotional blockage, Restores energy flow, Supports healing and inner peace", link: "#special-programs" }
        ],
        image: programImages.healing
      },
      // Group 2: Breathing Techniques
      {
        title: "Breathing Practices",
        items: [
          { name: "HOLOTROPHIC BREATHWORK", description: "Facilitates emotional release and deepens self-awareness" },
          { name: "PUMPJACK BREATHING", description: "Deepens self-awareness and aids in trauma healing" },
          { name: "FROG BREATHING", description: "Healing Through Consciousness and Self-Awareness" }
        ],
        image: programImages.breathing
      },
      // Continue with other groups...
    ],
    wellnessExperiences: [
      {
        title: "Naturopathy & Ayurveda",
        items: [
          { name: "Naturopathy", description: "Harnessing the 5 elements of nature for healing", link: "#experiences" },
          { name: "Ayurveda", description: "Ancient wisdom for holistic health and balance", link: "#experiences" }
        ],
        image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
      },
      {
        title: "Yoga & Meditation",
        items: [
          { name: "Yoga", description: "Unite body, mind, and spirit through sacred movement" },
          { name: "Meditation", description: "Cultivate presence and inner stillness" }
        ],
        image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
      }
    ],
    wellnessDimensions: [
      {
        title: "Physical & Mental",
        items: [
          { name: "Physical Wellness", description: "Reclaim your body with specialized physical wellness programs", link: "#dimensions" },
          { name: "Emotional & Mental Wellness", description: "Heal, express, and transform your emotional landscape", link: "#dimensions" }
        ],
        image: "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg"
      },
      {
        title: "Spiritual & Lifestyle",
        items: [
          { name: "Spiritual Wellness", description: "Reunite with the sacred dimensions of your being" },
          { name: "Lifestyle & Preventive Wellness", description: "Craft a way of life that promotes ongoing wellness" }
        ],
        image: "https://images.pexels.com/photos/3822711/pexels-photo-3822711.jpeg"
      }
    ]
  };

  const [carouselStates, setCarouselStates] = useState({
    specialPrograms: 0,
    wellnessExperiences: 0,
    wellnessDimensions: 0
  });

  const handleNext = (section: keyof typeof carouselStates) => {
    setCarouselStates(prev => ({
      ...prev,
      [section]: (prev[section] + 1) % carouselData[section].length
    }));
  };

  const handlePrev = (section: keyof typeof carouselStates) => {
    setCarouselStates(prev => ({
      ...prev,
      [section]: (prev[section] - 1 + carouselData[section].length) % carouselData[section].length
    }));
  };

  const CarouselSection = ({ title, data, section }: { title: string, data: any[], section: keyof typeof carouselStates }) => (
    <div className="mb-20">
      <h3 className="text-3xl font-heading text-gold-600 mb-8 text-center">{title}</h3>
      <div className="relative">
        <button 
          onClick={() => handlePrev(section)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full
          bg-gradient-to-r from-gold-600/90 to-gold-700/90 text-white
          shadow-[0_2px_10px_rgba(234,179,8,0.2)] hover:shadow-[0_5px_15px_rgba(234,179,8,0.4)]
          transform hover:scale-110 transition-all duration-300 hover:-translate-x-1"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="overflow-hidden mx-12">
          <motion.div
            className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={data[carouselStates[section]].image} 
              alt={data[carouselStates[section]].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beige-50/95 to-transparent flex flex-col justify-end p-8">
              <h4 className="text-2xl font-heading text-gold-600 mb-4">
                {data[carouselStates[section]].title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {data[carouselStates[section]].items.map((item: any, idx: number) => (
                  <div key={idx} 
                    className="group bg-white/80 backdrop-blur-sm rounded-lg p-4 
                    shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_15px_rgba(234,179,8,0.2)]
                    transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <h5 className="text-gold-600 font-heading mb-2">{item.name}</h5>
                    <p className="text-maroon-700 text-sm">{item.description}</p>
                    <a
                      href={item.link}
                      className="mt-2 inline-flex items-center text-gold-600 hover:text-gold-700 text-sm group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Know More <span className="ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <button 
          onClick={() => handleNext(section)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full
          bg-gradient-to-r from-gold-600/90 to-gold-700/90 text-white
          shadow-[0_2px_10px_rgba(234,179,8,0.2)] hover:shadow-[0_5px_15px_rgba(234,179,8,0.4)]
          transform hover:scale-110 transition-all duration-300 hover:translate-x-1"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.img
            src="/flower.png"
            alt="Decorative Flower"
            className="w-20 h-20 mx-auto mb-6 origin-center"
            style={{
              transformOrigin: 'center center',
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-gold-600">
            Experience the Mandala of Wellness
          </h2>
          <p className="text-xl text-maroon-700 font-accent mb-8">
            Discover our transformative journey through various dimensions of wellness
          </p>
          <div className="w-32 h-1 mx-auto bg-gold-600"></div>
        </div>

        <CarouselSection 
          title="Special Programmes" 
          data={carouselData.specialPrograms}
          section="specialPrograms"
        />
        
        <CarouselSection 
          title="Wellness Experiences" 
          data={carouselData.wellnessExperiences}
          section="wellnessExperiences"
        />
        
        <CarouselSection 
          title="Wellness Dimensions" 
          data={carouselData.wellnessDimensions}
          section="wellnessDimensions"
        />
      </div>
    </section>
  );
};

export default WellnessMandala; 