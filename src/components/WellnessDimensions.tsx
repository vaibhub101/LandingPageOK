import React, { useState } from 'react';
import {
  Leaf, Heart, Shield, Flame,
  Briefcase, Users, Mountain, Wind, X
} from 'lucide-react';
import { motion } from 'framer-motion';

interface WellnessItem {
  title: string;
  description?: string;
}

interface Dimension {
  icon: JSX.Element;
  title: string;
  description: string;
  items: WellnessItem[];
  image: string;
}

const WellnessDimensions = () => {
  const dimensions: Dimension[] = [
    {
      icon: <Leaf className="h-8 w-8 text-gold-600" />,
      title: "Physical Wellness",
      description: "Reclaim your body with our specialized physical wellness programs.",
      items: [
        { title: "Detox" },
        { title: "Weight Management" },
        { title: "Chronic Pain Man" },
        { title: "Rejuvenation" },
        { title: "Anti-Aging" },
        { title: "Yoga" },
        { title: "Fitness & Movement Therapy" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/8795582/pexels-photo-8795582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Heart className="h-8 w-8 text-gold-600" />,
      title: "Emotional & Mental Wellness",
      description: "Heal, express, and transform your emotional landscape.",
      items: [
        { title: "Stress Management" },
        { title: "Emotional & Mental Health" },
        { title: "Sleep Enhancement" },
        { title: "Emotional Healing & Self-Discovery" },
        { title: "Art & Expressive Therapies" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/9577189/pexels-photo-9577189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Shield className="h-8 w-8 text-gold-600" />,
      title: "Immune & Biological Wellness",
      description: "Empower your body's defense systems and optimize biological functions.",
      items: [
        { title: "Hormonal Balance" },
        { title: "Women's Health" },
        { title: "Gut Health" },
        { title: "Integrative Diagnostics" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/5480052/pexels-photo-5480052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Flame className="h-8 w-8 text-gold-600" />,
      title: "Spiritual Wellness",
      description: "Reunite with the sacred dimensions of your being.",
      items: [
        { title: "Connection with Nature" },
        { title: "Spiritual Balance" },
        { title: "Meditation & Silence Retreats" },
        { title: "Inner Peace & Mindfulness" },
        { title: "Sacred Rituals & Ceremonies" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/11435059/pexels-photo-11435059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Mountain className="h-8 w-8 text-gold-600" />,
      title: "Lifestyle & Preventive Wellness",
      description: "Craft a way of life that promotes ongoing wellness and prevents disease.",
      items: [
        { title: "Reset Your Belief System" },
        { title: "Attract Overall Abundance" },
        { title: "Manifestation" },
        { title: "Nutrition & Healthy Eating" },
        { title: "Sleep Hygiene" },
        { title: "Digital Wellness" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/16791298/pexels-photo-16791298/free-photo-of-juice-with-drinking-straw-and-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Users className="h-8 w-8 text-gold-600" />,
      title: "Social Wellness",
      description: "Building meaningful connections and healthy relationships.",
      items: [
        { title: "Meaningful Connections" },
        { title: "Healing Together Retreat" },
        { title: "Mindful Parenting & Child Wellness" },
        { title: "Holistic Community Practices" },
        { title: "Heart-Centered Dialogue" },
        { title: "Purposeful Service" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/30318143/pexels-photo-30318143/free-photo-of-romantic-couple-with-coffee-in-vancouver-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Wind className="h-8 w-8 text-gold-600" />,
      title: "Environmental Wellness",
      description: "Let nature be your healer as you reconnect with the earth.",
      items: [
        { title: "Deepens connection with the Earth" },
        { title: "Reduces stress & anxiety" },
        { title: "Boosts immunity" },
        { title: "Promotes restful sleep" },
        { title: "Awakens spiritual insight" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/16338316/pexels-photo-16338316/free-photo-of-stream-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-gold-600" />,
      title: "Financial Wellness",
      description: "Financial wellness is feeling secure, balanced, and in control of your money.",
      items: [
        { title: "Abundance Consciousness Workshops" },
        { title: "Mindful Money Rituals" },
        { title: "Balance & Simplicity" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.com/photos/6775160/pexels-photo-6775160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-gold-600" />,
      title: "Corporate Wellness",
      description: "Peak performance through holistic well-being for professionals.",
      items: [
        { title: "Leadership Renewal Programs" },
        { title: "Work-Life Synergy Workshops" },
        { title: "Biohacking for Peak Performance" },
        { title: "Emotional Intelligence & Team Harmony" },
        { title: "Wellness Strategy Design for Entrepreneurs" },
        { title: "and several others" }
      ],
      image: "https://images.pexels.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="dimensions" className="bg-gradient-to-b from-beige-50 to-beige-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Logo Image */}
        <div className="flex justify-center mb-6">
          <motion.div
            className="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center bg-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img src="/bgremflower.png" alt="Mandala Flower" className="w-full h-full object-contain" />
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-gold-600 mb-4">
            Dimensions of Transformational Wellness
          </h2>
          <p className="text-xl text-maroon-700">
            Our holistic approach addresses every aspect of your being for complete transformation.
          </p>
          <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-full"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Card Content */}
              <div className="relative bg-beige-100/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
                {/* Icon Container with Background */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-beige-50 flex items-center justify-center shadow-md group-hover:shadow-lg transform transition duration-500 group-hover:scale-110">
                  {dimension.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading text-gold-600 text-center mb-3">
                  {dimension.title}
                </h3>

                {/* Description */}
                <p className="text-maroon-700 text-center mb-4 text-sm">
                  {dimension.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2 flex-grow overflow-y-auto pr-2">
                  {dimension.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-maroon-600 text-sm cursor-pointer hover:text-gold-600 transition-colors duration-200"
                    >
                      <span className="text-gold-500 mr-2">•</span>
                      {item.title}
                    </li>
                  ))}
                </ul>

                {/* Hover Image Preview */}
                <div className="absolute inset-0 rounded-xl bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       backgroundImage: `url(${dimension.image})`,
                       backgroundBlendMode: 'overlay'
                     }}>
                  <div className="absolute inset-0 bg-maroon-900/80 rounded-xl">
                    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                      <h4 className="text-gold-300 font-heading text-xl mb-2">{dimension.title}</h4>
                      <p className="text-beige-100 text-sm">{dimension.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessDimensions;