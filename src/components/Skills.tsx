// src/components/Skills.jsx
import { motion } from 'framer-motion';
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

import {
  FaJava,
  FaMicrosoft,
  FaCode,
  FaGithub,
} from 'react-icons/fa';

const categories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
      { name: 'SQL', icon: <SiMysql className="text-sky-500" /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
      { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', icon: <FaMicrosoft className="text-blue-500" /> }, // fallback for Visual Studio
      { name: 'IntelliJ', icon: <FaCode className="text-purple-600" /> },   // fallback for IntelliJ
      { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-400">Technologies & tools I've worked with</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            className="bg-zinc-800 rounded-2xl shadow-lg p-6 hover:shadow-yellow-400/30 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-zinc-700/50 p-2 rounded-lg hover:bg-zinc-600/50 transition"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
