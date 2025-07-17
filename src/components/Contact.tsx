import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  FaWhatsapp,
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ja5eovk', 'template_k5bs7zc', form.current, 'xZCaIA8PhYr7Ag53N')
      .then(() => {
        toast.success('✅ Message sent successfully!');
        form.current.reset();
      }, (error) => {
        toast.error('❌ Failed to send message: ' + error.text);
      });
  };

  return (
    <>
      {/* ────────────── Contact Section ────────────── */}
      <motion.section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">Contact</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* ───── Left: Contact Info ───── */}
          <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6 text-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>

            <div className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <span>Hemachandiran</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:hemachandiran5002@gmail.com" className="hover:underline">
                hemachandiran5002@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <a href="tel:+919962098084" className="hover:underline">
                +91 99620 98084
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>India</span>
            </div>
          </div>

          {/* ───── Right: Contact Form ───── */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-5"
          >
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-2 rounded-md border dark:border-gray-700 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-2 rounded-md border dark:border-gray-700 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-md border dark:border-gray-700 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-2 rounded-md flex justify-center items-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* ────────────── Footer Social Area ────────────── */}
      <footer className="bg-zinc-950 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4">
          <div className="flex gap-6 text-xl">
            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/919962098084"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:hemachandiran5002@gmail.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-sm text-gray-400 text-center">
            © 2025 Hemachandiran. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
