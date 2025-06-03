import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <Contact />
      <Gallery />         {/* Gallery solo qui, dopo Contatti */}
      <Footer />
    </div>
  );
}

export default App;
