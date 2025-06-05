import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

const MembershipTiers = () => {
  const tiers = [
    {
      id: 'silver',
      name: 'Silver',
      duration: '3 years',
      nights: 30,
      roomCategory: 'Condo (15) + Cottage (15)',
      baseRate: '₹21,000',
      totalBaseRate: '₹6,30,000',
      backgroundColor: 'bg-[#e4e4e4]',
      borderColor: 'border-gray-400',
      highlightColor: 'text-gray-800',
    },
    {
      id: 'gold',
      name: 'Gold',
      duration: '5 years',
      nights: 50,
      roomCategory: 'Condo (25) + Cottage (25)',
      baseRate: '₹19,250',
      totalBaseRate: '₹9,62,500',
      backgroundColor: 'bg-[#d8b86f]',
      borderColor: 'border-yellow-700',
      highlightColor: 'text-maroon-800',
      recommended: true,
    },
    {
      id: 'platinum',
      name: 'Platinum',
      duration: '7 years',
      nights: 70,
      roomCategory: 'Cottage (50) + Presidential Suite (20)',
      baseRate: '₹17,500',
      totalBaseRate: '₹12,25,000',
      backgroundColor: 'bg-[#b9b9b9]',
      borderColor: 'border-gray-500',
      highlightColor: 'text-gray-800',
    }
  ];

  return (
    <section id="membership-tiers" className="py-48 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">TAPASVI MANDALA ROYAL FOUNDER MEMBERSHIP</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Choose your path to transformation and wellness
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 max-w-6xl mx-auto mb-80">
          {tiers.map((tier) => (
            <motion.div 
              key={tier.id}
              className="relative h-[400px] mb-48 md:mb-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute inset-0 rounded-xl overflow-hidden border-2 ${tier.borderColor} ${tier.backgroundColor} relative ${
                  tier.recommended ? 'transform md:-translate-y-4' : ''
                }`}
                style={{
                  boxShadow: tier.recommended ? '0 8px 30px rgba(233,220,194,0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                {tier.recommended && (
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#e9dcc2] via-[#d4b88c] to-[#e9dcc2] text-maroon-800 py-2 text-base font-bold tracking-wider text-center uppercase">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col items-center p-8 pt-12 relative z-10 mb-8">
                  <img src="/bgremflower.png" alt="Tapasvi Mandala" className="w-20 h-20 mb-4" />
                  <h3 className={`font-heading text-3xl ${tier.highlightColor} mb-1 font-bold`}>{tier.name}</h3>
                  <p className={tier.highlightColor}>{tier.duration}</p>
                  <div className="flex justify-center items-end mb-2">
                    <span className={`text-4xl font-heading font-bold ${tier.highlightColor}`}>{tier.totalBaseRate}</span>
                  </div>
                  <p className={`text-sm ${tier.highlightColor}`}>Base investment (excl. taxes)</p>
                </div>
                <div className="space-y-4 mb-8 px-8">
                  <div className={`flex justify-between border-b ${tier.borderColor} ${tier.highlightColor} pb-2`}>
                    <span className={tier.highlightColor}>Daily Rate:</span>
                    <span className={`font-medium ${tier.highlightColor}`}>{tier.baseRate}</span>
                  </div>
                  <div className={`flex justify-between border-b ${tier.borderColor} ${tier.highlightColor} pb-2`}>
                    <span className={tier.highlightColor}>Total Nights:</span>
                    <span className={`font-medium ${tier.highlightColor}`}>{tier.nights}</span>
                  </div>
                  <div className={`flex justify-between border-b ${tier.borderColor} ${tier.highlightColor} pb-2`}>
                    <span className={tier.highlightColor}>Room Category:</span>
                    <span className={`font-medium ${tier.highlightColor}`}>{tier.roomCategory}</span>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <AnimatedEnquiryButton
                    variant="primary"
                    className="w-full text-center"
                  >
                    Select {tier.name}
                  </AnimatedEnquiryButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="max-w-4xl mx-auto p-6 bg-beige-100/80 backdrop-blur-sm rounded-lg border border-gold-200">
          <h4 className="text-gold-600 font-heading text-xl mb-4">Disclaimers</h4>
          <ul className="text-maroon-700 space-y-2">
            <li>• All rates are subject to applicable taxes</li>
            <li>• Benefits and privileges are subject to availability</li>
            <li>• Terms and conditions apply</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;
