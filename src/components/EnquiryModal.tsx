import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-beige-50/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-sm relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border-2 border-gold-400 my-6"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className="flex justify-center mb-4"
              animate={{ 
                y: [-2, 2, -2],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                className="w-14 h-14 text-gold-600 drop-shadow-lg transition-all"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  d="M7.5 9.75C7.5 9.33579 7.83579 9 8.25 9H15.75C16.1642 9 16.5 9.33579 16.5 9.75V14.25C16.5 14.6642 16.1642 15 15.75 15H8.25C7.83579 15 7.5 14.6642 7.5 14.25V9.75Z"
                  fill="currentColor"
                />
                <motion.path
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 2.7
                  }}
                  d="M8 12L10.5 13.5L12 12L13.5 13.5L16 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-heading text-gold-600 text-center mb-6">Enquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-maroon-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-xl bg-white/80 border border-gold-200 focus:ring-1 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-maroon-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-xl bg-white/80 border border-gold-200 focus:ring-1 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-maroon-700 mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 rounded-xl bg-white/80 border border-gold-200 focus:ring-1 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-maroon-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={2}
                  className="w-full px-4 py-2 rounded-xl bg-white/80 border border-gold-200 focus:ring-1 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-gold-600 text-white rounded-xl font-medium transition-all hover:bg-gold-700 mt-3"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal; 