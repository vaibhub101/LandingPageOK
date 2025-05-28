import React from 'react';
import { motion } from 'framer-motion';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

const RoyalFounder = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="membership-tiers" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-maroon-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center bg-transparent mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img src="/bgremflower.png" alt="Decorative Flower" className="w-full h-full object-contain" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading text-gold-600 mb-6">
              Royal Founder Membership
            </h2>
            <p className="text-xl text-maroon-700 max-w-3xl mx-auto">
              Experience exclusive benefits and transformative wellness journeys as a Royal Founder Member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
              {/* Legacy Content */}
              <div className="p-8">
                <h3 className="text-2xl font-heading text-gold-600 mb-6">
                  A Legacy Beyond Wellness
                </h3>
                <div className="prose prose-maroon">
                  <p className="text-maroon-700 mb-6 leading-relaxed">
                    Tapasvi Mandala is the sacred circle of Royal Founder Members—visionary souls who feel called to walk the higher path of conscious living, collective healing, and timeless wisdom. By joining this intimate fellowship, you become a co-creator in the spiritual legacy of Om Kalyanam Santhigiri—a sanctuary where ancient healing, emotional awakening, and soul transformation come together in harmony.
                  </p>
                  <p className="text-maroon-700 italic font-medium mb-6">
                    This is not just a membership. It is a heartfelt offering to the world—and a divine return to your true self.
                  </p>
                </div>
              </div>

              {/* Benefits Content */}
              <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-heading text-gold-600 mb-8">
                  YOUR ROYAL PRIVILEGES
                </h3>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3 text-xl">✦</span>
                    <span className="text-maroon-700 text-lg">Be a part of a living legacy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3 text-xl">✦</span>
                    <span className="text-maroon-700 text-lg">Recieve life long blessings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3 text-xl">✦</span>
                    <span className="text-maroon-700 text-lg">Be remembered, forever</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3 text-xl">✦</span>
                    <span className="text-maroon-700 text-lg">Create ripples of healing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3 text-xl">✦</span>
                    <span className="text-maroon-700 text-lg">Belong to a soul-chosen circle</span>
                  </li>
                </ul>

                <div className="mt-12 pt-8 border-t border-gold-200">
                  <AnimatedEnquiryButton>
                    Become a Founder Member
                  </AnimatedEnquiryButton>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/familyphoto.jpeg"
                alt="Luxury Wellness Experience"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalFounder;