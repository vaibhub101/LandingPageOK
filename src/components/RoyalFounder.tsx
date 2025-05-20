import React from 'react';
import { motion } from 'framer-motion';

const RoyalFounder = () => {
  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
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
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-gold-600 uppercase">TAPASVI MANDALA ROYAL FOUNDER MEMBERSHIP</h2>
          <p className="text-xl text-maroon-700">Become a Royal Founder Member</p>
          <div className="w-32 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <p className="text-lg leading-relaxed mb-6 text-maroon-700">
              A Legacy Beyond Wellness	
              Tapasvi Mandala is the sacred circle of Royal Founder Members—visionary souls who feel called to walk the higher path of
              conscious living, collective healing, and timeless wisdom.
              By joining this intimate fellowship, you become a co-creator in the spiritual legacy of Om Kalyanam Santhigiri—a sanctuary
              where ancient healing, emotional awakening, and soul transformation come together in harmony.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-maroon-700">
              This is not just a membership. It is a heartfelt offering to the world—and a divine return to your true self.	
            </p>
            
            <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-lg p-8 mt-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-heading text-gold-600 mb-6">YOUR ROYAL PRIVILEGES:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <span className="text-gold-500 font-bold text-xl group-hover:scale-110 transition-transform">✦</span>
                  <span className="text-maroon-700 group-hover:text-gold-600 transition-colors">Priority Booking</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-gold-500 font-bold text-xl group-hover:scale-110 transition-transform">✦</span>
                  <span className="text-maroon-700 group-hover:text-gold-600 transition-colors">Exclusive Founder Discounts</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-gold-500 font-bold text-xl group-hover:scale-110 transition-transform">✦</span>
                  <span className="text-maroon-700 group-hover:text-gold-600 transition-colors">Personalised privileges</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-gold-500 font-bold text-xl group-hover:scale-110 transition-transform">✦</span>
                  <span className="text-maroon-700 group-hover:text-gold-600 transition-colors">Recognition in Our Living Legacy</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a 
                href="#membership-tiers"
                className="inline-block px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-lg 
                  hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1 hover:scale-105"
              >
                Become a Founder Member
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold-500/30 rounded-lg rotate-3"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-beige-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://cdn.pixabay.com/photo/2016/08/11/02/23/massage-therapy-1584711_1280.jpg" 
                alt="OM KALYANAM SANTHIGIRI community" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalFounder;