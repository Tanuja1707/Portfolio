import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import InteractiveExpandShowcase from '../components/InteractiveExpandShowcase';
import SingleImageShowcase from '../components/SingleImageShowcase';
import { portfolioData } from '../data/portfolioData';

// CRM Screenshots
import crmLogin from '../assets/images/crm/CRM-loginpg.png';

// Ledgerly Screenshots
import ledgerlyLogin from '../assets/images/ledgerly/Ledgerly-loginpg.png';
import ledgerlyDashboard from '../assets/images/ledgerly/Ledgerly-dashboard.png';
import ledgerlyCreateInvoice from '../assets/images/ledgerly/Ledgerly-createinvoice.png';
import ledgerlyReport from '../assets/images/ledgerly/Ledgerly-report.png';
import ledgerlySettings from '../assets/images/ledgerly/Ledgerly-settings.png';

// VIRASAT Screenshots
import virasatHome from '../assets/images/virasat/Virasat - Homepg.png';
import virasatExplore from '../assets/images/virasat/Virasat - Explore.png';
import virasatGames from '../assets/images/virasat/Virasat - Games.png';
import virasatStories from '../assets/images/virasat/Virasat - Stories.png';
import virasatHindi from '../assets/images/virasat/Virasat - Hindi Language Support.png';

export default function Projects() {
  const [crmTab, setCrmTab] = useState<'features' | 'challenges' | 'outcome'>('features');
  const [ledgerlyTab, setLedgerlyTab] = useState<'features' | 'challenges' | 'outcome'>('features');
  const [virasatTab, setVirasatTab] = useState<'features' | 'challenges' | 'outcome'>('features');

  const { crm: crmData, ledgerly: ledgerlyData, virasat: virasatData } = portfolioData.projects;

  const ledgerlyScreenshots = [
    { src: ledgerlyLogin, label: "Login Page" },
    { src: ledgerlyDashboard, label: "Dashboard" },
    { src: ledgerlyCreateInvoice, label: "Create Invoice" },
    { src: ledgerlyReport, label: "Reports & Analytics" },
    { src: ledgerlySettings, label: "Settings" }
  ];

  const virasatScreenshots = [
    { src: virasatHome, label: "Home Page" },
    { src: virasatExplore, label: "Explore Heritage" },
    { src: virasatGames, label: "Games & Quizzes" },
    { src: virasatStories, label: "Cultural Stories" },
    { src: virasatHindi, label: "Hindi Support" }
  ];

  return (
    <section id="projects" className="relative section-spacing bg-projects-gradient overflow-hidden">
      {/* Floating Shapes & Blurred Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-tr from-color-muted-lavender/5 to-color-soft-pink/5 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-color-mauve-pink/5 to-color-muted-lavender/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container-portfolio relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-caption-text font-bold uppercase tracking-widest text-text-accent block">Featured Projects</span>
          <h2 className="text-section-heading">
            Building Scalable, Modern & User-Centric Solutions
          </h2>
          <p className="text-body-text text-text-secondary leading-relaxed">
            Real-world systems engineered during my internship, showcasing architecture, clean workflows, and SaaS design systems.
          </p>
        </div>

        {/* Alternating Projects Layout */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* Project 01: CRM - Card on Left, Stacked screenshots on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 w-full">
              {/* Project Card 1: CRM System */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="card-projects-custom p-6 md:p-8 shadow-premium hover:border-color-muted-lavender transition-all duration-300 w-full"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-accent px-2.5 py-1 rounded-full bg-white/5 border border-white/10">MarTechAdda Internship</span>
                <h3 className="text-card-title text-text-primary mt-4 mb-2">{crmData.title}</h3>
                
                <p className="text-small-text text-text-secondary leading-relaxed mb-6">
                  {crmData.description}
                </p>

                {/* Tech Stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {crmData.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-card-portfolio/40 border border-border-portfolio/20 text-caption-text font-medium text-text-secondary shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Tabs */}
                <div className="border border-border-portfolio rounded-2xl overflow-hidden bg-card-portfolio/40 backdrop-blur-md mb-8">
                  {/* Tab buttons */}
                  <div className="flex border-b border-border-portfolio bg-card-portfolio/20">
                    {(['features', 'challenges', 'outcome'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setCrmTab(tab)}
                        className={`flex-1 py-2.5 text-caption-text font-bold uppercase tracking-wider transition-colors duration-250 ${
                          crmTab === tab 
                            ? 'text-text-primary bg-card-portfolio/60 border-b border-text-accent' 
                            : 'text-text-secondary hover:text-text-primary hover:bg-card-portfolio/30'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-5 min-h-[160px] flex flex-col justify-center">
                    {crmTab === 'features' && (
                      <ul className="space-y-2 text-[13px] text-text-secondary">
                        {crmData.tabs.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {crmTab === 'challenges' && (
                      <ul className="space-y-2 text-[13px] text-text-secondary">
                        {crmData.tabs.challenges.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-accent shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {crmTab === 'outcome' && (
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {crmData.tabs.outcome}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7 flex justify-center w-full">
              <SingleImageShowcase
                src={crmLogin}
                alt="Login Page"
                projectName="CRM Project Management"
                categoryLabel="CRM"
              />
            </div>
          </div>

          {/* Subtle Separation Line */}
          <div className="border-t border-border-portfolio/10 w-full my-8 lg:my-12" />

          {/* Project 02: Ledgerly - Screenshots on Left, Card on Right on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex justify-center w-full order-2 lg:order-1">
              <InteractiveExpandShowcase
                screenshots={ledgerlyScreenshots}
                projectName="Ledgerly Billing & Business Management"
                categoryLabel="Ledgerly"
              />
            </div>
            <div className="lg:col-span-5 w-full order-1 lg:order-2">
              {/* Project Card 2: Ledgerly */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="card-projects-custom p-6 md:p-8 shadow-premium hover:border-color-muted-lavender transition-all duration-300 w-full"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-accent px-2.5 py-1 rounded-full bg-white/5 border border-white/10">MarTechAdda Internship</span>
                <h3 className="text-card-title text-text-primary mt-4 mb-2">{ledgerlyData.title}</h3>
                
                <p className="text-small-text text-text-secondary leading-relaxed mb-6">
                  {ledgerlyData.description}
                </p>

                {/* Tech Stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {ledgerlyData.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-card-portfolio/40 border border-border-portfolio/20 text-caption-text font-medium text-text-secondary shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Tabs */}
                <div className="border border-border-portfolio rounded-2xl overflow-hidden bg-card-portfolio/40 backdrop-blur-md mb-8">
                  {/* Tab buttons */}
                  <div className="flex border-b border-border-portfolio bg-card-portfolio/20">
                    {(['features', 'challenges', 'outcome'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setLedgerlyTab(tab)}
                        className={`flex-1 py-2.5 text-caption-text font-bold uppercase tracking-wider transition-colors duration-250 ${
                          ledgerlyTab === tab 
                            ? 'text-text-primary bg-card-portfolio/60 border-b border-text-accent' 
                            : 'text-text-secondary hover:text-text-primary hover:bg-card-portfolio/30'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-5 min-h-[160px] flex flex-col justify-center">
                    {ledgerlyTab === 'features' && (
                      <ul className="space-y-2 text-[13px] text-text-secondary">
                        {ledgerlyData.tabs.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {ledgerlyTab === 'challenges' && (
                      <ul className="space-y-2 text-[13px] text-text-secondary">
                        {ledgerlyData.tabs.challenges.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-accent shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {ledgerlyTab === 'outcome' && (
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {ledgerlyData.tabs.outcome}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Subtle Separation Line */}
          <div className="border-t border-border-portfolio/10 w-full my-8 lg:my-12" />

          {/* Project 03: VIRASAT - Information LEFT, Screenshots RIGHT on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 w-full">
              {/* Project Card 3: VIRASAT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="card-projects-custom p-6 md:p-8 shadow-premium hover:border-color-muted-lavender transition-all duration-300 w-full"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-accent px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Smart India Hackathon (SIH) Project</span>
                <h3 className="text-card-title text-text-primary mt-4 mb-2">{virasatData.title}</h3>
                
                <p className="text-small-text text-text-secondary leading-relaxed mb-6">
                  {virasatData.description}
                </p>

                {/* Tech Stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {virasatData.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-card-portfolio/40 border border-border-portfolio/20 text-caption-text font-medium text-text-secondary shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Tabs */}
                <div className="border border-border-portfolio rounded-2xl overflow-hidden bg-card-portfolio/40 backdrop-blur-md mb-8">
                  {/* Tab buttons */}
                  <div className="flex border-b border-border-portfolio bg-card-portfolio/20">
                    {(['features', 'challenges', 'outcome'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setVirasatTab(tab)}
                        className={`flex-1 py-2.5 text-caption-text font-bold uppercase tracking-wider transition-colors duration-250 ${
                          virasatTab === tab 
                            ? 'text-text-primary bg-card-portfolio/60 border-b border-text-accent' 
                            : 'text-text-secondary hover:text-text-primary hover:bg-card-portfolio/30'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-5 min-h-[160px] flex flex-col justify-center">
                    {virasatTab === 'features' && (
                      <ul className="space-y-2 text-[13px] text-text-secondary">
                        {virasatData.tabs.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {virasatTab === 'challenges' && (
                      <ul className="space-y-2 text-[13px] text-text-secondary">
                        {virasatData.tabs.challenges.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-accent shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {virasatTab === 'outcome' && (
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {virasatData.tabs.outcome}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7 flex justify-center w-full">
              <InteractiveExpandShowcase
                screenshots={virasatScreenshots}
                projectName="VIRASAT Cultural & Heritage Discovery Platform"
                categoryLabel="VIRASAT"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
