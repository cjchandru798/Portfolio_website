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

  // Correct PDF path using Vite base URL
  const resumePath = `${import.meta.env.BASE_URL}Hemachandiran-Resume.pdf`;

  return (
    <nav className="fixed w-full backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Hemachandiran</h1>

        {/* Center Nav Links */}
        <div className="flex gap-6 text-sm md:text-base">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors duration-300"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Right Section: Theme + Resume */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-110 transition"
            title="Toggle Theme"
          >
            {dark ? '🌞' : '🌙'}
          </button>

          {/* Resume Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowResumeMenu((prev) => !prev)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition flex items-center gap-1"
            >
              📄 Resume ▾
            </button>

            {showResumeMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10 animate-fade-in">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🔍 <span className="font-medium">Preview</span>
                </a>
                <a
                  href={resumePath}
                  download
                  className="block px-4 py-3 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ⬇️ <span className="font-medium">Download</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
