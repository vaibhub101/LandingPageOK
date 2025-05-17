import React from 'react';
import { Crown } from 'lucide-react';

const RoyalFounder = () => {
  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-maroon-500/10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Crown size={32} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600 uppercase">Royal Founder Membership Programme</h2>
          <p className="text-xl text-maroon-700">Join the Tapasvi Mandala: Become a Royal Founder Member</p>
          <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <p className="text-lg leading-relaxed mb-6 text-maroon-700">
            A Legacy Beyond Wellness	
Tapasvi Mandala is the sacred circle of Royal Founder Members—visionary souls who feel called to walk the higher path of
conscious living, collective healing, and timeless wisdom.
By joining this intimate fellowship, you become a co-creator in the spiritual legacy of Om Kalyanam Santhigiri—a sanctuary
where ancient healing, emotional awakening, and soul transformation come together in harmony.
This is not just a membership.	
It is a heartfelt offering to the world—and a divine return to your true self.	
            </p>
            <p className="text-lg leading-relaxed mb-6 text-maroon-700">
            This is not just a membership. It is a heartfelt offering to the world—and a divine return to your true self.	
            </p>
            
            <div className="bg-beige-100/80 border border-gold-200 rounded-lg p-6 mt-8 shadow-lg">
              <h3 className="text-xl font-heading text-gold-600 mb-4">YOUR ROYAL PRIVILEGES:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-lg">✦</span>
                  <span className="text-maroon-700">Priority Booking for all retreats and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-lg">✦</span>
                  <span className="text-maroon-700">Exclusive Founder Discounts on all services and products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-lg">✦</span>
                  <span className="text-maroon-700">Annual Personalized Wellness Consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-lg">✦</span>
                  <span className="text-maroon-700">Tailored Touches that honor your founding role in our community</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a 
                href="#membership-tiers"
                className="inline-block px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-medium rounded-lg hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Become a Founder Member
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold-500/30 rounded-lg rotate-3"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://cdn.pixabay.com/photo/2016/08/11/02/23/massage-therapy-1584711_1280.jpg" 
                alt="OM KALYANAM SANTHIGIRI community" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalFounder;