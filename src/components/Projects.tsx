import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  type: 'Professional' | 'Academic' | 'Personal';
  highlights: string[];
  link?: string;
  github?: string;
}

function Projects() {
  const projects: Project[] = [
    {
      id: 'mezzedata-platform',
      title: 'MezzeData Analytics Platform',
      description: 'Developing a comprehensive data analytics platform for business intelligence and reporting.',
      technologies: ['React', 'TypeScript', 'Node.js', 'SQL', 'REST APIs'],
      status: 'In Progress',
      type: 'Professional',
      highlights: [
        'Improved data processing efficiency by 40%',
        'Implemented real-time dashboard functionality',
        'Led frontend development team of 3 developers'
      ]
    },
    {
      id: 'panthera-app',
      title: 'Panthera Student Lifestyle App',
      description: 'Award-winning student lifestyle application that won Company of the Year Competition.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Node.js'],
      status: 'Completed',
      type: 'Academic',
      highlights: [
        '🏆 Won Company of the Year Competition',
        '👑 Received Leadership Award',
        '🎯 Achieved Companies Choice Award',
        'Led team of 6 developers for 10 months'
      ],
      link: 'https://www.linkedin.com/company/panthera/'
    },
    {
      id: 'traffic-automation',
      title: 'Marketing Automation Tools',
      description: 'Developed Python automation tools for affiliate marketing and competitor analysis.',
      technologies: ['Python', 'VBA', 'Data Analysis', 'Web Scraping', 'APIs'],
      status: 'Completed',
      type: 'Professional',
      highlights: [
        'Increased traffic engagement by 30%',
        'Automated 80% of repetitive marketing tasks',
        'Built comprehensive competitor intelligence system'
      ]
    },
    {
      id: 'personal-website',
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and advanced animations.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      status: 'Completed',
      type: 'Personal',
      highlights: [
        'Fully responsive design',
        'Advanced animations and interactions',
        'Optimized for performance and SEO'
      ],
      github: 'https://github.com/dominichubble/Personal-Website'
    }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: Project['type']) => {
    switch (type) {
      case 'Professional': return 'bg-purple-100 text-purple-800';
      case 'Academic': return 'bg-orange-100 text-orange-800';
      case 'Personal': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-gray-800 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <div className="flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2 text-sm">Key Highlights:</h4>
              <ul className="space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <motion.li 
                    key={idx}
                    className="text-sm text-gray-600 flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
                  >
                    <span className="text-green-500 mt-1">•</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2 text-sm">Technologies:</h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {(project.link || project.github) && (
              <div className="flex gap-2 pt-2">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Project
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
