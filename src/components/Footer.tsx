import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-beige-100 to-beige-200 text-maroon-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/omkfinal.png" alt="Om Kalyanam Logo" className="h-16 mb-4" />
            <p className="text-sm leading-relaxed mb-4">
              Embark on a transformative journey of wellness and spiritual growth with Om Kalyanam Santhigiri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-gold-600 text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gold-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#membership-tiers" className="hover:text-gold-600 transition-colors">Membership</a>
              </li>
              <li>
                <a href="#special-programs" className="hover:text-gold-600 transition-colors">Experiences</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-gold-600 transition-colors">Our Team</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-gold-600 text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold-600" />
                <span>+91-9266057728, +91-9266058676</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold-600" />
                <a href="mailto:info@tapasavimandala.com" className="hover:text-gold-600 transition-colors">
                  info@tapasavimandala.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gold-600" />
                <span>
                  Misraspatti<br />
                  Dehradun<br />
                  Near UPES University<br />
                  Pin 248197
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-gold-600 text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-600 text-white p-2 rounded-full hover:bg-gold-700 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/omkalyanam/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-600 text-white p-2 rounded-full hover:bg-gold-700 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-600 text-white p-2 rounded-full hover:bg-gold-700 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-maroon-200/30 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Om Kalyanam Santhigiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;