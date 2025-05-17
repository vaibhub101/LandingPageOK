import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const WellnessExperiences = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    {
      id: 'naturopathy',
      title: 'Naturopathy',
      description: 'Harnessing the 5 elements of nature for healing',
      items: ['Therapy (Abdomen & spinal packs)', 'Hydrotherapy', 'Mud Therapy', 'Fasting']
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      description: 'Ancient wisdom for holistic health and balance',
      items: ['Panchakarma', 'Abhyangam', 'Shirodhara', 'Nasyam', 'Pizhichil', 'Njavarakizhi']
    },
    {
      id: 'yoga',
      title: 'Yoga',
      description: 'Unite body, mind, and spirit through sacred movement',
      items: ['Hatha Yoga', 'Kundalini Yoga', 'Vinyasa Flow', 'Yoga Nidra', 'Partner Yoga']
    },
    {
      id: 'emotional',
      title: 'Emotional & Mental Wellness',
      description: 'Tools for inner harmony and mental clarity',
      items: ['Counseling', 'Art Therapy', 'Music Therapy', 'Inner Child Healing', 'Family Constellation']
    },
    {
      id: 'meditation',
      title: 'Meditation',
      description: 'Cultivate presence and inner stillness',
      items: ['Guided Meditation', 'Mindfulness', 'Transcendental Meditation', 'Chakra Meditation', 'Walking Meditation']
    },
    {
      id: 'alternative',
      title: 'Alternative Therapies',
      description: 'Innovative approaches to wellness',
      items: ['Acupuncture', 'Acupressure', 'Reiki', 'Pranic Healing', 'Crystal Healing', 'Sound Healing']
    },
    {
      id: 'modern',
      title: 'Modern Therapies',
      description: 'Contemporary techniques for healing',
      items: ['Aqua Therapy', 'Infrared Sauna', 'Hypnotherapy', 'Cognitive Behavioral Therapy', 'NLP']
    },
    {
      id: 'spiritual',
      title: 'Spiritual Practices',
      description: 'Connect with the divine essence within',
      items: ['Havan', 'Puja', 'Guided Spiritual Journeys', 'Sacred Ceremonies', 'Energy Clearing']
    },
    {
      id: 'food',
      title: 'Therapeutic Food',
      description: 'Nourishment as medicine for body and soul',
      items: ['Sattvic Diet', 'Plant-Based Healing', 'Detox Nutrition', 'Personalized Meal Plans', 'Cooking Workshops']
    },
    {
      id: 'rituals',
      title: 'Daily Rituals',
      description: 'Sacred routines to anchor your transformation',
      items: ['Morning Silence', 'Gratitude Practices', 'Self-Reflection', 'Nature Connection', 'Evening Unwinding']
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(category => category.id === activeCategory);

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6">
            <Sparkles size={28} className="text-beige-50" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gold-600">WELLNESS EXPERIENCES</h2>
          <p className="text-lg text-maroon-700 mb-6">
            Discover our comprehensive range of transformative practices and therapies
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-gold-600 to-gold-700 text-white'
                : 'bg-beige-100/80 text-maroon-700 hover:bg-beige-200/80'
            }`}
          >
            All Experiences
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gold-600 to-gold-700 text-white'
                  : 'bg-beige-100/80 text-maroon-700 hover:bg-beige-200/80'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map(category => (
            <div key={category.id} className="bg-beige-100/80 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-gold-200">
              <div className="p-6">
                <h3 className="font-heading text-xl text-gold-600 mb-2">{category.title}</h3>
                <p className="text-maroon-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-500 mr-2">•</span>
                      <span className="text-maroon-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessExperiences;