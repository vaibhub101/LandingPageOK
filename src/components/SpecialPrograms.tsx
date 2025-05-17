import React from 'react';
import { Sparkles } from 'lucide-react';

const SpecialPrograms = () => {
  const programs = [
    {
      id: 'pranic',
      title: 'PRANIC HEALING',
      description: 'Supports physical healing, promotes emotional well-being, and enhances mental clarity'
    },
    {
      id: 'hypno',
      title: 'HYPNO THERAPY',
      description: 'Utilizes hypnosis to address various psychological issues'
    },
    {
      id: 'taichi',
      title: 'TAI CHI and Qi-Gong',
      description: 'Improves balance, flexibility, and mental well-being'
    },
    {
      id: 'plr',
      title: 'PLR (Past Life Regression)',
      description: 'Aids in understanding personal behaviors and resolving past traumas'
    },
    {
      id: 'loa',
      title: 'LAW OF ATTRACTION',
      description: 'Encourages Positive thinking, Happiness, Health, wealth and Abundance'
    },
    {
      id: 'nlp',
      title: 'NLP (Neuro-Linguistic Programming)',
      description: 'Enhances communication skills and personal development'
    },
    {
      id: 'parenting',
      title: 'PARENTING',
      description: 'Strategies and practices to support effective child-rearing'
    },
    {
      id: 'eft',
      title: 'EFT (Emotional Freedom Technique)',
      description: 'Reduces emotional distress and promotes healing'
    },
    {
      id: 'bcst',
      title: 'BCST (Biodynamic Craniosacral Therapy)',
      description: 'Supports nervous system regulation and promotes relaxation'
    },
    {
      id: 'access-bars',
      title: 'ACCESS CONSCIOUS BAR',
      description: 'Aims to release mental blocks and promote relaxation'
    },
    {
      id: 'bowen',
      title: 'BOWEN THERAPY',
      description: 'Relieves pain, improves mobility, and supports musculoskeletal health'
    },
    {
      id: 'theta',
      title: 'THETA HEALING',
      description: 'Combines meditation and spiritual philosophy to promote healing'
    },
    {
      id: 'akashic',
      title: 'AKASHIC RECORD',
      description: 'Accesses soul records to understand life patterns and challenges'
    },
    {
      id: 'bach',
      title: 'BACH FLOWER REMEDY',
      description: 'Addresses emotional imbalances using flower essences'
    },
    {
      id: 'somatic',
      title: 'SOMATIC EXPERIENCE',
      description: 'Addresses trauma by focusing on bodily sensations to release stress'
    },
    {
      id: 'tibetan',
      title: 'TIBETAN PULSING',
      description: 'Releases emotional blockage, Restores energy flow, Supports healing and inner peace'
    },
    {
      id: 'shamanic',
      title: 'SHAMANIC HEALING',
      description: 'Facilitates spiritual healing and deeper transformation'
    },
    {
      id: 'holotropic',
      title: 'HOLOTROPHIC BREATHWORK',
      description: 'Facilitates emotional release, deepens self-awareness, and aids in trauma healing'
    },
    {
      id: 'qht',
      title: 'QUICK HEAL TECHNIQUE (QHT)',
      description: 'A fast-acting healing method that uses breath, intention, and energy work to support rapid physical and emotional recovery'
    },
    {
      id: 'sb',
      title: 'STRESS BUSTER (SB)',
      description: 'Techniques designed to reduce stress and promote relaxation'
    },
    {
      id: 'pbt',
      title: 'PUMPJACK BREATHING TECHNIQUE (PBT)',
      description: 'Deepens self-awareness, and aids in trauma healing, spiritual connection and insight'
    },
    {
      id: 'fbt',
      title: 'FROG BREATHING TECHNIQUE (FBT)',
      description: 'Healing Through Consciousness, Self-Awareness & Insight'
    },
    {
      id: '7cobh',
      title: '7 COBH TECHNIQUE',
      description: 'Experience deep transformation through chakra opening, balancing and healing to restore harmony in your body, mind, and spirit'
    },
    {
      id: 'om-dhyanam',
      title: 'OM DHYANAM',
      description: 'Reduces stress and anxiety, improves concentration, and promotes relaxation'
    },
    {
      id: 'signature',
      title: 'OM KALYANAM SIGNATURE PROGRAMME',
      description: 'A rare collection of soul-nourishing journeys—seamlessly blending ancient healing sciences with modern ease. Thoughtfully curated for all age groups, each programme is a gateway to inner balance, emotional freedom, and spiritual elevation'
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
          <h2 className="font-heading text-4xl md:text-5xl mb-4 heading-gradient">
            Soulful Transformation Programme
          </h2>
          <p className="text-xl text-maroon-700 font-accent mb-8">
            Rare healing journeys that touch your heart, awaken your spirit, and stay with you forever
          </p>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-maroon-200 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="group relative bg-beige-50/80 backdrop-blur-sm rounded-lg p-6 border border-maroon-100/20 hover:border-maroon-200/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-golden-300/30 to-transparent"></div>
              <h3 className="font-heading text-lg text-golden-600 mb-2">{program.title}</h3>
              <p className="text-maroon-700 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-golden-500 to-golden-600 text-white font-medium rounded-full hover:from-golden-600 hover:to-golden-700 transition-all duration-300 shadow-lg shadow-golden-600/20 hover:shadow-golden-600/30"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;