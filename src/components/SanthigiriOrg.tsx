import React from 'react';
import { Building2, Award, Globe2, Users2, School2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SanthigiriOrg = () => {
  const achievements = [
    {
      title: "Global Presence",
      description: "International centers in Dubai, Singapore, and Florida (USA)",
      icon: <Globe2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Healthcare Excellence",
      description: "250-bed Ayurveda & Siddha specialty hospital in South India",
      icon: <Building2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Employment Impact",
      description: "Direct employment for over 6000 people",
      icon: <Users2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Product Range",
      description: "400+ proprietary Ayurveda & Siddha medicines",
      icon: <Award className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Training Excellence",
      description: "Paramedical Institute for the training of Panchakarma Therapists.",
      icon: <School2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Educational Leadership",
      description: "Santhigiri stands as Asia's only institute for English-medium Ayurveda education.",
      icon: <Building2 className="w-6 h-6 text-gold-600" />
    }
  ];

  const collaborations = [
    "Department of AYUSH (Government of Karnataka)",
    "Nuclear Power Point (Koodamkulam, Thirunelveli)",
    "Airport Authority of India (Thirunanthapuram)",
    "BSNL (Thirunanthapuram)",
    "ISRO (Thirunanthapuram)",
    "Goa Tourism (Andhra Pradesh Tourism)"
  ];

  const legacyImages = [
    {
      url: "https://th-i.thgim.com/public/incoming/ktncpa/article67224253.ece/alternates/LANDSCAPE_1200/SHANTHIGIRI.jpg",
      caption: "Former President Ram Nath Kovind visited Santhigiri Ashram",
      size: "lg"
    },
    {
      url: "https://th.bing.com/th/id/OIP.d7xw2Dwxz-sdlvbbhZ95eQHaE7?rs=1&pid=ImgDetMain",
      caption: "Hon. Kerala Governor visited Santhigiri Ashram",
      size: "sm"
    },
    {
      url: "https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2019/3/25/mohanlal-santhigiri-main.jpg",
      caption: "Malayalam actor Mohanlal visited Santhigiri Ashram",
      size: "md"
    },
    {
      url: "https://i0.wp.com/swamigururethnam.com/wp-content/uploads/2023/11/Dhoni.jpg?w=1600&ssl=1",
      caption: "M.S. Dhoni and his wife Sakshi Dhoni visited Santhigiri Ashram",
      size: "sm"
    },
    {
      url: "https://www.santhigiriashram.org/admin/assets/uploads/gallery/1496819454amit2.jpg",
      caption: "BJP leader and Union Home Minister Amit Shah",
      size: "md"
    },
    {
      url: "https://www.santhigiriashram.org/images/parnasala-samarpanam.jpg",
      caption: "The Parnasala was formally dedicated to humanity by the President of India, Mrs. Pratibha Patil.",
        size: "md"
    },
    {
      url: "https://i0.wp.com/swamigururethnam.com/wp-content/uploads/2023/09/Event11-scaled.jpg?resize=1536%2C858&ssl=1",
      caption: "Road transport and highway minister, Mr. Nitin Gadkari ji during his visit at Santhigiri Ashram,Thiruvananthapuram",
      size: "md"
    },
    {
      url: "https://pbs.twimg.com/media/DcHusBjX0AI964C.jpg",
      caption: "Minister of Home Affairs Rajnath Singh visited Santhigiri Ashram in Thiruvananthapuram",
      size: "md"
    },
    {
      url: "https://mediaexpress24.com/wp-content/uploads/2023/11/L-R-P-K-Krishnadas-A-N-Radhakrishnan-Shashi-Tharoor-Jagadeep-Dhankar-Swami-Gururethnam-JnanaThapaswi-K-V-Thomas-Swami-Chaithnya-JnanaThapaswi-1.jpg",
      caption: "Hon'ble Vice-President, Shri Jagdeep Dhankhar attended the Silver Jubilee celebrations of Santhigiri Ashram ",
      size: "md"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.gold.500/0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
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
            Santhigiri Health and Research Organisation
          </h2>
          <div className="w-32 h-1 bg-gold-600 mx-auto mb-8"></div>
          <p className="text-lg text-maroon-700 mb-8">
            Founded by Navajyothi Sree Karunakara Guru in Thiruvananthapuram, Santhigiri Ashram is a global spiritual hub promoting universal peace, holistic well-being, and self-realization through Sanathana Dharma. Led by Sishyapoojitha Amritha Jnana Thapaswini since 1999, with branches across Kerala, Tamil Nadu, Karnataka, and Delhi, it unites diverse devotees in Guru's transformative Karma and Dharma.
          </p>
        </div>

        {/* Legacy Image Collage */}
        <div className="mb-20 relative py-16 bg-beige-100/80 backdrop-blur-sm">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-maroon-500/10"></div>
            </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-heading text-gold-600 text-center mb-12">Our Distinguished Visitors</h3>
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {legacyImages.map((image, index) => (
                  <div key={index} 
                    className={`transform ${
                      index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                    } transition-all duration-300 hover:scale-105 hover:rotate-0`}
                  >
                    <div className="bg-gradient-to-br from-maroon-800 to-maroon-900 p-4 shadow-xl rounded-lg group">
                      <div className="aspect-[4/3] overflow-hidden mb-4 border-2 border-gold-300/40 rounded-lg">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                      </div>
                      <p className="text-gold-300 text-sm text-center font-heading group-hover:text-gold-400 transition-colors">
                        {image.caption || "Distinguished visitor at Santhigiri Ashram"}
                      </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ayurveda Leadership Section */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative z-10 overflow-hidden rounded-lg shadow-xl border-4 border-gold-500 group">
            <div className="absolute inset-0 bg-gradient-to-t from-beige-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://www.santhigiriashram.org/images/lotusparnasala.jpg" 
                alt="Santhigiri Ayurveda Center" 
              className="w-full max-w-xl h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Legacy Section */}
        <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8 mb-16 hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading text-gold-600 mb-6">Welcome to Santhigiri: 60+ Years of Trust and Healing</h3>
            <p className="text-lg text-maroon-700">
              For 60+ years, Santhigiri has been at the forefront of holistic wellness and spiritual growth. With a legacy rooted in Ayurvedic education, research, and healthcare, Santhigiri is committed to providing transformative healing through the fusion of tradition and modern science.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.slice(0, 6).map((achievement, index) => (
            <div key={index} 
              className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-lg p-6 
                hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gold-500/10 rounded-full mr-4 group-hover:bg-gold-500/20 transition-colors">
                  {achievement.icon}
                </div>
                <h4 className="text-gold-600 font-heading group-hover:text-gold-700 transition-colors">{achievement.title}</h4>
              </div>
              <p className="text-maroon-700">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Collaborations Section */}
        <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
          <h3 className="text-3xl font-heading text-gold-600 mb-8 text-center">Santhigiri's Esteemed Collaborations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborations.map((collaboration, index) => (
              <div key={index} 
                className="bg-gold-500/10 rounded-lg p-4 text-maroon-700 text-center
                  hover:bg-gold-500/20 hover:text-gold-700 transition-all duration-300 cursor-pointer"
              >
                {collaboration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SanthigiriOrg;