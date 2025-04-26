import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">Venkata's Portfolio</div>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:VenkataNikhilBhogadi22@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
          </nav>
          
          <div className="text-sm text-gray-500">
            © {currentYear} . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;