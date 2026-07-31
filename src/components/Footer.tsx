import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface QuickLink {
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative mt-0 border-t border-border-portfolio/55 bg-footer-gradient">
      {/* Scroll to Top Button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/85 shadow-md flex items-center justify-center text-[#CC8DB3] hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="container-portfolio pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Brand & Call to Action (Left Column) */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-section-heading text-[#F7C2CA] font-extrabold italic">
              Thanks for Stopping By!
            </h2>
            <p className="text-body-text max-w-md" style={{ color: '#F6A5C0' }}>
              Where creativity meets code to build experiences that leave an impression. Open for internship opportunities and collaborative engineering projects.
            </p>
          </div>

          {/* Quick Links (Middle Column) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-small-text font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-small-text text-white/80 hover:text-[#F6A5C0] active:text-white transition-colors duration-250"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Cards (Right Column) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-small-text font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <div className="flex flex-col gap-4 pt-1 items-start">
              <a
                href="https://github.com/Tanuja1707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7C2CA] hover:text-[#F6A5C0] hover:scale-115 active:scale-95 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanuja-4796b4332"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7C2CA] hover:text-[#F6A5C0] hover:scale-115 active:scale-95 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:kus.tanuja17@gmail.com"
                className="text-[#F7C2CA] hover:text-[#F6A5C0] hover:scale-115 active:scale-95 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-portfolio/60 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-caption-text text-white/75">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Tanuja. All Rights Reserved.</span>
            <span className="text-border-portfolio">|</span>
            <span>Designed with elegance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
