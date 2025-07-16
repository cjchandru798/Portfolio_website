// File: src/App.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';


export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}