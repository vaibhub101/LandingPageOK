import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="public\newlogoOMK.jpg"
                alt="Om Kalyanam Santhigiri Logo" 
                className="h-16 object-contain"
              />
            </div>
            <p className="text-maroon-700 mb-4">
              A sacred initiative inspired by Santhigiri Ashram, dedicated to holistic well-being and inner transformation.
            </p>
            <p className="text-gold-600">67 years of trust</p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-heading text-gold-600 text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Wellness Dimensions', 'Membership', 'Experiences', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-maroon-600 hover:text-gold-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-heading text-gold-600 text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold-600 mt-1 mr-2" />
                <span className="text-maroon-700">Om Kalyanam Santhigiri, Dehradun, Uttrakahand , India - 682555</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold-600 mr-2" />
                <span className="text-maroon-700">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold-600 mr-2" />
                <span className="text-maroon-700">info@omkalyanam.org</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-heading text-gold-600 text-xl mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-beige-100 text-gold-600 p-2 rounded-full hover:bg-gold-100 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-beige-100 text-gold-600 p-2 rounded-full hover:bg-gold-100 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-beige-100 text-gold-600 p-2 rounded-full hover:bg-gold-100 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
            
            <h3 className="font-heading text-gold-600 text-xl mb-4">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-beige-100 text-maroon-700 px-4 py-2 rounded-l outline-none focus:ring-1 focus:ring-gold-500 w-full placeholder-maroon-400"
              />
              <button className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-4 py-2 rounded-r hover:from-gold-700 hover:to-gold-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold-200 mt-12 pt-6 text-center text-maroon-600">
          <p>© {new Date().getFullYear()} Om Kalyanam Santhigiri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;