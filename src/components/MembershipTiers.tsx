import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

const MembershipTiers = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [flippedMobile, setFlippedMobile] = useState<string | null>(null);

  const membershipCardImage = "https://images.pexels.com/photos/31906578/pexels-photo-31906578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const tiers = [
    {
      id: 'silver',
      name: 'Silver',
      duration: '3 years',
      nights: 30,
      roomCategory: 'Condo (15) + Cottage (15)',
      baseRate: '₹21,000',
      totalBaseRate: '₹6,30,000',
      benefits: [
        'Access to all wellness facilities',
        'Priority booking for retreats',
        'Annual wellness consultation',
        'Member-exclusive events',
        'Complimentary spa treatments',
        'Special rates for family members'
      ],
      // Silver solid background color
      backgroundColor: 'bg-[#e4e4e4]', // Updated to HEX #e4e4e4
      borderColor: 'border-gray-400', // Changed to a standard border color
      highlightColor: 'text-gray-800', // Changed to a readable dark text color
    },
    {
      id: 'gold',
      name: 'Gold',
      duration: '5 years',
      nights: 50,
      roomCategory: 'Condo (25) + Cottage (25)',
      baseRate: '₹19,250',
      totalBaseRate: '₹9,62,500',
      benefits: [
        'All Silver tier benefits',
        'Premium room upgrades',
        'Bi-annual wellness consultation',
        'Private wellness workshops',
        'Personal wellness coach',
        'VIP event access',
        'Extended stay privileges'
      ],
      // Gold solid background color
      backgroundColor: 'bg-[#d8b86f]', // Updated to HEX #d8b86f
      borderColor: 'border-yellow-700', // Changed to a standard border color that fits
      highlightColor: 'text-maroon-800', // Changed to a readable dark text color
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
      benefits: [
        'All Gold tier benefits',
        'Presidential Suite access',
        'Quarterly wellness consultation',
        'Private wellness sessions',
        'Exclusive retreat access',
        'Lifetime member privileges',
        'Dedicated wellness concierge',
        'Custom wellness programs'
      ],
      // Platinum solid background color
      backgroundColor: 'bg-[#b9b9b9]', // Updated to HEX #b9b9b9
      borderColor: 'border-gray-500', // Changed to a standard border color
      highlightColor: 'text-gray-800', // Changed to a readable dark text color
    }
  ];

  // Mobile detection
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Helper for flipping on both click and touch
  const handleFlip = (id: string) => {
    if (isMobile) {
      setFlippedMobile(flippedMobile === id ? null : id);
    }
  };

  return (
    <section id="membership-tiers" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">TAPASVI MANDALA ROYAL FOUNDER MEMBERSHIP</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Choose your path to transformation and wellness
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <motion.div 
              key={tier.id}
              className="relative h-[600px] perspective-1000"
              onHoverStart={() => !isMobile && setHoveredCard(tier.id)}
              onHoverEnd={() => !isMobile && setHoveredCard(null)}
              onClick={() => handleFlip(tier.id)}
              onTouchEnd={() => handleFlip(tier.id)}
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: (!isMobile && hoveredCard === tier.id) || (isMobile && flippedMobile === tier.id) ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className={`absolute inset-0 rounded-xl overflow-hidden border-2 ${tier.borderColor} ${tier.backgroundColor} relative ${
                    tier.recommended ? 'transform md:-translate-y-4' : ''
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
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
                </div>
                {/* Back of card */}
                <div
                  className={`absolute inset-0 rounded-xl overflow-hidden border-2 ${tier.borderColor}`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundImage: `url(${membershipCardImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className={`p-8 h-full flex flex-col ${tier.backgroundColor} bg-opacity-95 backdrop-blur-sm rounded-xl`}>
                    <h3 className={`font-heading text-2xl ${tier.highlightColor} mb-6 text-center font-bold`}>
                      {tier.name} Benefits
                    </h3>
                    <div className="flex-grow overflow-y-auto">
                      <div className="space-y-3 mb-6">
                        {tier.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <span className={tier.highlightColor}>•</span>
                            <span className={tier.highlightColor}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`mt-12 pt-8 border-t ${tier.borderColor}`}>
                      <div className="flex justify-center w-full">
                        <AnimatedEnquiryButton
                          variant={ 'primary' }
                          className="text-center"
                        >
                          Select {tier.name}
                        </AnimatedEnquiryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-beige-100/80 backdrop-blur-sm rounded-lg border border-gold-200">
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
