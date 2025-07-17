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
      { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
      { name: 'SQL', icon: SiMysql, color: 'text-sky-600' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'CSS', icon: SiCss3, color: 'text-blue-600' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', icon: FaMicrosoft, color: 'text-blue-500' },
      { name: 'IntelliJ', icon: FaCode, color: 'text-purple-600' },
      { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-gray-300' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Technologies & tools I've worked with
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            className="bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-md p-6 hover:shadow-blue-400/30 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-500">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="group flex items-center space-x-3 bg-gray-200 dark:bg-zinc-700/50 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600/50 transition"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    title={skill.name}
                  >
                    <Icon className={`text-2xl ${skill.color}`} />
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
