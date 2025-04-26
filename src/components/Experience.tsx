import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';

type TimelineItem = {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
};

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'Mid-Level DevOps Engineer',
      organization: 'McAdam Financial, Ohio, OH',
      period: 'Sep 2024 - Present',
      description: 'Led CI/CD automation for 20+ microservices using GitLab CI, Docker, and Kubernetes, reducing deployment time by 70%. Built multi-region, fault-tolerant AWS infrastructure with Terraform and CloudFormation. Migrated legacy Java apps to EKS with Docker and Helm. Strengthened security with VPC, ALBs, AWS WAF, and centralized secrets via AWS Secrets Manager. Implemented ELK, Prometheus, and Grafana for observability, and optimized costs using Boto3 scripting.',
      type: 'work',
    },
    {
      id: 2,
      title: 'DevOps Intern',
      organization: 'Campbellsville University, KY',
      period: 'Aug 2023 - Aug 2024',
      description: 'Designed cloud-native research platforms using AWS Lambda, S3, and DynamoDB. Built infrastructure as code with Terraform and GitHub Actions. Deployed Kubernetes clusters with EKS and Minikube, implemented blue-green deployments, and automated disaster recovery. Mentored students and contributed to internal secure storage platforms.',
      type: 'work',
    },
    {
      id: 3,
      title: 'Project Engineer',
      organization: 'Wipro Ltd., Hyderabad, India',
      period: 'Sep 2020 - Aug 2022',
      description: 'Developed backend microservices using Spring Boot and Hibernate, deployed across hybrid cloud with ECS and Fargate. Built CI/CD pipelines in Jenkins, automated deployments with Python scripts and AWS CLI, and integrated Kafka for asynchronous processing. Led toolchain migration to Git and standardized configuration management with Ansible.',
      type: 'work',
    },
    {
      id: 4,
      title: 'Manual Test Engineer (Intern)',
      organization: 'Ericsson, Sweden',
      period: 'Jul 2020 - Sep 2020',
      description: 'Authored functional and regression test cases, collaborated with developers in agile sprints, and assisted in REST API testing using Postman and Python. Provided QA reports and supported bug triage processes for the CRM 360 application.',
      type: "work"
    },
    {
      id: 5,
      title: 'Master\'s in Computer Science',
      organization: ' Campbellsville University, KY ',
      period: '2022 - 2024',
      description: 'Specialized in cloud-native DevOps, infrastructure as code, and CI/CD engineering. Earned my Master\'s with honors, where I developed scalable academic research tools using AWS Lambda and Kubernetes.',
      type: 'education',
    },
    {
      id: 6,
      title: 'Bachelor\'s in Electronics and Communication Engineering',
      organization: 'K L University',
      period: '2016 - 2020',
      description: 'Built a strong foundation in programming, data structures, algorithms, and system design. Participated in coding competitions, university tech fests, and collaborative engineering projects.',
      type: 'education',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    {item.type === 'work' ? (
                      <Briefcase size={16} className="text-white" />
                    ) : (
                      <BookOpen size={16} className="text-white" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div 
                    className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                  >
                    <div 
                      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <span 
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          item.type === 'work' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' 
                            : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                        }`}
                      >
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {item.organization} | {item.period}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;