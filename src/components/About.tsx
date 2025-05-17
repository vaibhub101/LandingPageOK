import React from 'react';
import { Sunrise } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mx-auto mb-6">
            <Sunrise size={32} className="text-white" />
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
            <p className="text-lg leading-relaxed mb-6 text-maroon-700">
              Om Kalyanam Santhigiri Wellness Resort, inspired by Santhigiri Ashram's divine vision, promotes universal peace and holistic well-being through self-realization and service. Fostering compassion, unity, and spiritual awakening, it harmonizes body, mind, and soul with divine will. Offering Ayurvedic therapies, meditation, and sacred rituals in a serene setting, this unique resort unites guests across faiths for healing, inner balance, and divine connection, shining as a beacon of clarity, purpose, and peace.
            </p>
            {/* <p className="text-lg leading-relaxed mb-6 text-earth-200">
              The essence of Omkalyanam lies in harmonizing individual life with divine will, facilitated through our comprehensive 8 Dimensions of Transformational Wellness. Each dimension addresses a fundamental aspect of human existence, creating a balanced approach to healing and growth.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-earth-200">
              Whether through rituals, community service, or spiritual practices, Omkalyanam Santhigiri serves as a beacon for those seeking profound healing and personal evolution. Our approach honors tradition while embracing innovation, creating a unique space for authentic transformation.
            </p> */}
            <a 
              href="#wellness"
              className="group relative inline-block px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white 
              rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(234,179,8,0.2)] 
              hover:shadow-[0_8px_20px_rgba(234,179,8,0.4)] transform hover:-translate-y-1 
              active:translate-y-0 transition-all duration-300"
            >
              <span className="relative z-10">Explore Our Philosophy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;