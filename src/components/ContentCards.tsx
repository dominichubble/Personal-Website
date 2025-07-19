import { motion } from 'framer-motion';

function ContentCards() {
  const skills = ['React', 'TypeScript', 'JavaScript', 'Python', 'Machine Learning', 'AI'];

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
      className="grid md:grid-cols-2 gap-8 mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Areas of Interest */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <motion.h3 
          className="text-2xl font-bold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Areas of Interest
        </motion.h3>
        <motion.p 
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Software Development, Leadership, Problem Solving, Project Management, Deep Learning 
        </motion.p>
      </motion.div>

      {/* Skills & Qualifications */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <motion.h3 
          className="text-2xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Skills & Education
        </motion.h3>
        
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h4 className="font-semibold text-gray-700 mb-2">Qualifications:</h4>
          <p className="text-gray-600">BSc in Computer Science (In Progress)</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h4 className="font-semibold text-gray-700 mb-2">Technical Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContentCards;
