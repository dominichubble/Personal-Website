import { motion } from 'framer-motion';

function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div 
      className="text-center mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src="public/assets/pfp.jpeg" 
          alt="Dominic Hubble" 
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white object-cover transition-transform duration-300"
        />
      </motion.div>
      
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-4"
        variants={itemVariants}
      >
        Dominic Hubble
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-600 mb-6 italic"
        variants={itemVariants}
      >
        Student of Computer Science at Loughborough University, UK
      </motion.p>
      
      {/* Social Links */}
      <motion.div 
        className="flex justify-center space-x-6 mb-8"
        variants={itemVariants}
      >
        <motion.a 
          href="https://github.com/dominichubble" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300 font-medium w-30"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          GitHub
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/dominichubble" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 font-medium w-30"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          LinkedIn
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Profile;
