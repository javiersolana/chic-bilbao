import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SalonsSection } from './components/SalonsSection';
import { ServicesGrid } from './components/ServicesGrid';
import { Brands } from './components/Brands';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-chic-black bg-chic-white selection:bg-chic-gold selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <SalonsSection />
      <ServicesGrid />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;