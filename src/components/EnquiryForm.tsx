import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 2500);
  };

  return (
    <section id="enquiry" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-beige-50 to-beige-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-beige-100/90 rounded-2xl shadow-xl p-8 md:p-12 border border-gold-200">
          <motion.div 
            className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <img src="/bgremflower.png" alt="Decorative Flower" className="w-full h-full object-contain" />
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-gold-600 text-center">Enquiry Form</h2>
          {submitted ? (
            <div className="text-center">
              <p className="text-xl text-maroon-700 mb-4">Thank you for your enquiry! We will get back to you soon.</p>
              <p className="text-gold-600">Redirecting to home...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-maroon-700 font-heading mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-beige-50 text-maroon-900 focus:ring-2 focus:ring-gold-400 outline-none transition" />
              </div>
              <div>
                <label className="block text-maroon-700 font-heading mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-beige-50 text-maroon-900 focus:ring-2 focus:ring-gold-400 outline-none transition" />
              </div>
              <div>
                <label className="block text-maroon-700 font-heading mb-2">Phone</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-beige-50 text-maroon-900 focus:ring-2 focus:ring-gold-400 outline-none transition" />
              </div>
              <div>
                <label className="block text-maroon-700 font-heading mb-2">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gold-200 bg-beige-50 text-maroon-900 focus:ring-2 focus:ring-gold-400 outline-none transition resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-700 text-white font-heading text-lg shadow-lg hover:from-gold-700 hover:to-gold-800 transition-all duration-300">Submit</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm; 