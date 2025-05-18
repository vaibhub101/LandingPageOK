import React from 'react';
import { motion } from 'framer-motion';

const Quotations = () => {
  const quotes = [
    {
      text: "When you find peace within yourself, you become the kind of person who can live at peace with others.",
      author: "Peace Pilgrim"
    },
    {
      text: "The wound is the place where the Light enters you.",
      author: "Rumi"
    },
    {
      text: "Healing requires from us to stop struggling, but to enjoy life more and endure it less.",
      author: "Darina Stoyanova"
    }
  ];

  const shimmerAnimation = {
    hidden: {
      background: "linear-gradient(45deg, rgba(234,179,8,0.2) 0%, rgba(234,179,8,0.1) 25%, rgba(234,179,8,0.2) 50%, rgba(234,179,8,0.1) 75%, rgba(234,179,8,0.2) 100%)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0% 0%"
    },
    visible: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-beige-50 to-beige-100 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Golden Border with Shimmer Effect */}
                <motion.div 
                  className="absolute -inset-[2px] rounded-xl z-0"
                  initial="hidden"
                  animate="visible"
                  variants={shimmerAnimation}
                />
                {/* Inner Shadow Overlay */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_8px_rgba(234,179,8,0.3)] z-10" />
                
                <div className="relative z-20 bg-beige-100/80 backdrop-blur-sm rounded-xl p-6 
                  shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                  transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="absolute -top-6 -left-6 text-gold-600/20 text-[120px] font-serif">
                    "
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-lg text-maroon-700 italic mb-4 font-heading">
                      "{quote.text}"
                    </p>
                    <p className="text-gold-600 text-right font-accent">— {quote.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotations;