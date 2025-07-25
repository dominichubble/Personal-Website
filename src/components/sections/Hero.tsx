import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Developer & Tech Leader';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-slate-800 text-white overflow-hidden min-h-screen">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
      
      <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {typedText}
          <motion.span
            className="inline-block w-1 h-12 md:h-16 bg-blue-500 ml-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl font-light tracking-wide text-center text-slate-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Building innovative solutions • Leading high-performing teams • Driving digital transformation
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Currently at MezzeData Limited</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Final Year CS Student</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Award-Winning Project Leader</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 w-24 h-1 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </div>
    </div>
  );
}

export default Hero;
