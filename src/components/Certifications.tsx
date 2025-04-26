import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified DevOps Engineer - Professional',
      image: 'https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png',
      issuer: 'Amazon Web Services',
      date: '2024'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect - Professional',
      image: 'https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect - Associate',
      image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      id: 4,
      title: 'Microsoft Certified: Azure DevOps Engineer Expert',
      image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
      issuer: 'Microsoft',
      date: '2023'
    },
    {
      id: 5,
      title: 'Microsoft Certified: Azure Solutions Architect Expert',
      image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
      issuer: 'Microsoft',
      date: '2023'
    },
    {
      id: 6,
      title: 'NPTEL: Data Science for Engineers',
      image: 'https://archive.nptel.ac.in/assets/nptel_assets/images/nptel_logo_128.png',
      issuer: 'NPTEL',
      date: '2022'
    },
    {
      id: 7,
      title: 'BHEL Industry Internship',
      image: 'https://www.bhel.com/sites/all/themes/bhel/images/bhel-logo.jpg',
      issuer: 'BHEL Hyderabad',
      date: '2019'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;