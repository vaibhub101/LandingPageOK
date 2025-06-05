import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about-om-kalyanam" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
            <img src="/finalcrop.png" alt="Mandala" className="w-full h-full object-contain" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-gold-600">About Om kalyanam Santhigiri</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 scale-90 -rotate-3 border-2 border-gold-500/30 rounded-lg"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5416010/pexels-photo-5416010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Peaceful meditation space at Om Kalyanam Santhigiri" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="animate-fade-up">
            <p className="text-lg leading-relaxed text-maroon-700">
              Om Kalyanam Santhigiri Wellness Resort, inspired by Santhigiri Ashram's divine vision, promotes universal peace and holistic well-being through self-realization and service. Fostering compassion, unity, and spiritual awakening, it harmonizes body, mind, and soul with divine will. Offering Ayurvedic therapies, meditation, and sacred rituals in a serene setting, this unique resort unites guests across faiths for healing, inner balance, and divine connection, shining as a beacon of clarity, purpose, and peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;