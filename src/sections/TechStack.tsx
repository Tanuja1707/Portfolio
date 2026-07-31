import { motion } from 'framer-motion';
import { Monitor, Server, Code2, Database, Palette, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings or index to Lucide React icons
const iconMap = [
  <Monitor size={22} />,
  <Server size={22} />,
  <Code2 size={22} />,
  <Database size={22} />,
  <Palette size={22} />,
  <Sparkles size={22} />,
];

export default function TechStack() {
  const categories = portfolioData.techStack;

  return (
    <section id="tech-stack" className="section-spacing bg-skills-gradient border-y border-border-portfolio/20 animate-fade-in">
      <div className="container-portfolio">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-caption-text font-bold uppercase tracking-widest text-text-accent block">Tech Stack</span>
          <h2 className="text-section-heading">My Developer Toolkit</h2>
          <p className="text-body-text text-text-secondary leading-relaxed">
            The technologies, tools, and frameworks I use to design, develop, and deliver modern digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: category.delay }}
              className="card-skills-custom p-6 md:p-8 shadow-premium hover:shadow-premium-hover hover:border-color-muted-lavender hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-color-muted-lavender/25 to-color-mauve-pink/15 text-text-accent shadow-sm animate-float-slow">
                  {iconMap[idx]}
                </div>
                <div>
                  <h3 className="text-subtitle-text font-bold text-text-primary">{category.title}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.techs.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2.5 rounded-xl border border-border-portfolio bg-card-portfolio/60 text-caption-text font-semibold text-text-primary shadow-sm hover:border-color-muted-lavender hover:bg-hover-portfolio transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
