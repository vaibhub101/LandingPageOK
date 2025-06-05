import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email to info@tapasvimandala.com
      const mailtoLink = `mailto:info@tapasvimandala.com?subject=New Enquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-maroon-700 hover:text-gold-600 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-white/80 border border-gold-200 focus:ring-1 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2 bg-gold-600 text-white rounded-xl font-medium transition-all hover:bg-gold-700 mt-3 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Submit'}
              </motion.button>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal; 