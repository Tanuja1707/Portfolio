import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, Send, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Import Icons
import githubIcon from '../assets/icons/Github.svg';
import linkedinIcon from '../assets/icons/Linkedn.svg';

export default function Contact() {
  const { email, linkedin, linkedinName, github, githubName, location } = portfolioData.contact;

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formStatusMessage, setFormStatusMessage] = useState('');

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormStatus('idle');

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const formData = new FormData();
    formData.append('access_key', apiKey || '');
    formData.append('name', contactForm.name);
    formData.append('email', contactForm.email);
    formData.append('subject', contactForm.subject);
    formData.append('message', contactForm.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormLoading(false);
        setFormStatus('success');
        setFormStatusMessage('Your message has been sent successfully!');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Web3Forms submit error:', data);
        setFormLoading(false);
        setFormStatus('error');
        setFormStatusMessage(data.message || 'Failed to send message. Please try again or email directly.');
      }
    } catch (error) {
      console.error('Web3Forms submit error:', error);
      setFormLoading(false);
      setFormStatus('error');
      setFormStatusMessage('Failed to send message. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="section-spacing bg-contact-gradient border-t border-border-portfolio/20 relative overflow-hidden">
      {/* Deep Plum & Glow elements */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-color-muted-lavender/10 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-color-mauve-pink/10 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details, Socials, Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-caption-text font-bold uppercase tracking-widest text-text-accent block mt-0">Contact Me</span>
              <h2 className="text-section-heading text-text-primary">
                Let's Build Something <span className="contact-heading-highlight">Amazing Together</span>
              </h2>
              <p className="text-body-text text-text-secondary leading-relaxed">
                I'm always excited to discuss new opportunities, innovative ideas, and meaningful collaborations. Feel free to reach out&mdash;I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email card */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ y: -4 }}
                className="card-contact-custom p-5 flex flex-col justify-between min-h-[120px] transition-colors hover:border-color-muted-lavender"
              >
                <Mail size={20} className="text-text-accent mb-3" />
                <div>
                  <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Email Address</h4>
                  <p className="text-[13px] font-semibold text-text-primary mt-1 break-all">{email}</p>
                </div>
              </motion.a>

              {/* LinkedIn card */}
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="card-contact-custom p-5 flex flex-col justify-between min-h-[120px] transition-colors hover:border-color-muted-lavender"
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="w-5 h-5 mb-3" 
                  style={{ filter: 'invert(53%) sepia(17%) saturate(1028%) hue-rotate(212deg) brightness(91%) contrast(87%)' }} 
                />
                <div>
                  <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">LinkedIn Profile</h4>
                  <p className="text-[13px] font-semibold text-text-primary mt-1">{linkedinName}</p>
                </div>
              </motion.a>

              {/* GitHub card */}
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="card-contact-custom p-5 flex flex-col justify-between min-h-[120px] transition-colors hover:border-color-muted-lavender"
              >
                <img 
                  src={githubIcon} 
                  alt="GitHub" 
                  className="w-5 h-5 mb-3" 
                  style={{ filter: 'invert(53%) sepia(17%) saturate(1028%) hue-rotate(212deg) brightness(91%) contrast(87%)' }} 
                />
                <div>
                  <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">GitHub Profile</h4>
                  <p className="text-[13px] font-semibold text-text-primary mt-1">{githubName}</p>
                </div>
              </motion.a>

              {/* Location card */}
              <div
                className="card-contact-custom p-5 flex flex-col justify-between min-h-[120px]"
              >
                <MapPin size={20} className="text-text-accent mb-3" />
                <div>
                  <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Location</h4>
                  <p className="text-[13px] font-semibold text-text-primary mt-1">{location}</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="card-contact-custom p-6 md:p-8 shadow-premium relative">
              
              {formStatus !== 'idle' && (
                <div className={`p-4 rounded-xl mb-6 text-small-text font-bold flex items-center gap-2 ${
                  formStatus === 'success' 
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
                    : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                }`}>
                  <CheckCircle size={14} className="shrink-0" />
                  <span>{formStatusMessage}</span>
                </div>
              )}

              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-text-muted mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      placeholder="Enter your name" 
                      className="input-field bg-deep-plum/20 border-white/10 text-text-primary focus:border-color-muted-lavender focus:ring-1 focus:ring-color-muted-lavender transition-all" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-text-muted mb-2 block">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="Enter your email address." 
                      className="input-field bg-deep-plum/20 border-white/10 text-text-primary focus:border-color-muted-lavender focus:ring-1 focus:ring-color-muted-lavender transition-all" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-text-muted mb-2 block">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    placeholder="Collaboration opportunity" 
                    className="input-field bg-deep-plum/20 border-white/10 text-text-primary focus:border-color-muted-lavender focus:ring-1 focus:ring-color-muted-lavender transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-text-muted mb-2 block">Message</label>
                  <textarea 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Write your message here..." 
                    rows={5} 
                    className="input-field bg-deep-plum/20 border-white/10 text-text-primary resize-none focus:border-color-muted-lavender focus:ring-1 focus:ring-color-muted-lavender transition-all" 
                    required 
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <button 
                    type="submit" 
                    disabled={formLoading}
                    className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    {formLoading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                  <a
                    href="/resume/Resume.pdf"
                    download="Tanuja_Resume.pdf"
                    className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2.5"
                  >
                    <Award size={15} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
