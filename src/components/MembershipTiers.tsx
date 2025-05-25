import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      // Silver gradient
      backgroundColor: 'bg-gradient-to-br from-[#e3e3e3] via-[#f8f8f8] to-[#bdbdbd]',
      borderColor: 'border-[#C0C0C0]',
      highlightColor: 'text-gray-700',
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#f8f8f8]/60 before:via-white/80 before:to-[#e3e3e3]/60 before:opacity-70',
      button: 'bg-gradient-to-r from-[#e3e3e3] to-[#bdbdbd] text-gray-700',
      glow: 'hover:shadow-[0_0_24px_6px_rgba(192,192,192,0.5)]',
      sparkle: 'sparkle-silver'
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
      // Gold gradient
      backgroundColor: 'bg-gradient-to-br from-[#ffe082] via-[#ffd54f] to-[#ffb300]',
      borderColor: 'border-[#FFD700]',
      highlightColor: 'text-yellow-800',
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#fff8e1]/60 before:via-white/80 before:to-[#ffe082]/60 before:opacity-80',
      recommended: true,
      button: 'bg-gradient-to-r from-[#ffe082] to-[#ffb300] text-yellow-900',
      glow: 'hover:shadow-[0_0_32px_8px_rgba(255,215,0,0.5)]',
      sparkle: 'sparkle-gold'
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
      // Rose gold gradient
      backgroundColor: 'bg-gradient-to-br from-[#f7cac9] via-[#ffe5d9] to-[#b76e79]',
      borderColor: 'border-[#b76e79]',
      highlightColor: 'text-[#b76e79]',
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#ffe5d9]/60 before:via-white/80 before:to-[#f7cac9]/60 before:opacity-70',
      button: 'bg-gradient-to-r from-[#f7cac9] to-[#b76e79] text-[#b76e79]',
      glow: 'hover:shadow-[0_0_32px_8px_rgba(183,110,121,0.5)]',
      sparkle: 'sparkle-rose'
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
      <style>{`
        @keyframes sparkle {
          0% { opacity: 0.7; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(20deg); }
          100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
        }
        .sparkle-silver::after {
          content: '';
          position: absolute;
          top: 10%; left: 70%;
          width: 18px; height: 18px;
          background: radial-gradient(circle, #fff 60%, #e3e3e3 100%);
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          animation: sparkle 1.2s infinite;
          filter: blur(1px);
        }
        .sparkle-gold::after {
          content: '';
          position: absolute;
          top: 12%; left: 65%;
          width: 20px; height: 20px;
          background: radial-gradient(circle, #fffbe6 60%, #ffd700 100%);
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          animation: sparkle 1.2s infinite;
          filter: blur(1px);
        }
        .sparkle-rose::after {
          content: '';
          position: absolute;
          top: 14%; left: 60%;
          width: 18px; height: 18px;
          background: radial-gradient(circle, #fff 60%, #f7cac9 100%);
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          animation: sparkle 1.2s infinite;
          filter: blur(1px);
        }
      `}</style>
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
                  <div className="flex flex-col items-center p-8 pt-12 relative z-10 mb-8">
                    <img src="/bgremflower.png" alt="Tapasvi Mandala" className="w-20 h-20 mb-4" />
                    <h3 className={`font-heading text-3xl ${tier.highlightColor} mb-1 font-bold`}>{tier.name}</h3>
                    <p className={`${tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-600'} mb-2`}>{tier.duration}</p>
                    <div className="flex justify-center items-end mb-2">
                      <span className={`text-4xl font-heading font-bold ${tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-700'}`}>{tier.totalBaseRate}</span>
                    </div>
                    <p className={`text-sm ${tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-600'}`}>Base investment (excl. taxes)</p>
                  </div>
                  <div className="space-y-4 mb-8 px-8">
                    <div className={`flex justify-between border-b ${tier.id === 'platinum' ? 'border-[#b76e79] text-[#b76e79]' : 'border-maroon-200' } pb-2`}>
                      <span className={tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-600'}>Daily Rate:</span>
                      <span className={`font-medium ${tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-700'}`}>{tier.baseRate}</span>
                    </div>
                    <div className={`flex justify-between border-b ${tier.id === 'platinum' ? 'border-[#b76e79] text-[#b76e79]' : 'border-maroon-200' } pb-2`}>
                      <span className={tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-600'}>Total Nights:</span>
                      <span className={`font-medium ${tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-700'}`}>{tier.nights}</span>
                    </div>
                    <div className={`flex justify-between border-b ${tier.id === 'platinum' ? 'border-[#b76e79] text-[#b76e79]' : 'border-maroon-200' } pb-2`}>
                      <span className={tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-600'}>Room Category:</span>
                      <span className={`font-medium ${tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-700'}`}>{tier.roomCategory}</span>
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
                            <span className={tier.id === 'platinum' ? 'text-[#b76e79]' : 'text-maroon-700'}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 relative">
                      <motion.button
                        className={`w-full px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden ${tier.button} ${tier.glow} ${tier.sparkle}`}
                        whileHover={{ scale: 1.12 }}
                        animate={{ scale: [1, 1.15, 0.97, 1.12, 1] }}
                        transition={{ repeat: Infinity, duration: 1.4, type: 'spring', stiffness: 300, damping: 10 }}
                      >
                        Select {tier.name}
                      </motion.button>
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
