import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HorizontalScroll from './components/HorizontalScroll';
import PinnedSection from './components/PinnedSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <Hero />
      <Services />
      <HorizontalScroll />
      <PinnedSection />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;