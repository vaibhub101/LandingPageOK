import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface WellnessItem {
  title: string;
  description: string;
}

interface WellnessExperience {
  id: string;
  title: string;
  description: string;
  items: WellnessItem[];
  image: string;
}

const WellnessMandala = () => {
  const [selectedExperience, setSelectedExperience] = useState<WellnessExperience | null>(null);

  const wellnessExperiences: WellnessExperience[] = [
    {
      id: 'naturopathy',
      title: 'Naturopathy',
      description: 'Harnessing the 6 elements of nature to heal the body naturally',
      items: [
        { title: 'Therapy (Abdomen & spinal packs)', description: 'Details about Therapy (Abdomen & spinal packs)' },
        { title: 'Hydrotherapy (hip bath, spinal bath, jet bath)', description: 'Details about Hydrotherapy' },
        { title: 'Steam and sauna bath', description: 'Details about Steam and sauna bath' },
        { title: 'Cold compress and wet sheet pack', description: 'Details about Cold compress and wet sheet pack' },
        { title: 'Foot and hand detox socks', description: 'Details about Foot and hand detox socks' },
        { title: 'One-fruit diet and fasting schedule for each week', description: 'Details about One-fruit diet and fasting' },
        { title: 'and many more', description: 'Explore additional Naturopathy options.' }
      ],
      image: "/images/wellness/naturopathyOM.jpg"
    },
    {
      id: 'emotional',
      title: 'Emotional & Mental Wellness',
      description: 'For inner clarity, resilience and emotional freedom',
      items: [
        { title: 'Daily guided journaling sessions (emotional, gratitude, vision)', description: 'Details about Daily guided journaling sessions' },
        { title: 'Group NLP sessions for reprogramming throughs', description: 'Details about Group NLP sessions' },
        { title: 'Sound healing therapy with Himalayan bowls', description: 'Details about Sound healing therapy' },
        { title: 'Breathwork for emotional release', description: 'Details about Breathwork for emotional release' },
        { title: 'Aum Meditation', description: 'Details about Aum Meditation' },
        { title: 'and many more', description: 'Explore additional Emotional & Mental Wellness options.' }
      ],
      image: "/images/wellness/mentalHealth.jpg"
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      description: 'Ancient science of life in its purest, most effective form',
      items: [
        { title: 'Daily abhyanga (herbal oil massage)', description: 'Details about Daily abhyanga' },
        { title: 'Shirodhara (oil pouring on forehead)', description: 'Details about Shirodhara' },
        { title: 'Nasya (nasal cleaning & immunity boost)', description: 'Details about Nasya' },
        { title: 'Basti (weekly detox enema therapy)', description: 'Details about Basti' },
        { title: 'Udvartana (powder massage for detox and weight loss)', description: 'Details about Udvartana' },
        { title: 'Kizhi and Pizhichil therapies (pain, stiffness and rejuvenation)', description: 'Details about Kizhi and Pizhichil therapies' },
        { title: 'and many more', description: 'Explore additional Ayurveda options.' }
      ],
      image: "/images/wellness/AyurOM.jpg"
    },
    {
      id: 'yoga',
      title: 'Yoga',
      description: 'Movement and breathe as daily medicine',
      items: [
        { title: 'Morning asana flow (customized for flexibility, strength or healing)', description: 'Details about Morning asana flow' },
        { title: 'Ashtang Yoga', description: 'Details about Ashtang Yoga' },
        { title: 'Artistic Yoga', description: 'Details about Artistic Yoga' },
        { title: 'Hath Yoga', description: 'Details about Hath Yoga' },
        { title: 'Aqua Yoga', description: 'Details about Aqua Yoga' },
        { title: 'Sunset Yin Yoga or restorative yoga', description: 'Details about Sunset Yin Yoga or restorative yoga' },
        { title: 'Laughing yoga (Community Connection)', description: 'Details about Laughing yoga' },
        { title: 'and many more', description: 'Explore additional Yoga options.' }
      ],
      image: "/images/wellness/yogaOM.jpg"
    },
    {
      id: 'meditation',
      title: 'Meditation',
      description: 'The mindfull pause, Realigning with your core',
      items: [
        { title: 'Morning silence meditation in nature', description: 'Details about Morning silence meditation' },
        { title: 'Guided Meditation (deep rest meditation)', description: 'Details about Guided Meditation' },
        { title: 'Trataka (gazing at diya or symbol)', description: 'Details about Trataka' },
        { title: 'Antar mouna (inner silence technique)', description: 'Details about Antar mouna' },
        { title: 'Mantra meditation with Om Chanting', description: 'Details about Mantra meditation' },
        { title: 'Full Moon Sound Bath', description: 'Details about Full Moon Sound Bath' },
        { title: 'and many more', description: 'Explore additional Meditation options.' }
      ],
      image: "/images/wellness/MedOM.jpg"
    },
    {
      id: 'alternative',
      title: 'Alternative Therapies',
      description: 'Uniting modern science and ancient energy practices',
      items: [
        { title: 'Acupressure & Sujok therapy.', description: 'Details about Acupressure & Sujok therapy' },
        { title: 'Cupping therapy.', description: 'Details about Cupping therapy' },
        { title: 'Aromatherapy for sleep, energy and clarity', description: 'Details about Aromatherapy' },
        { title: 'Crystal and colour healing sessions.', description: 'Details about Crystal and colour healing sessions' },
        { title: 'Reflexology walks and hand / Foot pressure therapy', description: 'Details about Reflexology walks and hand / Foot pressure therapy' },
        { title: 'and many more', description: 'Explore additional Alternative Therapies options.' }
      ],
      image: "/images/wellness/alternOM.jpg"
    },
    {
      id: 'modern',
      title: 'Modern Therapies',
      description: 'Tech- powered healing that merges with nature',
      items: [
        { title: 'HBOT - Hyperbaric Oxygen Therapy (Cellular regeneration)', description: 'Details about HBOT' },
        { title: 'Infrared Sauna (detox & metabolism boost)', description: 'Details about Infrared Sauna' },
        { title: 'IV Nutrition Therapy (energy, immunity, glow)', description: 'Details about IV Nutrition Therapy' },
        { title: 'Cryotherapy (fatigue, inflammation relief)', description: 'Details about Cryotherapy' },
        { title: 'Ozone therapy', description: 'Details about Ozone therapy' },
        { title: 'and many more', description: 'Explore additional Modern Therapies options.' }
      ],
      image: "/images/wellness/modernOM.jpg"
    },
    {
      id: 'food',
      title: 'Therapeutic Food',
      description: 'Food as medicine, as vibration, as transformation',
      items: [
        { title: 'Satvik, Vegan, Gluten- free meal plans', description: 'Details about Satvik, Vegan, Gluten- free meal plans' },
        { title: 'Ayurveda-based food with seasonal herbs & spices', description: 'Details about Ayurveda-based food' },
        { title: 'Daily detox shots ( Wheatgrass, turmeric-ginger, giloy aloevera)', description: 'Details about Daily detox shots' },
        { title: 'Functional food combinations (gut-friendly, skin-glow, weight-loss)', description: 'Details about Functional food combinations' },
        { title: 'Personalized meal planning (Dosha balancing)', description: 'Details about Personalized meal planning' },
        { title: 'Functional food combinations (gut-friendly, skin-glow, weight-loss)', description: 'Details about Functional food combinations' },
        { title: 'Food meditation', description: 'Details about Food meditation' },
        { title: 'and many more', description: 'Explore additional Therapeutic Food options.' }
      ],
      image: "/images/wellness/theraputic.jpg"
    },
    {
      id: 'spiritual',
      title: 'Spiritual Practices & daily rituals',
      description: 'Connect with the divine essence inside you',
      items: [
        { title: 'Om Dhyanam', description: 'Details about Om Dhyanam' },
        { title: 'Tai-chi & Qi-Gong', description: 'Details about Tai-chi & Qi-Gong' },
        { title: 'Fire ritual', description: 'Details about Fire ritual' },
        { title: 'Hoponopono', description: 'Details about Hoponopono' },
        { title: 'Manifestation', description: 'Details about Manifestation' },
        { title: 'Affirmation', description: 'Details about Affirmation' },
        { title: 'Sacred Structure that makes each day soulful', description: 'Details about Sacred Structure' },
        { title: 'Sunrise gratitude', description: 'Details about Sunrise gratitude' },
        { title: 'Morning Havan in Havan shala (fire ceremony for purification)', description: 'Details about Morning Havan' },
        { title: 'Ganga Jal Abhishek in morning rituals', description: 'Details about Ganga Jal Abhishek' },
        { title: 'Navagraha Nakshathra walk', description: 'Details about Navagraha Nakshathra walk' },
        { title: 'Evening Aarti (divine chanting in community space)', description: 'Details about Evening Aarti' },
        { title: 'Sacred silence hour post dinner for digital detox & inner reflection', description: 'Details about Sacred silence hour' },
        { title: 'Group Chanting', description: 'Details about Group Chanting' },
        { title: 'and many more', description: 'Explore additional Spiritual Practices & daily rituals options.' }
      ],
      image: "/images/wellness/spiritualom.jpg"
    },
     {
      id: 'wisdom',
      title: 'Wisdom Miracle Programs',
      description: 'Inner Transformation Workshops',
      items: [
        { title: 'Conscious Manifestation Sessions', description: 'Details about Conscious Manifestation Sessions' },
        { title: 'Daily Affirmation Rituals', description: 'Details about Daily Affirmation Rituals' },
        { title: 'Vision Alignment Ceremonies', description: 'Details about Vision Alignment Ceremonies' },
        { title: 'Emotional Empowerment Circles', description: 'Details about Emotional Empowerment Circles' },
        { title: 'Spiritual Intention Mapping', description: 'Details about Spiritual Intention Mapping' },
        { title: 'Quantum Focus Techniques', description: 'Details about Quantum Focus Techniques' },
        { title: 'and many more', description: 'Explore additional Wisdom Miracle Programs options.' }
      ],
      image: "/images/wellness/consc.jpg"
    },
     {
      id: 'environmental',
      title: 'Environmental Healing',
      description: 'In honoring the Pancha Tattva, we heal ourselves and the Earth',
      items: [
        { title: 'Nature Meditation', description: 'Details about Nature Meditation' },
        { title: 'Star gazing Rituals', description: 'Details about Star gazing Rituals' },
        { title: 'Nature Walks', description: 'Details about Nature Walks' },
        { title: 'Forest Bathing', description: 'Details about Forest Bathing' },
        { title: 'and many more', description: 'Explore additional Environmental Healing options.' }
      ],
      image: "/images/wellness/EnvOM.jpg"
    },
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
            Each experience is more than a therapy, it is a sacred journey inward, rooted in the timeless science of Ayurveda
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
                <div className="relative bg-beige-100/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full">
                  <div className="md:flex flex-grow">
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
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                      <h3 className="text-2xl font-heading text-gold-600 mb-3">
                        {experience.title}
                      </h3>
                      <p className="text-maroon-700 mb-4 flex-grow">
                        {experience.description}
                      </p>
                      <ul className="space-y-2 mt-4 max-h-40 overflow-y-auto pr-2">
                        {experience.items.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start text-maroon-600">
                            <span className="text-gold-500 mr-2">•</span>
                            {item.title}
                          </li>
                        ))}
                      </ul>
                      {experience.items.length > 4 && (
                        <button 
                          className="mt-4 text-gold-600 hover:underline self-start"
                          onClick={() => setSelectedExperience(experience)}
                        >
                          Know More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedExperience(null)}
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-heading text-gold-600 mb-4">{selectedExperience.title}</h3>
              <p className="text-maroon-700 mb-4">{selectedExperience.description}</p>
              <ul className="space-y-2">
                {selectedExperience.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-maroon-600">
                    <span className="text-gold-500 mr-2">•</span>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      {/* Uncomment and add item.description when available */}
                      {/* {item.description && <p className="text-sm italic">{item.description}</p>} */}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WellnessMandala;