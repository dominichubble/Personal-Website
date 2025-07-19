import CallToAction from './components/CallToAction';
import ContentCards from './components/ContentCards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MarqueeDemo from './components/Marquee';
import Profile from './components/ProfileSimple';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Profile />
        <ContentCards />
        <Projects />
        <MarqueeDemo />
        <Timeline />
      </div>
      
      <CallToAction />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App


