import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MembershipTiers = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
      backgroundColor: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300',
      borderColor: 'border-[#C0C0C0]',
      highlightColor: 'text-gray-700',
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-gray-200/50 before:via-white/80 before:to-gray-100/50 before:opacity-50'
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
      backgroundColor: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300',
      borderColor: 'border-yellow-400',
      highlightColor: 'text-yellow-700',
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-yellow-200/50 before:via-white/80 before:to-yellow-100/50 before:opacity-70 before:animate-shine',
      recommended: true
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
      backgroundColor: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
      borderColor: 'border-blue-500',
      highlightColor: 'text-white',
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-blue-400/30 before:via-white/20 before:to-blue-300/30 before:opacity-50'
    }
  ];

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
              onHoverStart={() => setHoveredCard(tier.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: hoveredCard === tier.id ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute inset-0 rounded-xl overflow-hidden border-2 ${tier.borderColor} ${tier.backgroundColor} ${tier.metallic} relative ${
                    tier.recommended ? 'transform md:-translate-y-4' : ''
                  }`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    boxShadow: tier.recommended ? '0 8px 30px rgba(234,179,8,0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-white py-2 text-base font-bold tracking-wider text-center uppercase">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8 pt-12 relative z-10">
                    <div className="text-center mb-8">
                      <h3 className={`font-heading text-3xl ${tier.highlightColor} mb-1 font-bold`}>{tier.name}</h3>
                      <p className={`${tier.id === 'platinum' ? 'text-blue-100' : 'text-maroon-600'} mb-4`}>{tier.duration}</p>
                      <div className="flex justify-center items-end mb-2">
                        <span className={`text-4xl font-heading font-bold ${tier.id === 'platinum' ? 'text-white' : 'text-maroon-700'}`}>{tier.totalBaseRate}</span>
                      </div>
                      <p className={`text-sm ${tier.id === 'platinum' ? 'text-blue-100' : 'text-maroon-600'}`}>Base investment (excl. taxes)</p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className={`flex justify-between border-b ${tier.id === 'platinum' ? 'border-blue-400 text-blue-100' : 'border-maroon-200'} pb-2`}>
                        <span className={tier.id === 'platinum' ? 'text-blue-100' : 'text-maroon-600'}>Daily Rate:</span>
                        <span className={`font-medium ${tier.id === 'platinum' ? 'text-white' : 'text-maroon-700'}`}>{tier.baseRate}</span>
                      </div>
                      <div className={`flex justify-between border-b ${tier.id === 'platinum' ? 'border-blue-400 text-blue-100' : 'border-maroon-200'} pb-2`}>
                        <span className={tier.id === 'platinum' ? 'text-blue-100' : 'text-maroon-600'}>Total Nights:</span>
                        <span className={`font-medium ${tier.id === 'platinum' ? 'text-white' : 'text-maroon-700'}`}>{tier.nights}</span>
                      </div>
                      <div className={`flex justify-between border-b ${tier.id === 'platinum' ? 'border-blue-400 text-blue-100' : 'border-maroon-200'} pb-2`}>
                        <span className={tier.id === 'platinum' ? 'text-blue-100' : 'text-maroon-600'}>Room Category:</span>
                        <span className={`font-medium ${tier.id === 'platinum' ? 'text-white' : 'text-maroon-700'}`}>{tier.roomCategory}</span>
                      </div>
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
                            <span className={`${tier.highlightColor} mr-2`}>•</span>
                            <span className={tier.id === 'platinum' ? 'text-white' : 'text-maroon-700'}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <button 
                        className={`w-full px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                          tier.recommended 
                            ? 'bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-white hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-600 shadow-lg hover:shadow-xl' 
                            : tier.id === 'platinum'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                            : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400'
                        }`}
                      >
                        Select {tier.name}
                      </button>
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
