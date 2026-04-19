import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold font-mono tracking-tighter mb-2 block">
              <span className="text-primary">K</span>G<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-textMuted max-w-xs">
              Transforming complex data into intelligent, scalable solutions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/Kaustubh1551" icon={<Github size={18} />} />
            <SocialLink href="https://linkedin.com/in/Kaustubh-Gudekar" icon={<Linkedin size={18} />} />
            <SocialLink href="mailto:gudekarkaustubh15@gmail.com" icon={<Mail size={18} />} />
            <SocialLink href="#" icon={<Twitter size={18} />} />
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-textMuted/60 font-mono">
          <p>© {new Date().getFullYear()} Kaustubh Gudekar. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-2.5 bg-white/5 border border-white/10 rounded-full text-textMuted hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
