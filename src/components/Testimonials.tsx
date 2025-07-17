import { motion } from 'framer-motion';

const testimonials = [
  {
    title: 'Cisco Packet Tracer',
    desc: 'Earned via Cisco Networking Academy',
  },
  {
    title: 'HP Software Engineering Simulation',
    desc: 'Hands-on virtual internship via Forage',
  },
  {
    title: 'Internship — Codec Technologies',
    desc: 'Analyzed datasets, built ML models & visualizations in Python',
  },
  {
    title: 'Internship — Conprg Technologies',
    desc: 'Created websites as a full stack developer',
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications & Testimonials
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md border border-blue-100 dark:border-zinc-700 hover:shadow-blue-400/40 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
