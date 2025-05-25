import React from 'react';
import { Users } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: "Dr Nishi Bhatt",
      role: "Ayurvedic Doctor",
      image: "/trainers/nishi.jpg",
      description: "Dr Nishi Bhatt is one of the leading doctors in the emerging field of holistic & neurological treatments involving Ayurveda, Naturopathy and various healing modalities."
    },
    {
      name: "Vinod Phutela",
      role: "NLP Coach",
      image: "/trainers/vinod.jpg",
      description: "Vinod Phutela is a Leading NLP COACH of India, Author, mentalist, and a dedicated parent."
    },
    {
      name: "Anjali Mathur",
      role: "Gong Master",
      image: "/trainers/anjali.jpg",
      description: "Anjali Mathur is a globally certified Gong Master, Sound and Yoga Therapist, and the worlds only Conch Therapist, blending ancient Indian wisdom with modern healing sciences."
    },
    {
      name: "PS Rathore",
      role: "Business Development Expert",
      image: "/trainers/rathoreOM.jpg",
      description: "PS Rathore is a visionary in personal and business development, trained in Practical NLP and Firewalking under Tony Robbins in the USA. He brings strategic insights from global experts like Michael Porter and Tom Peters to his transformative work."
    },
    {
      name: "Sonika Vickraman",
      role: "Martial Arts Expert",
      image: "/trainers/sonika.jpg",
      description: "Sonika vickraman is a martial arts expert with 30 years of experience in Karate and Tai Chi, using them as tools for healing through movement, breath, and energy flow. She integrates mindfulness, self-defense, and energy healing to address both mental and physical health challenges."
    },
    {
      name: "Acharya Anupam Jolly",
      role: "Astrologer",
      image: "/trainers/anupam.jpg",
      description: "Acharya Anupam Jolly is CoFounder - International School of Astrology & Divine Sciences and Chief Editor–India Asking. He is a much acclaimed astrologer practicing Vedic and K P Astrology."
    },
    {
      name: "Dr. Himani Jolly",
      role: "Horoscope Teller",
      image: "/trainers/drHimani.jpg",
      description: "Dr. Himani Jolly is Global Consultant - Tarot Reader, Horoscope Teller, Spiritual Reader, Fortune Teller having 15 years of successful reading experience"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6">
            <Users size={28} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">Our Healing Guides</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Meet the experienced practitioners guiding your transformation journey
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {trainers.slice(0, 4).map((trainer, index) => (
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

          {/* Second row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trainers.slice(4).map((trainer, index) => (
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
      </div>
    </section>
  );
};

export default Trainers;