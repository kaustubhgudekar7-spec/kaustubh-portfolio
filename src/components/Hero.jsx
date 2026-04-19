import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-textMuted mb-8 tracking-wide inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
        >
          Hi, I'm <span className="text-gradient">Kaustubh</span> <br className="hidden md:block"/>
          Gudekar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-2xl text-textMuted max-w-2xl mb-12"
        >
          A passionate <span className="text-white font-medium">AI Developer</span> and <span className="text-white font-medium">Data Analyst</span> crafting intelligent systems and data-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 border-b border-white/5 pb-12 w-full max-w-md justify-center"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            View Work <ArrowRight size={18} />
          </a>
          <a
            href="Kaustubh_resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            Resume <Download size={18} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6 mt-8"
        >
          <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:gudekarkaustubh15@gmail.com" icon={<Mail size={20} />} label="Email" />
        </motion.div>
      </div>

    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="p-3 bg-white/5 border border-white/10 rounded-full text-textMuted hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;
