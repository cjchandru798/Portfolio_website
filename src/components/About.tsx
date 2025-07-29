import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaUserGraduate, FaProjectDiagram, FaTools } from 'react-icons/fa';

// Animated counting hook
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

// Individual Stat Card with hover animation
function StatItem({
  icon: Icon,
  label,
  end,
}: {
  icon: any;
  label: string;
  end: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useCountUp(end, isInView);

  return (
    <motion.div
      ref={ref}
      className="bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-md p-6 w-56 flex flex-col items-center hover:shadow-blue-400/30 transition-transform"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="text-3xl mb-2 text-blue-600 dark:text-blue-400" />
      <span className="text-3xl font-bold text-gray-900 dark:text-white">{count}</span>
      <p className="text-gray-600 dark:text-gray-300 mt-1 text-base">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10">
        Passionate full-stack developer with a knack for crafting clean, fast, and scalable applications.
        I value great UX, modern design, and elegant code.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <StatItem icon={FaUserGraduate} label="th Year in College" end={4} />
        <StatItem icon={FaProjectDiagram} label="Projects Completed" end={4} />
        <StatItem icon={FaTools} label="Technologies Used" end={18} />
      </div>
    </motion.section>
  );
}
