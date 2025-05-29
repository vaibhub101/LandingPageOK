import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  isVisible: boolean;
  onAnimationComplete: () => void;
}

const WelcomeScreen = ({ isVisible, onAnimationComplete }: WelcomeScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.4,
            exit: { delay: 3.0, duration: 0.8 }
          }}
          onAnimationComplete={onAnimationComplete}
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2.2,
              times: [0, 0.6, 1],
              ease: "easeInOut"
            }}
            className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          >
            <motion.img
              src="/bgremflower.png"
              alt="Welcome to Om Kalyanam"
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen; 