import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import About from './components/About';
import SanthigiriOrg from './components/SanthigiriOrg';
import RoyalFounder from './components/RoyalFounder';
import WellnessDimensions from './components/WellnessDimensions';
import WellnessMandala from './components/WellnessMandala';
import SpecialPrograms from './components/SpecialPrograms';
import MembershipTiers from './components/MembershipTiers';
import MembershipUsage from './components/MembershipUsage';
import Testimonials from './components/Testimonials';
import Quotations from './components/Quotations';
import Trainers from './components/Trainers';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnquiryForm from './components/EnquiryForm';
import { EnquiryModalProvider } from './context/EnquiryModalContext';
import WelcomeScreen from './components/WelcomeScreen';
// import PhotoCollage from './components/PhotoCollage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome screen for 2.0 seconds before starting fade out
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <EnquiryModalProvider>
      <Router>
        <WelcomeScreen 
          isVisible={showWelcome} 
          onAnimationComplete={() => setShowWelcome(false)} 
        />
        <div 
          className={`min-h-screen bg-gradient-to-b from-beige-50 via-beige-100 to-beige-200 text-maroon-900 font-body transition-all duration-1000 ${
            showWelcome ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionDelay: '0.8s'
          }}
        >
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
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <LogoSection />
                    <About />
                    <SanthigiriOrg />
                    <RoyalFounder />
                    <WellnessDimensions />
                    <WellnessMandala />
                    <SpecialPrograms />
                    <MembershipTiers />
                    <MembershipUsage />
                    <Trainers />
                    <Testimonials />
                    <Quotations />
                    <FinalMessage />
                    <EnquiryForm />
                  </>
                } />
              </Routes>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-maroon-200 to-transparent opacity-30"></div>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </EnquiryModalProvider>
  );
}

export default App;