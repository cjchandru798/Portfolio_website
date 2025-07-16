// File: src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Hemachandiran</span> 👋
      </h1>
      <p className="mt-4 text-xl max-w-xl">
        <Typewriter
          words={['Full Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        See My Work
      </a>
    </motion.section>
  );
}
