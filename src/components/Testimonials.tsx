import { motion } from 'framer-motion';

const testimonials = [
  {
    title: 'Data Science and Analytics',
    desc: 'Earned via hp life ',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_hp-life-certificate-activity-7355659866339717121-QLKO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Java With Springboot ',
    desc: 'Earned via in Naan Mudhalvan',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_java-with-spring-boot-in-naan-mudhalvan-activity-7355432214962012160-Xv_u?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Microsoft Office Essentials',
    desc: 'Earned via in Naan Mudhalvan',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_microsoft-office-essentials-in-naan-mudhalvan-activity-7355432552829960192-Midy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'CCNA-1 Introduction to Networks',
    desc: 'Earned via Naan Mudhalvan',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_ccna-1-in-naan-mudhalvan-activity-7355433130863788032-F0l2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'CCNA-1 Introduction to Networks',
    desc: 'Course completion certificate provided by cisco networking academy',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_ccna-course-activity-7355439236210208768-0VLo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Introduction to Cybersecurity',
    desc: 'Earned via Cisco Networking Academy',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_introduction-to-cybersecurity-activity-7355440529527992320-J7Or?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Hewlett Packard Software Engineering Simulation',
    desc: 'Hands-on virtual internship via Forage',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_software-engineering-job-simulation-activity-7355993892657258497-U6p0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Getting started with MongoDB Atlas ',
    desc: 'Earned on MongoDb Atlas',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_getting-started-with-mongodb-atlas-activity-7355996060365815808-oY6j?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8s',
  },
  {
    title: 'Git, GitLab & GitHub Fundamentals for Software Developers',
    desc: 'Hands-on training by Udemy ',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_git-gitlab-github-activity-7348349338147811331-K0ri?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'AI Tools for UX/UI Designers and Web Designers',
    desc: 'Hands-on training by Udemy',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_uxdesign-uidesign-aifordesign-activity-7348999780301180928-W_-M?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Basics of Cloud Computing',
    desc: 'Hands-on training by Udemy',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_basics-of-cloud-computing-activity-7355994595266093056-rXie?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Internship — Codec Technologies',
    desc: 'Analyzed datasets, built ML models & visualizations in Python',
    link: 'https://www.linkedin.com/posts/hemachandiran-a-242527300_certificate-activity-7336019733063827456-uQRu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz2zpIBDskHvbvcMLu0kFPripUr2zc1DD8',
  },
  {
    title: 'Internship — Conprg Technologies',
    desc: 'Created websites as a full stack developer',
    link: 'https://example.com/conprg-certificate.pdf',
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-center"
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
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md border border-blue-100 dark:border-zinc-700 hover:shadow-blue-400/40 transition-all duration-300 block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            onClick={(e) => {
              const confirmed = window.confirm("Do you want to view this certificate?");
              if (!confirmed) {
                e.preventDefault();
              }
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
