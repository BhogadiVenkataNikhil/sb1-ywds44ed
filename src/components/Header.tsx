import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      } dark:text-white`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-tight">
          <a href="#hero" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Venkata's Portfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#about" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Experience
          </a>
          <a href="#certifications" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Certifications
          </a>
          <a href="#contact" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </a>
          <button 
            onClick={toggleDarkMode} 
            className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode} 
            className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </a>
          <a 
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Skills
          </a>
          <a 
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Experience
          </a>
          <a 
            href="#certifications"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Certifications
          </a>
          <a 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;