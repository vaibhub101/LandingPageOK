import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const AnimatedButton = ({ href, children, variant = 'primary', className = '' }: AnimatedButtonProps) => {
  const baseColors = variant === 'primary' 
    ? 'from-gold-600 to-gold-700 shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
    : 'from-maroon-600 to-maroon-700 shadow-[0_0_15px_rgba(153,27,27,0.3)]';

  return (
    <motion.a
      href={href}
      className={`group relative inline-flex items-center px-8 py-4 bg-gradient-to-r ${baseColors} text-white rounded-full text-lg md:text-xl font-medium overflow-hidden ${className}`}
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
          variant === 'primary' 
            ? "0 0 15px rgba(234,179,8,0.3)"
            : "0 0 15px rgba(153,27,27,0.3)",
          variant === 'primary'
            ? "0 0 30px rgba(234,179,8,0.6)"
            : "0 0 30px rgba(153,27,27,0.6)",
          variant === 'primary'
            ? "0 0 15px rgba(234,179,8,0.3)"
            : "0 0 15px rgba(153,27,27,0.3)"
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
        {children}
      </motion.span>
      <div className={`absolute inset-0 bg-gradient-to-r ${
        variant === 'primary' 
          ? 'from-gold-400/20 to-gold-600/20'
          : 'from-maroon-400/20 to-maroon-600/20'
      } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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
    </motion.a>
  );
};

export default AnimatedButton; 