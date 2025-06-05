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
      // Silver gradient - Updated
      backgroundColor: 'bg-gradient-to-br from-[#cccccc] via-[#e3e3e3] to-[#cccccc]',
      borderColor: 'border-[#e3e3e3]',
      highlightColor: 'text-gray-600', // Adjusted for contrast
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#f2f2f2]/60 before:via-white/80 before:to-[#e3e3e3]/60 before:opacity-70', // Adjusted
      button: 'bg-gradient-to-r from-[#a3a3a3] to-[#8c8c8c] text-white', // Adjusted
      glow: 'hover:shadow-[0_0_24px_6px_rgba(227,227,227,0.5)]', // Adjusted
      sparkle: 'sparkle-silver' // Existing sparkle key, update CSS if needed
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
      // Gold gradient - Updated
      backgroundColor: 'bg-gradient-to-br from-[#f2f0ea] via-[#e9dcc2] to-[#f2f0ea]',
      borderColor: 'border-[#e9dcc2]',
      highlightColor: 'text-[#b58f5a]', // Adjusted for contrast
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#f7f5f0]/60 before:via-white/80 before:to-[#e9dcc2]/60 before:opacity-80', // Adjusted
      recommended: true,
      button: 'bg-gradient-to-r from-[#d4b88c] to-[#c4a87c] text-white', // Adjusted
      glow: 'hover:shadow-[0_0_32px_8px_rgba(233,220,194,0.5)]', // Adjusted
      sparkle: 'sparkle-gold' // Existing sparkle key, update CSS if needed
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
      // Platinum gradient - Updated (using E3CD9B)
      backgroundColor: 'bg-gradient-to-br from-[#d9c58f] via-[#E3CD9B] to-[#d9c58f]',
      borderColor: 'border-[#E3CD9B]',
      highlightColor: 'text-[#8a7b5a]', // Adjusted for contrast
      metallic: 'before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#f2eadc]/60 before:via-white/80 before:to-[#E3CD9B]/60 before:opacity-70', // Adjusted
      button: 'bg-gradient-to-r from-[#b29e6b] to-[#a38e5c] text-white', // Adjusted
      glow: 'hover:shadow-[0_0_32px_8px_rgba(227,205,155,0.5)]', // Adjusted
      sparkle: 'sparkle-rose' // Existing sparkle key, update CSS if needed
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

        @keyframes pulse-glow {
          0% { box-shadow: 0 0 15px rgba(255,255,255,0.5), 0 0 25px currentColor, 0 0 35px currentColor; }
          50% { box-shadow: 0 0 25px rgba(255,255,255,0.5), 0 0 35px currentColor, 0 0 55px currentColor; }
          100% { box-shadow: 0 0 15px rgba(255,255,255,0.5), 0 0 25px currentColor, 0 0 35px currentColor; }
        }

        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .sparkle-silver::after {
          content: '';
          position: absolute;
          top: 10%; left: 70%;
          width: 18px; height: 18px;
          background: radial-gradient(circle, #ffffff 60%, #e3e3e3 100%); /* Updated */
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
          background: radial-gradient(circle, #ffffff 60%, #e9dcc2 100%); /* Updated */
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
          background: radial-gradient(circle, #ffffff 60%, #E3CD9B 100%); /* Updated */
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          animation: sparkle 1.2s infinite;
          filter: blur(1px);
        }

        .membership-button {
          transform: perspective(1000px) translateZ(0);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-weight: bold;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          padding: 1rem 2rem;
          border-radius: 9999px;
        }

        .membership-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .membership-button:hover::before {
          opacity: 1;
        }

        .membership-button:hover {
          transform: perspective(1000px) translateZ(20px) translateY(-5px);
        }

        .membership-button:active {
          transform: perspective(1000px) translateZ(10px) translateY(0);
        }

        .btn-silver, .btn-gold, .btn-platinum {
          color: white;
          font-weight: 800;
          letter-spacing: 0.5px;
          animation: float 3s infinite ease-in-out;
        }

        .btn-silver {
          background: linear-gradient(to right, #a3a3a3, #8c8c8c); /* Updated */
          box-shadow: 0 0 20px rgba(227,227,227,0.5); /* Updated */
        }

        .btn-gold {
          background: linear-gradient(to right, #d4b88c, #c4a87c); /* Updated */
          box-shadow: 0 0 20px rgba(233,220,194,0.5); /* Updated */
        }

        .btn-platinum {
          background: linear-gradient(to right, #b29e6b, #a38e5c); /* Updated */
          box-shadow: 0 0 20px rgba(227,205,155,0.5); /* Updated */
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
                    boxShadow: tier.recommended ? '0 8px 30px rgba(233,220,194,0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)' // Adjusted recommended shadow
                  }}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#e9dcc2] via-[#d4b88c] to-[#e9dcc2] text-maroon-800 py-2 text-base font-bold tracking-wider text-center uppercase"> {/* Adjusted recommended ribbon color and text */}
                      Most Popular
                    </div>
                  )}
                  <div className="flex flex-col items-center p-8 pt-12 relative z-10 mb-8">
                    <img src="/bgremflower.png" alt="Tapasvi Mandala" className="w-20 h-20 mb-4" />
                    <h3 className={`font-heading text-3xl ${tier.highlightColor} mb-1 font-bold`}>{tier.name}</h3>
                    <p className={`${tier.highlightColor} mb-2`}>{tier.duration}</p> {/* Simplified color class */}
                    <div className="flex justify-center items-end mb-2">
                      <span className={`text-4xl font-heading font-bold ${tier.highlightColor}`}>{tier.totalBaseRate}</span> {/* Simplified color class */}
                    </div>
                    <p className={`text-sm ${tier.highlightColor}`}>Base investment (excl. taxes)</p> {/* Simplified color class */}
                  </div>
                  <div className="space-y-4 mb-8 px-8">
                    <div className={`flex justify-between border-b ${tier.borderColor.replace('border', 'border-') } ${tier.highlightColor} pb-2`}> {/* Simplified color class and border color */}
                      <span className={tier.highlightColor}>Daily Rate:</span> {/* Simplified color class */}
                      <span className={`font-medium ${tier.highlightColor}`}>{tier.baseRate}</span> {/* Simplified color class */}
                    </div>
                    <div className={`flex justify-between border-b ${tier.borderColor.replace('border', 'border-') } ${tier.highlightColor} pb-2`}> {/* Simplified color class and border color */}
                      <span className={tier.highlightColor}>Total Nights:</span> {/* Simplified color class */}
                      <span className={`font-medium ${tier.highlightColor}`}>{tier.nights}</span> {/* Simplified color class */}
                    </div>
                    <div className={`flex justify-between border-b ${tier.borderColor.replace('border', 'border-') } ${tier.highlightColor} pb-2`}> {/* Simplified color class and border color */}
                      <span className={tier.highlightColor}>Room Category:</span> {/* Simplified color class */}
                      <span className={`font-medium ${tier.highlightColor}`}>{tier.roomCategory}</span> {/* Simplified color class */}
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
                            <span className={`${tier.highlightColor} mr-2`}>•</span> {/* Simplified color class */}
                            <span className={tier.highlightColor}>{benefit}</span> {/* Simplified color class */}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-12 pt-8 border-t ${tier.borderColor.replace('border', 'border-')}"> {/* Simplified border color */}
                      <div className="flex justify-center w-full">
                        <AnimatedEnquiryButton
                          variant={ 'primary' } // Using primary for all buttons for consistency
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
