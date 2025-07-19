import { motion } from 'framer-motion';
import ContentCards from './components/ContentCards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MarqueeDemo from './components/Marquee';
import Profile from './components/Profile';
import ScrollToTop from './components/ScrollToTop';
import Timeline from './components/Timeline';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'anticipate' as const,
    duration: 0.8,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div 
      className="min-h-screen bg-slate-50"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      
      {/* Main Content */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Profile />
        <ContentCards />
        <MarqueeDemo />
        <Timeline />
      </motion.div>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App


