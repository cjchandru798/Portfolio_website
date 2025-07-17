import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowResumeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Hemachandiran</h1>

        <div className="flex items-center gap-6">
          {['home', 'projects', 'about', 'skills', 'testimonials', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors duration-300"
            >
              {section}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-110 transition"
            title="Toggle Theme"
          >
            {dark ? '🌞' : '🌙'}
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowResumeMenu((prev) => !prev)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Resume ▾
            </button>

            {showResumeMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10">
                <a
                  href="/Hemachandiran-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🔍 Preview Resume
                </a>
                <a
                  href="/Hemachandiran-Resume.pdf"
                  download
                  className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ⬇️ Download Resume
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
