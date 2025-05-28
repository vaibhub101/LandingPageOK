import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

const FinalMessage = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-maroon-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full">
              <Heart size={28} className="text-white" />
            </div>
            <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full">
              <Sparkles size={28} className="text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading text-gold-600 mb-6">
            Begin Your Transformation Journey
          </h2>
          <p className="text-xl text-maroon-700 mb-12">
            Join our community of wellness seekers and embark on a path to holistic well-being.
            Let us guide you towards a life of balance, vitality, and inner peace.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AnimatedEnquiryButton>
              Join Our Community
            </AnimatedEnquiryButton>
            <AnimatedEnquiryButton variant="secondary">
              Contact Us
            </AnimatedEnquiryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;