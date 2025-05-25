import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const FinalMessage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-maroon-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="relative p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full shadow-lg shadow-gold-500/20 transform hover:scale-105 transition-all duration-300">
              <Heart size={32} className="text-beige-50" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 text-gold-400 animate-pulse" size={20} />
            <Sparkles className="absolute -bottom-2 -left-2 text-gold-400 animate-pulse" size={20} />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl mb-10 text-gold-600 bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-gold-800">
            THANK YOU
          </h2>
          
          <div className="relative mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-beige-100/90 backdrop-blur-sm border border-gold-200 rounded-xl p-8 md:p-12 shadow-xl shadow-gold-500/10 transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-2xl md:text-3xl italic font-heading text-maroon-700 leading-relaxed">
                "In giving yourself this gift of wellness you've gifted the world a soul that shines brighter"
              </p>
              <p className="text-gold-600 mt-6 text-lg font-medium">— OM KALYANAM FAMILY</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#membership"
              className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-full text-lg font-medium hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-transparent border-2 border-maroon-700 text-maroon-700 rounded-full text-lg font-medium hover:bg-maroon-50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-maroon-700/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;