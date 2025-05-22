import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

const SpecialPrograms = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'breathwork',
      title: 'Breathwork & Somatic Healing',
      focus: 'Emotional release, trauma healing, body awareness',
      programs: [
        'Holotropic Breathwork',
        'Pumpjack Breathing Technique (PBT)',
        'Frog Breathing Technique (FBT)',
        'Somatic Experience',
        'Bowen Therapy',
        'Quick Heal Technique (QHT)',
        'Stress Buster (SB)',
        'Alexander Technique'
      ]
    },
    {
      id: 'meditation',
      title: 'Meditation, Energy & Sound Healing',
      focus: 'Relaxation, energy flow, intuitive connection',
      programs: [
        'OM Dhyanam',
        'Full Moon Gong Bath',
        'Reiki Healing',
        'Osho Neo Reiki',
        'Pranic Healing',
        'BCST (Biodynamic Craniosacral Therapy)',
        'Tibetan Pulsing',
        'Access Conscious Bar',
        'Firework (fear release)'
      ]
    },
    {
      id: 'spiritual',
      title: 'Spiritual & Metaphysical Practices',
      focus: 'Soul work, higher guidance, life understanding',
      programs: [
        'Akashic Record',
        'Angel Healing',
        'Shamanic Healing',
        'Physic Surgery',
        'Theta Healing',
        'Law of Attraction',
        'Silva Mind Technique',
        'Ho\'oponopono',
        'Astrology',
        'Numerology',
        'Tarot'
      ]
    },
    {
      id: 'emotional',
      title: 'Emotional & Psychological Healing',
      focus: 'Self-awareness, inner growth, trauma resolution',
      programs: [
        'Shadow Work',
        'Past Life Regression (PLR)',
        'NLP (Neuro-Linguistic Programming)',
        'EFT (Emotionally Focused Therapy)',
        'Heal Your Life',
        'Bach Flower Remedy',
        'Hypnotherapy'
      ]
    },
    {
      id: 'movement',
      title: 'Movement & Physical Wellness',
      focus: 'Body balance, physical health, energy flow',
      programs: [
        'Tai Chi',
        'SKY Healing',
        '7 COBH Technique (7 COBH\'T)',
        'Alexander Technique'
      ]
    },
    {
      id: 'conscious',
      title: 'Conscious Living & Personal Growth',
      focus: 'Life transformation, parenting, self-empowerment',
      programs: [
        'Parenting',
        'Law of Attraction',
        'Heal Your Life',
        'Sufi Practices',
        'Silva Mind Technique'
      ]
    }
  ];

  return (
    <section id="special-programs" className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.golden.100/0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-beige-50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-gold-600">
            Soulful Transformation Programme
          </h2>
          <p className="text-xl text-maroon-700 mb-8">
            Rare healing journeys that touch your heart, awaken your spirit, and stay with you forever
          </p>
          <div className="w-32 h-1 bg-gold-600 mx-auto mb-8"></div>
        </div>
                          
        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-beige-50/80 backdrop-blur-sm rounded-lg border border-maroon-100/20 hover:border-maroon-200/40 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div>
                  <h3 className="font-heading text-lg text-golden-600 mb-1">{category.title}</h3>
                  <p className="text-sm text-maroon-700">{category.focus}</p>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-golden-600 transition-transform duration-300 ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedCategory === category.id && (
                <div className="px-6 pb-4 border-t border-maroon-100/20">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                    {category.programs.map((program, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-maroon-700">{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white rounded-full text-lg hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-lg"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;