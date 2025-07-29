import { useState } from 'react';
import { FaGithub, FaJava } from 'react-icons/fa';
import {
  SiJavascript, SiHtml5, SiCss3, SiSpring,
  SiNodedotjs, SiExpress, SiReact,SiDotnet,
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import type { JSX } from 'react';

interface Project {
  title: string;
  desc: string;
  demo?: string;
  code: string;
  image: string;
  tags: string[];
}

const iconMap: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss3 className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  'Spring Boot': <SiSpring className="text-green-500" />,
  'HTML/CSS': (
    <>
      <SiHtml5 className="text-orange-500" />
      <SiCss3 className="text-blue-500 ml-1" />
    </>
  ),
  'Responsive Design': <SiReact className="text-cyan-400" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  Express: <SiExpress className="text-gray-300" />,
  DotNet: <SiDotnet className="text-purple-600" />, // ← new icon added here

};

const projects: Project[] = [
  {
    title: 'Salon Appointment Booking Web Application',
    desc: 'A comprehensive booking platform using Java Spring Boot.',
    code: 'https://github.com/cjchandru798/Salon-Appointment-Booking.git',
    image: 'https://img.icons8.com/ios-filled/100/calendar.png',
    tags: ['Java', 'Spring Boot', 'HTML/CSS']
  },
  {
    title: 'Portfolio Website',
    desc: 'Modern, responsive site showcasing skills and projects.',
    demo: 'https://example.com/portfolio',
    code: 'https://github.com/cjchandru798/Portfolio_website.git',
    image: 'https://img.icons8.com/ios-filled/100/user.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    title: 'G-Mail Sending Web Application',
    desc: 'An app for sending emails using Gmail SMTP integration.',
    demo: 'https://example.com/gmail-app',
    code: 'https://github.com/cjchandru798/G-Mail-Sending-App.git',
    image: 'https://img.icons8.com/ios-filled/100/gmail.png',
    tags: ['Node.js', 'Spring Boot', 'JavaScript', 'Java']
  },
  {
    title: 'Simple Appointment Booking',
    desc: 'An app for sending emails using Gmail SMTP integration.',
    code: 'https://github.com/cjchandru798/simple-appointment-booking.git',
    image: 'https://img.icons8.com/ios-filled/100/calendar.png',
    tags: ['Node.js', 'Spring Boot', 'JavaScript', 'DotNet']
  }
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Featured Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/30 dark:bg-zinc-800/50 backdrop-blur-md border border-gray-300/40 dark:border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition-all cursor-pointer"
            onClick={() => setSelected(proj)}
          >
            <div className="flex justify-center items-center mb-4">
              <img src={proj.image} alt={proj.title} className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-400 text-center">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-3">{proj.desc}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {proj.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                >
                  {iconMap[tag]} {tag}
                </span>
              ))}
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
              className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full text-center shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-20 h-20 mx-auto object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{selected.desc}</p>
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {selected.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-blue-100/40 dark:bg-blue-900/40 text-xs px-2 py-1 rounded-full"
                  >
                    {iconMap[tag]} {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={selected.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
