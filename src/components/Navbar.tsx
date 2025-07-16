import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Hemachandiran</h1>
        <div className="flex gap-6 items-center">
          {['home', 'projects', 'about', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-blue-600 capitalize">
              {item}
            </a>
          ))}
          <button onClick={toggleTheme}>
            {dark ? '🌞' : '🌙'}
          </button>
          <a
            href="/Hemachandiran-Resume.pdf"
            download
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
