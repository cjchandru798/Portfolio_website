import { motion } from 'framer-motion';

export default function Testimonials() {
  const items = [
    {
      title: 'Cisco Packet Tracer',
      desc: 'Earned via Cisco Networking Academy'
    },
    {
      title: 'HP Software Engineering Simulation',
      desc: 'Hands-on virtual internship via Forage'
    },
    {
      title: 'Internship — Codec Technologies',
      desc: 'Analyzed datasets, built ML models & visualizations in Python '
    },
{
      title: 'Internship — Conprg Technologies',
      desc: 'Created websites as a full stack developer'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Certifications & Testimonials</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-700 p-6 rounded shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
