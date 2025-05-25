import React, { useState, useEffect } from 'react';
import { MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  
  const testimonials = [
    {
      quote: "Om Kalyanam Santhigiri Dehradun has been conceptualized keeping in mind the traditional and modern ways of lifestyle. Fortunate to see this amazing place grow from a seed upwards. Wish you all the best for this gift to the future generations.",
      author: "General Vijay Kumar Singh PVSM, AVSM, YSM, ADC",
      title: "Governor of Mizoram",
      image: "https://thechanakyadialogues.com/images/general-vijay-kumar-singh.png"
    },
    {
      quote: "This is more than a membership—its a sacred commitment to live with presence, care, and clarity. It becomes a way of being—rooted, intentional, and quietly transformative.",
      author: "Ashwath Bhat",
      title: "Actor, Theatre artist",
      image: "https://th.bing.com/th/id/OIP.b9MuuX1CegJCKwvre9T7IAHaFA?rs=1&pid=ImgDetMain"
    }
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6">
            <MessageSquareQuote size={28} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">Transformational Journeys</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Hear from those who have experienced the healing power of Om Kalyanam Santhigiri
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                active === index ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8 md:p-10 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gold-200 shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-gold-500 mb-2">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11H6.21C6.07 10.37 6 9.7 6 9C6 5.69 8.69 3 12 3V5C9.79 5 8 6.79 8 9H10V11Z" fill="currentColor" />
                        <path d="M18 11H14.21C14.07 10.37 14 9.7 14 9C14 5.69 16.69 3 20 3V5C17.79 5 16 6.79 16 9H18V11Z" fill="currentColor" />
                      </svg>
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl italic font-heading text-maroon-700 mb-6">
                      {testimonial.quote}
                    </blockquote>
                    
                    <div>
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent hover:from-gold-700 hover:to-gold-800 transition-all duration-300">
                        {testimonial.author}
                      </h4>
                      <p className="text-maroon-600 font-medium mt-2">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 rounded-full focus:outline-none transition-all duration-300 ${
                  active === index
                    ? 'bg-gold-600 w-6'
                    : 'bg-maroon-200 hover:bg-maroon-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;