import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;