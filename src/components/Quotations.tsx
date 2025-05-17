import React from 'react';

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

  return (
    <section className="py-16 bg-gradient-to-b from-primary-900 to-primary-950 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-primary-800/20 backdrop-blur-sm border border-primary-700/20 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute -top-6 -left-6 text-gold-700/10 text-[120px] font-serif">
                  "
                </div>
                
                <div className="relative z-10">
                  <p className="text-lg text-earth-100 italic mb-4 font-heading">
                    "{quote.text}"
                  </p>
                  <p className="text-gold-400 text-right">— {quote.author}</p>
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