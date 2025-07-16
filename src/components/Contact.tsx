import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import toast from 'react-hot-toast';

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
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Feel free to reach out!</p>

      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-2 rounded border dark:bg-gray-800" />
        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-2 rounded border dark:bg-gray-800" />
        <textarea name="message" rows="4" placeholder="Your Message" required className="w-full p-2 rounded border dark:bg-gray-800"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
          Send Message
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://wa.me/919962098084"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          href="mailto:hemachandiran5002@gmail.com"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
}