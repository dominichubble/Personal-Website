import { motion } from 'framer-motion';

function ContentCards() {
  const technicalSkills = [
    'React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'HTML/CSS',
    'Git/GitHub', 'SQL', 'MongoDB', 'RESTful APIs', 'Machine Learning', 'AI/ML'
  ];

  const softSkills = [
    'Project Management', 'Leadership', 'Team Collaboration', 'Problem Solving',
    'Communication', 'Agile/Scrum', 'Critical Thinking', 'Mentoring'
  ];

  const achievements = [
    '🏆 Company of the Year Competition Winner (Panthera)',
    '👥 Led cross-functional teams of 5+ developers',
    '📈 Increased traffic engagement by 30% at Loads of Traffic',
    '🎓 Maintaining First-Class Honours at Loughborough University',
    '💼 Currently employed while studying full-time'
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Technical Skills */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-blue-600">💻</span>
          Technical Skills
        </motion.h3>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {technicalSkills.map((skill, index) => (
            <motion.span 
              key={skill}
              className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-600 transition-colors cursor-pointer"
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Soft Skills & Leadership */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-green-600">🤝</span>
          Soft Skills
        </motion.h3>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {softSkills.map((skill, index) => (
            <motion.span 
              key={skill}
              className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-green-600 transition-colors cursor-pointer"
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Key Achievements */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-yellow-600">🎯</span>
          Key Achievements
        </motion.h3>
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="text-sm text-gray-600 flex items-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}
            >
              <span className="text-xs mt-1">•</span>
              <span>{achievement}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContentCards;
