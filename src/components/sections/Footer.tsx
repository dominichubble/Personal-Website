import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 overflow-hidden">
      <div className="text-center relative">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 20 - 10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <motion.p 
          className="font-medium tracking-wide relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &copy; 2025 Dominic Hubble. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
