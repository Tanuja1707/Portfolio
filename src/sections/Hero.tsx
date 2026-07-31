import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Import Assets
import profilePhoto from '../assets/images/Profilephoto.png';
import githubIcon from '../assets/icons/Github.svg';
import linkedinIcon from '../assets/icons/Linkedn.svg';
import mailIcon from '../assets/icons/Mail.svg';

export default function Hero() {
  const { tagline, name, title, subtitle, description, socials } = portfolioData.hero;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0 bg-hero-gradient"
    >
      {/* Soft Blurred Gradient Blobs */}
      <div className="bg-gradient-hero-blob bg-gradient-hero-blob-1 opacity-25" />
      <div className="bg-gradient-hero-blob bg-gradient-hero-blob-2 opacity-25" />
      <div className="bg-gradient-hero-blob bg-gradient-hero-blob-3 opacity-25" />

      <div className="container-portfolio relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left side: Text content & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-card-portfolio/60 text-caption-text backdrop-blur-md shadow-premium hero-badge">
                <span className="w-2.5 h-2.5 rounded-full animate-ping hero-badge-dot" />
                <span className="hero-tagline uppercase tracking-wider">{tagline}</span>
              </div>
            </motion.div>

            {/* Headings */}
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants} 
                className="hero-primary-text leading-tight tracking-tight"
              >
                {title}<span className="hero-name-highlight">{name}</span>
              </motion.h1>
              <motion.h2 
                variants={itemVariants} 
                className="hero-secondary-text leading-tight tracking-tight"
              >
                {subtitle}
              </motion.h2>
            </div>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants} 
              className="hero-subheading max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center justify-center font-bold px-7 py-3 rounded-2xl shadow-premium text-small-text"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    const topOffset = (contactSection as HTMLElement).offsetTop - 80;
                    window.scrollTo({
                      top: topOffset,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="btn-secondary flex items-center justify-center font-bold px-7 py-3 rounded-2xl shadow-premium text-small-text"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-6">
              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                whileHover={{ scale: 1.15, translateY: -4 }}
                whileTap={{ scale: 0.92 }}
              >
                <img src={githubIcon} alt="GitHub" />
              </motion.a>
              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                whileHover={{ scale: 1.15, translateY: -4 }}
                whileTap={{ scale: 0.92 }}
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </motion.a>
              <motion.a
                href={socials.email}
                className="social-icon-btn"
                whileHover={{ scale: 1.15, translateY: -4 }}
                whileTap={{ scale: 0.92 }}
              >
                <img src={mailIcon} alt="Email" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side: Premium profile image card */}
          <div className="lg:col-span-5 flex justify-center relative mt-12 lg:mt-0">
            
            {/* Outer Decorative Slow Orbit/Float Glow */}
            <motion.div
              className="absolute w-72 h-72 md:w-80 md:h-80 bg-gradient-to-tr from-muted-lavender/30 to-soft-pink/30 rounded-full blur-3xl opacity-50 -z-10"
              animate={{
                scale: [1, 1.15, 1],
                x: [0, 15, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Glassmorphic Card Frame with slow floating animation */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0],
                scale: 1 
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                scale: { duration: 0.6, delay: 0.4 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              }}
              whileHover={{ 
                scale: 1.03,
                rotateZ: 0.5,
                transition: { duration: 0.3 } 
              }}
              className="relative p-3.5 rounded-[32px] border border-border-portfolio/60 bg-card-portfolio/55 backdrop-blur-xl shadow-premium max-w-sm w-full"
            >
              {/* Glow behind image border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-color-muted-lavender via-color-mauve-pink to-color-soft-pink rounded-[32px] opacity-40 blur-[2px] -z-10" />
              
              {/* Inner Image with 32px-style rounded border */}
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={profilePhoto}
                  alt="Tanuja"
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Small Floating Decorative shapes */}
            <motion.div
              className="absolute top-4 right-4 w-6 h-6 border border-border-portfolio rounded-lg bg-card-portfolio/80 backdrop-blur-sm -z-10 shadow-premium"
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-8 left-4 w-4 h-4 rounded-full bg-gradient-to-r from-color-muted-lavender to-color-mauve-pink -z-10 opacity-60"
              animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
