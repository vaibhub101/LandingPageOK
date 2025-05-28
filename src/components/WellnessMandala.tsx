import React from 'react';
import { motion } from 'framer-motion';

const WellnessMandala = () => {
  const wellnessExperiences = [
    {
      id: 'naturopathy',
      title: 'Naturopathy',
      description: 'Harnessing the 5 elements of nature for healing',
      items: ['Therapy (Abdomen & spinal packs)', 'Hydrotherapy', 'Mud Therapy', 'Fasting'],
      image: "/images/wellness/naturopathyOM.jpg"
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      description: 'Ancient wisdom for holistic health and balance',
      items: ['Panchakarma', 'Abhyangam', 'Shirodhara', 'Nasyam', 'Pizhichil', 'Njavarakizhi'],
      image: "/images/wellness/AyurOM.jpg"
    },
    {
      id: 'yoga',
      title: 'Yoga',
      description: 'Unite body, mind, and spirit through sacred movement',
      items: ['Hatha Yoga', 'Kundalini Yoga', 'Vinyasa Flow', 'Yoga Nidra', 'Partner Yoga'],
      image: "/images/wellness/yogaOM.jpg"
    },
    {
      id: 'emotional',
      title: 'Emotional & Mental Wellness',
      description: 'Tools for inner harmony and mental clarity',
      items: ['Counseling', 'Art Therapy', 'Music Therapy', 'Inner Child Healing', 'Family Constellation'],
      image: "/images/wellness/mentalHealth.jpg"
    },
    {
      id: 'meditation',
      title: 'Meditation',
      description: 'Cultivate presence and inner stillness',
      items: ['Guided Meditation', 'Mindfulness', 'Transcendental Meditation', 'Chakra Meditation', 'Walking Meditation'],
      image: "/images/wellness/MedOM.jpg"
    },
    {
      id: 'alternative',
      title: 'Alternative Therapies',
      description: 'Innovative approaches to wellness',
      items: ['Acupuncture', 'Acupressure', 'Reiki', 'Pranic Healing', 'Crystal Healing', 'Sound Healing'],
      image: "/images/wellness/alternOM.jpg"
    },
    {
      id: 'modern',
      title: 'Modern Therapies',
      description: 'Contemporary techniques for healing',
      items: ['Aqua Therapy', 'Infrared Sauna', 'Hypnotherapy', 'Cognitive Behavioral Therapy', 'NLP'],
      image: "/images/wellness/modernOM.jpg"
    },
    {
      id: 'spiritual',
      title: 'Spiritual Practices and Daily Rituals',
      description: 'Connect with the divine essence within',
      items: ['Havan', 'Puja', 'Guided Spiritual Journeys', 'Sacred Ceremonies', 'Energy Clearing'],
      image: "/images/wellness/spiritualom.jpg"
    },
    {
      id: 'food',
      title: 'Therapeutic Food',
      description: 'Nourishment as medicine for body and soul',
      items: ['Sattvic Diet', 'Plant-Based Healing', 'Detox Nutrition', 'Personalized Meal Plans', 'Cooking Workshops'],
      image: "/images/wellness/theraputic.jpg"
    },
    {
      id: 'rituals',
      title: 'Environmental healing',
      description: 'Sacred routines to anchor your transformation',
      items: ['Deepens connection with the Earth', 'Boosts immunity ', 'Promotes restful sleep', 'Reduces stress C anxiety', 'Awakens spiritual insight'],
      image: "/images/wellness/EnvOM.jpg"
    },
    {
      id: 'wisdom',
      title: 'Wisdom and Miracle Programme',
      description: 'Inner Transformation Workshops',
      items: ['Conscious Manifestation Sessions', 'Daily Affirmation Rituals', 'Vision Alignment Ceremonies', 'Emotional Empowerment Circles', 'Spiritual Intention Mapping', 'Quantum Focus Techniques and many more'],
      image: "/images/wellness/consc.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img
              src="/bgremflower.png"
              alt="Decorative Flower"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-gold-600">
            Experience the Mandala of Wellness
          </h2>
          <p className="text-xl text-maroon-700 mb-8">
            Discover our transformative journey through various dimensions of wellness
          </p>
          <div className="w-32 h-1 mx-auto bg-gold-600"></div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading text-gold-600 mb-4">
            • Wellness Experiences that Awaken the Soul •
          </h3>
        </div>

        {/* Scrollable Cards Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {wellnessExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-beige-100/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <div className="h-64 md:h-full relative overflow-hidden">
                        <img 
                          src={experience.image} 
                          alt={experience.title}
                          className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-br from-maroon-900/60 to-transparent"></div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl font-heading text-gold-600 mb-3">
                        {experience.title}
                      </h3>
                      <p className="text-maroon-700 mb-4">
                        {experience.description}
                      </p>
                      <ul className="space-y-2">
                        {experience.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-maroon-600">
                            <span className="text-gold-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessMandala;