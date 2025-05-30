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
        <section className="section" id="contact" style={{ backgroundColor: "var(--color-bg-section)" }}>
          <h2 className="section__title" style={{ marginBottom: '-.5rem' }}>Gallery</h2>

          <div className="container grid">
            {/* <div style={{ height: '22rem', position: 'relative' }}> */}
            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} />
            {/* </div> */}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

