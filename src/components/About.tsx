import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg">
        Passionate full-stack developer with a knack for crafting clean, fast, and scalable applications.
        I value great UX, modern design, and elegant code.
      </p>
    </motion.section>
  );
}
