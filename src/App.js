import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
+ import Description from './components/Description';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
+     <Description />
      <Experiences />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
