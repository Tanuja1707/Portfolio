import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { bio, interests, infoCards } = portfolioData.about;

  return (
    <section id="about" className="section-spacing bg-about-gradient border-y border-border-portfolio/40 overflow-hidden relative">
      {/* Soft Blurred Gradient Blobs */}
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-gradient-to-tr from-color-muted-lavender/10 to-color-soft-pink/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-color-mauve-pink/10 to-color-muted-lavender/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container-portfolio relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-caption-text font-bold uppercase tracking-widest text-text-accent block mb-2">ABOUT ME</span>
          <h2 className="text-section-heading">
            Passionate About Building <span className="text-gradient-primary">Digital Experiences</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About Me content */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body-text text-text-secondary leading-relaxed">
              {bio}
            </p>

            {/* Career Interests Tag Chips */}
            <div className="space-y-3">
              <h4 className="text-caption-text font-bold uppercase tracking-wider text-text-secondary">Career Interests</h4>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl border border-border-portfolio bg-card-portfolio/40 text-[13px] font-medium text-text-primary shadow-sm hover:border-color-muted-lavender transition-colors duration-250 cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information Cards Stack (2x2) */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Information Cards Stack (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="card-about-custom p-5 hover:border-color-muted-lavender transition-all duration-300 shadow-premium"
                >
                  <h4 className="font-bold text-text-primary text-[15px] mb-1">{info.title}</h4>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{info.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
