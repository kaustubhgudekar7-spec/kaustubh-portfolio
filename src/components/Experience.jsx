import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#111111] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent font-mono text-sm block mb-2 tracking-widest uppercase">04. Journey</span>
            Experience & Leadership.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[21px] before:w-0.5 before:bg-white/10">
              <TimelineItem 
                date="Jul 2025 - Aug 2025" 
                title="Data Analyst Intern" 
                company="Cognifyz Technologies"
                desc={[
                  "Conducted rigorous data cleaning and Exploratory Data Analysis (EDA) using Python.",
                  "Built interactive and comprehensive dashboards using Power BI to visualize key metrics.",
                  "Generated actionable insights that supported strategic decision-making processes."
                ]}
              />
            </div>
          </div>

          {/* Leadership & Mentoring */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Leadership Roles</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[21px] before:w-0.5 before:bg-white/10">
              <TimelineItem 
                date="Aug 2023 - Present" 
                title="Training & Placement Head" 
                company="TnP Cell"
                desc={[
                  "Managed and structured training programs for over 200 students.",
                  "Conducted mock interviews, resume review sessions, and technical guidance workshops.",
                  "Coordinated placement activities, bridging the gap between industry requirements and student skillsets."
                ]}
              />
              <TimelineItem 
                date="Mar 2025 - Present" 
                title="STOMP Lead" 
                company="Student Mentorship Program"
                desc={[
                  "Mentored 50+ students in core STEM concepts and practical application development.",
                  "Developed interactive learning materials and hands-on coding exercises."
                ]}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const TimelineItem = ({ date, title, company, desc }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="relative flex items-start group"
  >
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111] border-[3px] border-white/20 group-hover:border-primary transition-colors z-10 shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-primary transition-colors" />
    </div>
    
    <div className="ml-6 glass-card p-6 rounded-2xl w-full transition-transform duration-300 group-hover:-translate-y-1">
      <span className="text-xs font-mono text-primary mb-1 block pb-2 border-b border-white/5">{date}</span>
      <h4 className="text-lg font-bold text-white mt-3">{title}</h4>
      <p className="text-textMuted font-medium text-sm mb-4">{company}</p>
      
      <ul className="space-y-2 text-sm text-textMuted/90">
        {desc.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent mt-1 shrink-0">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default Experience;
