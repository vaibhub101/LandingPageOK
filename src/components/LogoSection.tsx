import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEnquiryModal } from '../context/EnquiryModalContext';

const LogoSection = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="logo-section" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-beige-50 to-beige-100">
      {/* Corner Border Images
      <img 
        src="/newBordercorner.png" 
        alt="Decorative Corner Top Left" 
        className="pointer-events-none select-none absolute top-0 left-0 w-[45vw] max-w-[600px] min-w-[220px] h-auto z-0"
        style={{objectFit: 'contain'}}
        aria-hidden="true"
      />
      <img 
        src="/newBordercorner.png" 
        alt="Decorative Corner Bottom Right" 
        className="pointer-events-none select-none absolute bottom-0 right-0 w-[45vw] max-w-[600px] min-w-[220px] h-auto z-0 rotate-180"
        style={{objectFit: 'contain'}}
        aria-hidden="true"
      /> */}

      {/* Background decorative elements - reduced size */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-maroon-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
          {/* Animated Logo Container */}
          <motion.div 
            className="relative w-full max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo image with continuous rotation */}
            <motion.div 
              className="relative"
              animate={{ 
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <img 
                src="/bgremflower.png" 
                alt="Om Kalyanam Logo" 
                className="relative w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Headings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gold-600 mb-3">
              Tapasavi Mandala
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-maroon-700">
              Royal Founder Membership
            </h3>
            <div className="w-32 h-1 bg-gold-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Gift Button with Framer Motion Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 mb-16"
          >
            <motion.button
              onClick={openEnquiryModal}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-full text-lg md:text-xl font-medium overflow-hidden shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              whileHover={{ 
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 15px rgba(234,179,8,0.3)",
                  "0 0 30px rgba(234,179,8,0.6)",
                  "0 0 15px rgba(234,179,8,0.3)"
                ]
              }}
              transition={{
                y: {
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeOut"
                },
                scale: {
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeOut"
                },
                boxShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.span 
                className="relative z-10 font-heading tracking-wide"
                animate={{
                  opacity: [1, 0.7, 1],
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.3)",
                    "0 0 15px rgba(255,255,255,0.6)",
                    "0 0 5px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Gift Your Family
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ 
                  scale: 1.8,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 8
                  }
                }}
              />
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <a href="#about" className="text-gold-600 hover:text-gold-700 transition-colors duration-300">
              <ChevronDown size={32} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle fade effects at top and bottom */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-beige-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-beige-50 to-transparent"></div>
      </div>
    </section>
  );
};

export default LogoSection; 