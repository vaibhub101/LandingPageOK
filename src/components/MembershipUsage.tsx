import React, { useState } from 'react';
import { Info, Gift, Calendar, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import AnimatedEnquiryButton from './AnimatedEnquiryButton';

interface UsageItem {
  title: string;
  description: string;
}

interface UsageCategory {
  icon: JSX.Element;
  title: string;
  items: UsageItem[];
}

const MembershipUsage = () => {
  const { openEnquiryModal } = useEnquiryModal();

  const usageCategories: UsageCategory[] = [
    {
      icon: <Check size={24} />,
      title: "What's Included\n(Per Person, Per Day)",
      items: [
        { title: '3 sattvic meals and wellness beverage', description: 'Placeholder description' },
        { title: '2 Ayurvedic therapies curated by our inhouse doctor', description: 'Placeholder description' },
        { title: 'Yoga & meditation sessions', description: 'Placeholder description' },
        { title: 'Nature trails, stargazing, and spiritual circles', description: 'Placeholder description' },
        { title: 'One pick & drop (Dehradun airport/ Railway station.) per visit', description: 'Placeholder description' },
        { title: 'Laundry for resort-provided garments', description: 'Placeholder description' },
        { title: 'Doctor-prescribed additional therapies available at special discounted rates.', description: 'Placeholder description' },
        { title: 'Enjoy special rates on our modern and signature therapies.', description: 'Placeholder description' },
      ]
    },
    {
      icon: <Calendar size={24} />,
      title: "Stay and Access",
      items: [
        { title: 'Nights are valid throughout your membership duration.', description: 'Placeholder description' },
        { title: 'You may use your nights in parts or all at once, as per your convenience.', description: 'Placeholder description' },
        { title: 'Each visit allows 2 adults to access the retreat and its core services.', description: 'Placeholder description' },
      ]
    },
    {
      icon: <Gift size={24} />,
      title: "Gifting and Sharing",
      items: [
        { title: 'You may gift or share your nights with friends, family, or other', description: 'Placeholder description' },
        { title: 'Gifting includes all core inclusions (meals, therapies, yoga, meditation, nature experiences).', description: 'Placeholder description' },
        { title: 'A confirmation email must be sent from the registered email ID, along with a valid government ID of the guest.', description: 'Placeholder description' },
      ]
    },
    {
      icon: <Info size={24} />,
      title: "How to Book",
      items: [
        { title: 'Book your stay in advance through our Reservation Team', description: 'Placeholder description' },
        { title: 'Subject to availability; early bookings recommended for peak seasons.', description: 'Placeholder description' },
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<UsageCategory | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-maroon-500/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">How to Use Your Founder Membership</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Make the most of your sacred investment with these simple guidelines
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto auto-rows-fr">
          {usageCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-beige-100 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mr-4">
                  <span className="text-white">{category.icon}</span>
                </div>
                <h3 className="font-heading text-xl text-gold-600 flex-grow">{category.title}</h3>
              </div>

              <ul className="space-y-3 flex-grow overflow-y-auto pr-2">
                {category.items.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">•</span>
                    <span className="text-maroon-700">{item.title}</span>
                  </li>
                ))}
              </ul>
              {category.items.length > 2 && (
                <button
                  className="mt-4 text-gold-600 hover:underline self-start"
                  onClick={() => setSelectedCategory(category)}
                >
                  Know More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-beige-100/80 border border-gold-200 rounded-lg p-6 shadow-lg">
            <p className="text-maroon-700 italic">
              "Your membership is more than an investment in wellness—it's a commitment to your transformation and a partnership in our sacred mission to create a haven for holistic healing."
            </p>
          </div>

          <div className="mt-8">
            <AnimatedEnquiryButton>
              Enquire Now
            </AnimatedEnquiryButton>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedCategory(null)}
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-heading text-gold-600 mb-4">{selectedCategory.title}</h3>
              <ul className="space-y-2">
                {selectedCategory.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-maroon-600">
                     <span className="text-gold-500 mr-2">•</span>
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MembershipUsage;