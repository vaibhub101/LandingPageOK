import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SanthigiriOrg from './components/SanthigiriOrg';
import RoyalFounder from './components/RoyalFounder';
import WellnessMandala from './components/WellnessMandala';
import WellnessDimensions from './components/WellnessDimensions';
import WellnessExperiences from './components/WellnessExperiences';
import SpecialPrograms from './components/SpecialPrograms';
import MembershipTiers from './components/MembershipTiers';
import MembershipUsage from './components/MembershipUsage';
import Testimonials from './components/Testimonials';
import Quotations from './components/Quotations';
import Trainers from './components/Trainers';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';
import PhotoCollage from './components/PhotoCollage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 via-beige-100 to-beige-200 text-maroon-900 font-body">
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.golden.100/0.15),transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.maroon.100/0.1),transparent_70%)] pointer-events-none"></div>
      
      {/* Texture overlay */}
      <div className="fixed inset-0 bg-texture-pattern opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      {/* Main content */}
      <div className="relative">
        <Header />
        <main>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-maroon-200 to-transparent opacity-30"></div>
          <Hero />
          <About />
          <PhotoCollage />
          <SanthigiriOrg />
          <RoyalFounder />
          <WellnessMandala />
          <WellnessDimensions />
          <WellnessExperiences />
          <SpecialPrograms />
          <MembershipTiers />
          <MembershipUsage />
          <Trainers />
          <Testimonials />
          <Quotations />
          <FinalMessage />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-maroon-200 to-transparent opacity-30"></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;