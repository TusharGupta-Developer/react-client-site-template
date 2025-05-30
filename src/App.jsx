// Therapist Website Starter Template (React + CSS3)

import React from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import CircularGallery from './components/pages/CircularGallery';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <CircularGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

