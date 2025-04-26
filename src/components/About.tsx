import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/VenkataBhogadi/portfolio/main/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-auto transform transition-transform hover:scale-105 duration-300" 
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, I'm Bhogadi Venkata Nikhil, a passionate and results-driven DevOps Engineer with over 6 years of experience in building scalable, secure, and automated cloud infrastructures. My work blends cutting-edge cloud-native technologies with automation strategies to streamline development workflows and enhance system reliability.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently, I work at McAdam Financial in Ohio, where I lead DevOps initiatives that power enterprise-grade applications using AWS, Azure, Docker, Kubernetes, Terraform, and modern CI/CD tools. From designing multi-region fault-tolerant systems to implementing full-stack observability and security hardening, I thrive on solving complex infrastructure challenges.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting with new recipes in the kitchen.
              </p>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
                >
                  Let's work together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;