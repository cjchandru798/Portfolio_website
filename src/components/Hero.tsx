// File: src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown } from 'react-icons/fa';
import bgImage from '../assets/background1.jpg'; // Add your hero background image here

export default function Hero() {
  const handleScrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay for shading */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Transparent box with enhanced text */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-8 py-10 max-w-2xl mx-4 text-center shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >

       <div className="mb-4">
         {/* Left-aligned, bold "Hi, I’m" */}
         <p className="text-xl md:text-2xl font-bold text-left text-white">Hi, I’m</p>

         {/* Centered, bold name */}
         <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-center">
           <span className="text-blue-400">Hemachandiran</span>
         </h1>
       </div>




        <p className="text-lg md:text-xl mb-6 text-gray-200">
          <Typewriter
            words={['Full Stack Developer', 'Data Science', 'FontEnd Developer','BackendEnd Developer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <motion.button
          onClick={handleScrollToProjects}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-lg shadow-lg"
        >
          🚀 See My Work
        </motion.button>
      </motion.div>

      {/* Scroll-down arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <FaArrowDown />
      </motion.div>
    </motion.section>
  );
}
