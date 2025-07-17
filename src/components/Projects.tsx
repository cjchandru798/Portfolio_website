import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiSpring, SiNodedotjs, SiExpress, SiReact } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss3 className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  'Spring Boot': <SiSpring className="text-green-500" />,
  'HTML/CSS': <><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500 ml-1" /></>,
  'Responsive Design': <SiReact className="text-cyan-400" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  Express: <SiExpress className="text-gray-300" />,
};

const projects = [
  {
    title: 'Service Booking Web Application',
    desc: 'A comprehensive booking platform using Java Spring Boot.',
    demo: 'https://example.com/service-booking',
    code: 'https://github.com/username/service-booking',
    image: 'https://img.icons8.com/ios-filled/100/calendar.png',
    tags: ['Java', 'Spring Boot', 'HTML/CSS']
  },
  {
    title: 'Interactive Portfolio Website',
    desc: 'Modern, responsive site showcasing skills and projects.',
    demo: 'https://example.com/portfolio',
    code: 'https://github.com/username/portfolio',
    image: 'https://img.icons8.com/ios-filled/100/user.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'G-Mail Sending Web Application',
    desc: 'An app for sending emails using Gmail SMTP integration.',
    demo: 'https://example.com/gmail-app',
    code: 'https://github.com/username/gmail-sender',
    image: 'https://img.icons8.com/ios-filled/100/gmail.png',
    tags: ['Node.js', 'Express', 'JavaScript']
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-blue-500 to-cyan-500 text-white cursor-pointer transition duration-300"
            style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            onClick={() => setSelected(proj)}
          >
            <div className="flex justify-center items-center h-32 bg-white dark:bg-gray-800">
              <img src={proj.image} alt={proj.title} className="w-16 h-16 object-contain" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-sm mb-3">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-black/20 dark:bg-white/10 text-xs px-2 py-1 rounded-full"
                  >
                    {iconMap[tag]} {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} className="w-20 h-20 mx-auto object-contain mb-4" />
              <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{selected.desc}</p>
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {selected.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-blue-100/30 dark:bg-blue-900/30 text-xs px-2 py-1 rounded-full"
                  >
                    {iconMap[tag]} {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a href={selected.code} target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaGithub /> Code
                </a>
                <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                   className="text-green-600 hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
