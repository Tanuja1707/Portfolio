import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, Download } from 'lucide-react';
import { getTheme, setTheme } from '../styles/theme';
import type { ThemeMode } from '../styles/theme';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('system');

  // Monitor scroll for active section highlight and background opacity
  useEffect(() => {
    setCurrentTheme(getTheme());

    const handleScroll = () => {

      // 2. Scroll Spy: Active section calculation
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      let current = '';
      sections.forEach((section) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${section.id}`;
          }
        }
      });
      
      // Fallback: If scrolled near the bottom, select Contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = '#contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (theme: ThemeMode) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  const toggleThemeCycle = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'system' : 'light';
    handleThemeChange(nextTheme);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4 md:px-6 transition-all duration-300`}
    >
      <div
        className="w-full h-[72px] mx-auto rounded-[20px] border border-border-portfolio/55 bg-card-portfolio/55 backdrop-blur-xl shadow-premium px-6 flex items-center justify-between transition-all duration-300"
      >
        {/* Left Section: Logo */}
        <a href="#hero" onClick={(e) => handleScrollToSection(e, '#hero')} className="flex items-center gap-2 group">
          <span className="text-xl font-extrabold tracking-tight text-gradient-primary group-hover:scale-105 transition-transform duration-300">
            Tanuja.
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-border-portfolio/20 p-1 rounded-full border border-border-portfolio/30">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-small-text font-semibold transition-all duration-300 ${
                  isActive ? 'text-[#250E2C] dark:text-[#250E2C]' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white/50 dark:bg-[#FCFBFD] rounded-full shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Resume Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cyclic Theme Toggle Button */}
          <button
            onClick={toggleThemeCycle}
            className="w-10 h-10 rounded-full border border-border-portfolio flex items-center justify-center hover:bg-hover-portfolio transition-all duration-300 relative group"
            aria-label="Cycle theme"
          >
            {currentTheme === 'light' && <Sun size={18} className="text-text-accent" />}
            {currentTheme === 'dark' && <Moon size={18} className="text-text-accent" />}
            {currentTheme === 'system' && <Monitor size={18} className="text-text-secondary" />}
            {/* Tooltip to show active theme */}
            <span className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] bg-card-portfolio border border-border-portfolio shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none capitalize">
              Theme: {currentTheme}
            </span>
          </button>

          <a href="/resume/Resume.pdf" download="Tanuja_Resume.pdf" className="btn-primary flex items-center gap-2 px-5 py-2 text-[14px]">
            <Download size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggler cycle for Mobile (Quick Tap) */}
          <button
            onClick={toggleThemeCycle}
            className="w-10 h-10 rounded-full border border-border-portfolio flex items-center justify-center hover:bg-hover-portfolio"
          >
            {currentTheme === 'light' && <Sun size={18} className="text-text-accent" />}
            {currentTheme === 'dark' && <Moon size={18} className="text-text-accent" />}
            {currentTheme === 'system' && <Monitor size={18} className="text-text-secondary" />}
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-border-portfolio flex items-center justify-center hover:bg-hover-portfolio"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full mt-2 rounded-[20px] border border-border-portfolio/55 bg-card-portfolio/55 backdrop-blur-xl shadow-premium overflow-hidden z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`text-subtitle-text font-semibold tracking-wide py-1 border-b border-border-portfolio/20 transition-all ${
                      isActive ? 'text-text-accent pl-2' : 'text-text-secondary hover:text-text-primary pl-0'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/resume/Resume.pdf"
                download="Tanuja_Resume.pdf"
                className="btn-primary w-full mt-4 flex items-center justify-center gap-2.5"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
