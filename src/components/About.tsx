import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaUserGraduate, FaProjectDiagram, FaTools } from 'react-icons/fa';

// Custom hook for animated counting
function useCountUp(end: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, inView, duration]);

  return count;
}

// Single stat item component
function StatItem({ icon: Icon, label, end }: { icon: any; label: string; end: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref); // <- removed `once: true`
  const count = useCountUp(end, isInView);

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md flex flex-col items-center w-56"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2" />
      <span className="text-3xl font-bold text-gray-900 dark:text-white">{count}</span>
      <p className="text-gray-600 dark:text-gray-300 mt-1 text-base">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} // this affects the section fade-in only
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10">
        Passionate full-stack developer with a knack for crafting clean, fast, and scalable applications.
        I value great UX, modern design, and elegant code.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <StatItem icon={FaUserGraduate} label="Year in College" end={4} />
        <StatItem icon={FaProjectDiagram} label="Projects Completed" end={12} />
        <StatItem icon={FaTools} label="Technologies Used" end={18} />
      </div>
    </motion.section>
  );
}
