export interface Stat {
  end: number;
  suffix: string;
  label: string;
}

export interface InfoCard {
  title: string;
  desc: string;
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  challenges: string[];
  outcome: string;
}

export interface SkillCategory {
  title: string;
  techs: string[];
  delay: number;
}

export const portfolioData = {
  hero: {
    tagline: "Think. Design. Build.",
    name: "Tanuja.",
    title: "Hi, I'm ",
    subtitle: "Building Digital Experiences That Matter.",
    description: "Computer Science Engineering student and developer passionate about creating modern, responsive, and user-centric web applications.",
    socials: {
      github: "https://github.com/Tanuja1707",
      linkedin: "https://www.linkedin.com/in/tanuja-4796b4332",
      email: "mailto:kus.tanuja17@gmail.com",
    },
  },
  about: {
    bio: "I am a Computer Science student and web developer passionate about creating modern, responsive, and intuitive applications. I enjoy blending design and technology to build products that are both visually appealing and highly functional. With every project, I strive to learn, innovate, and deliver meaningful experiences through code.",
    interests: ['Frontend Development', 'Modern Web Technologies', 'UI/UX Design'],
    infoCards: [
      { title: 'Education', desc: 'B.Tech Computer Science Engineering' },
      { title: 'Internship Experience', desc: 'Project Engineering Intern' },
      { title: 'Interests', desc: 'Frontend Development & UI/UX' },
      { title: 'Currently Exploring', desc: 'React Ecosystem and Modern Web Technologies' }
    ] as InfoCard[],
  },
  experience: {
    title: "Project Engineering Intern",
    company: "MarTechAdda Pvt Ltd.",
    date: "15 June 2026 – 01 August 2026",
    responsibilities: [
      'Developed modern and responsive user interfaces using React and TypeScript.',
      'Designed scalable and reusable UI components for multiple business modules.',
      'Implemented Role-Based Access Control (RBAC) for secure and role-specific access management.',
      'Integrated database-driven workflows and business logic.',
      'Developed and enhanced module-based functionalities across projects.',
      'Ensured responsive design and seamless user experience across devices.',
      'Collaborated on building industry-level software solutions following modern development practices.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL', 'Prisma', 'Framer Motion', 'Git', 'GitHub'],
    stats: [
      { end: 2, suffix: '+', label: 'Industry Projects' },
      { end: 15, suffix: '+', label: 'Modules Developed' },
      { end: 20, suffix: '+', label: 'Reusable Components' },
      { end: 100, suffix: '%', label: 'Responsive Design' }
    ] as Stat[],
    projects: {
      crm: {
        badge: "MarTechAdda CRM",
        title: "CRM System",
        description: "Developed the Project Management module of a CRM application focused on managing projects, workflows, and scalable UI components.",
        tags: ['Project Management', 'Workflow Management', 'Responsive UI Design', 'Modern Component Architecture'],
      },
      ledgerly: {
        badge: "MarTechAdda Billing",
        title: "Ledgerly",
        description: "Developed a modern Billing & Business Management Software featuring multiple business modules and professional SaaS-inspired user interfaces.",
        tags: ['Invoice Management', 'Payment Tracking', 'Expense Management', 'Reports & Analytics', 'Tax Management', 'RBAC Implementation', 'Team Management', 'Professional Dashboard UI'],
      },
    },
  },
  projects: {
    crm: {
      title: "CRM – Project Management Module",
      description: "Developed the Project Management module of a CRM application to help teams efficiently plan, track, and manage projects throughout their lifecycle. Designed with a modern, responsive user interface to improve project visibility and team collaboration.",
      techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MongoDB', 'Prisma', 'Git & GitHub'],
      tabs: {
        features: [
          'Create and manage projects efficiently.',
          'Track project status and visual progress metrics.',
          'Manage project timelines, milestones, and deliverables.',
          'Responsive dashboard interface with intuitive navigation.',
          'Reusable and scalable UI components designed for multiple modules.',
          'Workflow management capabilities to streamline team coordination.'
        ],
        challenges: [
          'Designing an intuitive and scalable project management interface.',
          'Managing project states and workflows efficiently.',
          'Building reusable and responsive components.',
          'Ensuring consistency across screen sizes.',
          'Structuring the module for scalability.'
        ],
        outcome: "Successfully developed a professional and responsive Project Management module that strengthened my skills in React development, responsive UI design, and component-based architecture."
      }
    },
    ledgerly: {
      title: "Ledgerly – Billing & Business Management",
      description: "Ledgerly is a modern and comprehensive billing and business management software designed to simplify financial operations for businesses. The platform enables users to efficiently manage invoices, clients, payments, expenses, taxes, and reports.",
      techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Git & GitHub'],
      tabs: {
        features: [
          'Invoice, Client, and Quotation management.',
          'Payment and expense tracking with real-time analytics.',
          'Reports, analytics, and tax management workflows.',
          'Role-Based Access Control (RBAC) and team management.',
          'Responsive SaaS-inspired UI with Light, Dark, and System theme support.',
          'PDF generation and print preview support.'
        ],
        challenges: [
          'Designing a professional multi-module business application.',
          'Implementing secure Role-Based Access Control.',
          'Managing complex billing and invoice generation workflows.',
          'Building scalable and reusable component systems.',
          'Ensuring responsiveness and high performance across all modules.',
          'Maintaining interface consistency throughout the application.'
        ],
        outcome: "Successfully developed a feature-rich billing software that streamlined business operations and enhanced my expertise in frontend architecture, responsive design, and scalable SaaS application development."
      }
    }
  },
  techStack: [
    {
      title: 'Frontend',
      techs: ['HTML', 'CSS', 'JavaScript'],
      delay: 0,
    },
    {
      title: 'Backend',
      techs: ['Node.js', 'Express.js', 'Prisma'],
      delay: 0.05,
    },
    {
      title: 'Programming Languages',
      techs: ['C', 'Java', 'Python'],
      delay: 0.1,
    },
    {
      title: 'Databases',
      techs: ['MySQL', 'MongoDB', 'PostgreSQL'],
      delay: 0.15,
    },
    {
      title: 'Tools & Design',
      techs: ['GitHub', 'Figma', 'Canva'],
      delay: 0.2,
    },
    {
      title: 'Modern Web Technologies',
      techs: ['TypeScript', 'React', 'Tailwind CSS'],
      delay: 0.25,
    },
  ] as SkillCategory[],
  achievements: [
    'Secured 3rd position in a Technical Webinar Quiz.',
    'Attended a hands-on workshop on Applied Data Science and Machine Learning.',
    'Successfully completed technical workshops and certifications.',
    'Developed full-stack applications during my internship.',
    'Participated in the Smart India Hackathon (SIH).',
    'Active member of the En-Lit Club and Cultural Council Club.'
  ],
  learning: [
    'Learning Full-Stack Web Development.',
    'Exploring modern technologies like React, TypeScript, and PostgreSQL.',
    'Improving UI/UX design principles and responsive design practices.',
    'Practicing Git, GitHub, and collaborative development workflows.',
    'Exploring AI-powered development tools and modern software engineering practices.',
    'Strengthening problem-solving skills through real-world projects and continuous learning.'
  ],
  contact: {
    email: "kus.tanuja17@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanuja-4796b4332",
    linkedinName: "Tanuja",
    github: "https://github.com/Tanuja1707",
    githubName: "Tanuja1707",
    location: "Lucknow, India"
  }
};
