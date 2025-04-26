import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a Developer, DevOps Engineer, and Problem Solver";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 py-20 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Hello, I'm Venkata Bhogadi
          </h1>
          <div className="h-8 md:h-10">
            <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-8 min-h-[30px]">
              {typedText}
              <span className="animate-blink">|</span>
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I build scalable, secure, and seamless cloud-native experiences.
My passion lies in turning complex infrastructure into simple, automated, and reliable systems through clean code and thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl active:bg-blue-800"
            >
              About Me
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-blue-500" size={20} />
      </a>
    </section>
  );
};

export default Hero;