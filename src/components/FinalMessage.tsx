import React from 'react';
import { Heart } from 'lucide-react';

const FinalMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-maroon-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6 animate-pulse-slow">
            <Heart size={28} className="text-beige-50" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl mb-8 text-gold-600">THANK YOU</h2>
          
          <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8 md:p-10 mb-10">
            <p className="text-xl md:text-2xl italic font-heading text-maroon-700 leading-relaxed">
              "In giving yourself this gift of wellness you've gifted the world a soul that shines brighter"
            </p>
            <p className="text-gold-600 mt-4">— OM KALYANAM FAMILY</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#membership"
              className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-full text-lg hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg"
            >
              Join Our Community
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-maroon-700 text-maroon-700 rounded-full text-lg hover:bg-maroon-50 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;