import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const achievements = portfolioData.achievements;
  const learning = portfolioData.learning;

  return (
    <section id="achievements" className="section-spacing bg-achievements-gradient border-t border-border-portfolio/30 relative overflow-hidden">
      {/* Decorative Blurred Glow Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-tr from-color-muted-lavender/5 to-color-soft-pink/5 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="container-portfolio relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-caption-text font-bold uppercase tracking-widest text-text-accent block">Achievements & Learning</span>
          <h2 className="text-section-heading">
            Milestones & Educational Focus
          </h2>
          <p className="text-body-text text-text-secondary leading-relaxed">
            Highlighting quiz victories, hands-on workshop certifications, internship applications, and current learning targets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-[28px] border border-border-portfolio bg-card-portfolio/55 backdrop-blur-xl shadow-premium hover:shadow-premium-hover hover:border-color-muted-lavender transition-all duration-300 flex flex-col card-achievements relative overflow-hidden"
          >
            {/* Subtle blurred corner gradient blob */}
            <div className="absolute -top-4 -right-4 w-36 h-36 bg-[#CC8DB3]/8 dark:bg-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-color-muted-lavender/25 to-color-mauve-pink/15 text-text-accent shadow-sm animate-float-slow icon-glow-bg">
                <Award size={22} />
              </div>
              <h3 className="text-subtitle-text font-extrabold text-text-primary">Achievements</h3>
            </div>

            <ul className="space-y-4 text-[14px] text-text-secondary leading-relaxed flex-1 flex flex-col justify-center relative z-10">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 group cursor-default">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#837AB6] to-[#CC8DB3] shrink-0 mt-2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_8px_#837AB6] group-hover:from-[#9D85B6] group-hover:to-[#F6A5C0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card: Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 md:p-8 rounded-[28px] border border-border-portfolio bg-card-portfolio/55 backdrop-blur-xl shadow-premium hover:shadow-premium-hover hover:border-color-muted-lavender transition-all duration-300 flex flex-col card-learning relative overflow-hidden"
          >
            {/* Subtle blurred corner gradient blob */}
            <div className="absolute -top-4 -right-4 w-36 h-36 bg-[#837AB6]/8 dark:bg-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-color-muted-lavender/25 to-color-mauve-pink/15 text-text-accent shadow-sm animate-float-slow-delayed icon-glow-bg">
                <BookOpen size={22} />
              </div>
              <h3 className="text-subtitle-text font-extrabold text-text-primary">Learning & Interests</h3>
            </div>

            <ul className="space-y-4 text-[14px] text-text-secondary leading-relaxed flex-1 flex flex-col justify-center relative z-10">
              {learning.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 group cursor-default">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#837AB6] to-[#CC8DB3] shrink-0 mt-2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_8px_#837AB6] group-hover:from-[#9D85B6] group-hover:to-[#F6A5C0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
