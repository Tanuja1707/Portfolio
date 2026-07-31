import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import CountUp from '../components/CountUp';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { title, company, date, responsibilities, technologies, stats, projects } = portfolioData.experience;

  return (
    <section id="experience" className="section-spacing bg-experience-gradient border-y border-border-portfolio/20 relative overflow-hidden">
      {/* Decorative Blurred Glow Blobs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-color-muted-lavender/10 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-color-mauve-pink/10 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container-portfolio relative z-10">
        
        {/* Row 1: Section Header and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-caption-text font-bold uppercase tracking-widest text-text-accent block">PROFESSIONAL EXPERIENCE</span>
            <h2 className="text-section-heading text-text-primary">
              Building Industry-Level Software Solutions
            </h2>
            <p className="text-body-text text-text-secondary leading-relaxed">
              Through modern development practices, secure architectures, and collaborative engineering pipelines at fast-growth startups.
            </p>
          </div>

          {/* Right Column: Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="card-glass p-5 flex flex-col justify-center text-center rounded-[20px]"
                >
                  <span className="text-[28px] md:text-[34px] font-extrabold text-gradient-primary leading-none mb-1">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </span>
                  <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2: Experience Detail and Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Timeline & Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="relative p-6 rounded-[28px] card-internship-intern overflow-hidden">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-color-muted-lavender/30 via-color-mauve-pink/20 to-color-soft-pink/30 rounded-[28px] blur-[1px] -z-10 dark:block hidden" />
              <div className="absolute inset-0 radial-glow-topleft pointer-events-none rounded-[28px]" />
              <div className="absolute -top-4 -left-4 w-36 h-36 bg-[#CC8DB3]/6 dark:bg-transparent rounded-full blur-2xl pointer-events-none z-0" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-card-title text-text-primary">{title}</h3>
                    <p className="text-small-text text-text-accent font-bold">{company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-caption-text text-text-secondary bg-white/5 border border-white/10 px-3 py-1.5 rounded-full shadow-sm">
                    <Calendar size={12} className="text-text-accent" />
                    <span className="font-medium">{date}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-3.5 mb-8 text-[14px] text-text-secondary leading-relaxed">
                  {responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-text-accent shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="space-y-3">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-text-secondary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-caption-text font-medium text-text-primary shadow-inner">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Project cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* CRM Project */}
            <motion.div
              className="p-6 rounded-[24px] card-experience-crm-card overflow-hidden group"
            >
              {/* Subtle blurred corner gradient blob */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#837AB6]/6 dark:bg-transparent rounded-full blur-2xl pointer-events-none z-0" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-accent px-2 py-0.5 rounded bg-white/5 border border-white/10">{projects.crm.badge}</span>
                <h3 className="text-card-title text-text-primary mt-2 mb-2">{projects.crm.title}</h3>
                <p className="text-small-text text-text-secondary leading-relaxed mb-4">
                  {projects.crm.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {projects.crm.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 border border-white/5 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ledgerly Project */}
            <motion.div
              className="p-6 rounded-[24px] card-experience-ledgerly-card overflow-hidden group"
            >
              {/* Subtle blurred corner gradient blob */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#837AB6]/6 to-[#CC8DB3]/6 dark:bg-transparent rounded-full blur-2xl pointer-events-none z-0" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-accent px-2 py-0.5 rounded bg-white/5 border border-white/10">{projects.ledgerly.badge}</span>
                <h3 className="text-card-title text-text-primary mt-2 mb-2">{projects.ledgerly.title}</h3>
                <p className="text-small-text text-text-secondary leading-relaxed mb-4">
                  {projects.ledgerly.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {projects.ledgerly.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 border border-white/5 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
