import React from 'react';

type Skill = {
  name: string;
  level: number;
  category: 'Cloud Platforms' | 'CI/CD Tools' | 'tools' | 'soft';
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'AWS', level: 90, category: 'Cloud Platforms' },
    { name: 'Azure', level: 92, category: 'Cloud Platforms' },
    { name: 'Jenkins', level: 95, category: 'CI/CD Tools' },
    { name: 'GitLab/GitHub Actions', level: 90, category: 'CI/CD Tools' },
    { name: 'Azure DevOps', level: 90, category: 'CI/CD Tools' },
    { name: 'Terraform', level: 80, category: 'IaC & Config Mgmt ' },
    { name: 'Ansible', level: 80, category: 'IaC & Config Mgmt ' },
    { name: 'CloudFormation', level: 75, category: 'IaC & Config Mgmt ' },
    { name: 'ARM Templates', level: 70, category: 'IaC & Config Mgmt ' },
    { name: 'Docker', level: 95, category: 'Containers ' },
    { name: 'Kubernetes', level: 85, category: 'Containers ' },
    { name: 'Helm', level: 65, category: 'Containers ' },
    { name: 'Python', level: 90, category: 'Scripting ' },
    { name: 'Bash', level: 80, category: 'Scripting ' },
    { name: 'Powershell', level: 90, category: 'Scripting ' },
    { name: 'Prometheus', level: 80, category: 'Monitoring & Logs ' },
    { name: 'Grafana', level: 82, category: 'Monitoring & Logs ' },
    { name: 'ELK Stack,', level: 85, category: 'Monitoring & Logs ' },
    { name: 'Azure Monitor', level: 95, category: 'Monitoring & Logs ' },
    { name: 'Git/GitHub', level: 95, category: 'Version Control  ' },
    { name: 'Bitbucket', level: 89, category: 'Version Control  ' },
    { name: 'SonarQube', level: 82, category: 'Other Tools   ' },
    { name: 'Nexus', level: 82, category: 'Other Tools   ' },
    { name: 'JIRA', level: 95, category: 'Other Tools   ' },
    { name: 'Linux', level: 85, category: 'Other Tools   ' },
  ];

  const categories = [
    { id: 'Cloud Platforms', name: 'Cloud Platforms' },
    { id: 'CI/CD Tools', name: 'CI/CD Tools' },
    { id: 'IaC & Config Mgmt ', name: 'IaC & Config Mgmt ' },
    { id: 'Containers ', name: 'Containers ' },
    { id: 'Monitoring & Logs ', name: 'Monitoring & Logs  ' },
    { id: 'Version Control  ', name: 'Version Control  ' },
    { id: 'Other Tools   ', name: 'Other Tools   ' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          
          <div className="space-y-12">
            {categories.map(category => (
              <div key={category.id} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map(skill => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:animate-pulse transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;