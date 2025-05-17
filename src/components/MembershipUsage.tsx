import React from 'react';
import { Info, Gift, Calendar, Check } from 'lucide-react';

const MembershipUsage = () => {
  const usageCategories = [
    {
      icon: <Info size={24} />,
      title: "What's Included (Per Person, Per Day)",
      items: [
        "Accommodation in selected room category",
        "Three nourishing sattvic meals",
        "Daily wellness activities (yoga, meditation)",
        "Access to all wellness facilities",
        "One daily therapy (as per availability)",
        "Participation in group workshops & events"
      ]
    },
    {
      icon: <Calendar size={24} />,
      title: "Stay & Access",
      items: [
        "Flexible usage throughout membership duration",
        "Minimum 2-night stay per visit",
        "Maximum 10-night consecutive stay",
        "Subject to availability (booking recommended)",
        "15% discounted rates for extended stays",
        "Blackout dates may apply for special events"
      ]
    },
    {
      icon: <Gift size={24} />,
      title: "Gifting & Sharing",
      items: [
        "Membership can be shared with immediate family",
        "Can be gifted to friends (with prior notice)",
        "Corporate gift options available",
        "Transfer up to 25% of nights to others",
        "Additional guests at standard rates with 10% discount",
        "Special occasion packages available"
      ]
    },
    {
      icon: <Check size={24} />,
      title: "How to Book",
      items: [
        "Reserve through member portal or dedicated line",
        "Minimum 7 days advance booking",
        "Priority reservation for members",
        "48-hour cancellation policy",
        "Complimentary date changes (subject to availability)",
        "Personal wellness consultation upon arrival"
      ]
    }
  ];

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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {usageCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-beige-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mr-4">
                  <span className="text-white">{category.icon}</span>
                </div>
                <h3 className="font-heading text-xl text-gold-600">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">•</span>
                    <span className="text-maroon-700">{item}</span>
                  </li>
                ))}
              </ul>
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
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-lg hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply for Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipUsage;