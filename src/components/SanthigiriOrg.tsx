import React from 'react';
import { Building2, Award, Globe2, Users2 } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-b from-beige-50 to-beige-100">
      <div className="container mx-auto px-4">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-transparent"
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
          <h2 className="font-heading text-3xl md:text-4xl mb-6 text-gold-600">
            Santhigiri Health and Research Organisation
          </h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-8"></div>
          <p className="text-lg text-maroon-700 mb-8">
            Founded by Navajyothi Sree Karunakara Guru in Thiruvananthapuram, Santhigiri Ashram is a global spiritual hub promoting universal peace, holistic well-being, and self-realization through Sanathana Dharma. Led by Sishyapoojitha Amritha Jnana Thapaswini since 1999, with branches across Kerala, Tamil Nadu, Karnataka, and Delhi, it unites diverse devotees in Guru's transformative Karma and Dharma.
          </p>
        </div>

        {/* Legacy Image Collage */}
        <div className="mb-20 relative py-16 bg-beige-100/80">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-maroon-500/10"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-heading text-gold-600 text-center mb-12">Our Distinguished Visitors</h3>
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {legacyImages.map((image, index) => (
                  <div key={index} 
                    className={`transform ${
                      index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                    } transition-transform hover:scale-105 duration-300`}
                  >
                    <div className="bg-gradient-to-br from-maroon-800 to-maroon-900 p-4 shadow-xl rounded-sm">
                      <div className="aspect-[4/3] overflow-hidden mb-4 border-2 border-maroon-600/30">
                        <img 
                          src={image.url} 
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-golden-300 text-sm text-center font-heading">
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
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 scale-90 -rotate-3 border-2 border-gold-500/30 rounded-lg"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://www.santhigiriashram.org/images/lotusparnasala.jpg" 
                alt="Santhigiri Ayurveda Center" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-heading text-gold-600 mb-6">Ayurveda Leadership</h3>
            <p className="text-lg text-maroon-700 mb-6">
              Santhigiri pioneers holistic health with Asia's only English-medium Ayurveda education. As South India's top Ayurvedic medicine manufacturer, it offers 400+ Ayurveda and Siddha treatments at its specialty hospital, trains Panchakarma therapists, and crafts authentic products, blending tradition and modernity for global wellness.
            </p>
          </div>
        </div>

        {/* Legacy Section */}
        <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-gold-600 mb-4">Welcome to Santhigiri: 67 Years of Trust and Healing</h3>
            <p className="text-lg text-maroon-700">
              For 65+ years, Santhigiri has been at the forefront of holistic wellness and spiritual growth. With a legacy rooted in Ayurvedic education, research, and healthcare, Santhigiri is committed to providing transformative healing through the fusion of tradition and modern science.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gold-500/10 rounded-full mr-4">
                  {achievement.icon}
                </div>
                <h4 className="text-gold-600 font-heading">{achievement.title}</h4>
              </div>
              <p className="text-maroon-700">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Collaborations Section */}
        <div className="bg-beige-100/80 backdrop-blur-sm border border-gold-200 rounded-xl p-8">
          <h3 className="text-2xl font-heading text-gold-600 mb-6 text-center">Santhigiri's Esteemed Collaborations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborations.map((collaboration, index) => (
              <div key={index} className="bg-gold-500/10 rounded-lg p-4 text-maroon-700 text-center">
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