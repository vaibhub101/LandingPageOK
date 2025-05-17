import React from 'react';
import { Users } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: "Dr. Anand Kumar",
      role: "Ayurvedic Physician",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "With 20+ years of experience in traditional Ayurveda, Dr. Anand specializes in personalized wellness plans based on individual constitutions."
    },
    {
      name: "Meera Sharma",
      role: "Yoga & Meditation Guide",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A certified Yoga Acharya with deep knowledge of various meditation techniques and therapeutic yoga applications."
    },
    {
      name: "Rajiv Menon",
      role: "Naturopathy Expert",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Specializing in natural healing methods using the five elements, Rajiv brings harmony to body, mind and spirit."
    },
    {
      name: "Lakshmi Devi",
      role: "Spiritual Counselor",
      image: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Drawing from ancient wisdom traditions, Lakshmi guides guests through transformative spiritual practices and inner healing."
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6">
            <Users size={28} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">Our Healing Guides</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Meet the experienced practitioners guiding your transformation journey
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-beige-50 to-transparent h-1/3"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl text-gold-600 mb-1">{trainer.name}</h3>
                <p className="text-gold-500 text-sm mb-3">{trainer.role}</p>
                <p className="text-maroon-700">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;