import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import { initTheme } from './styles/theme';
import './App.css';

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Floating Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Achievements />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
