import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, LineChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono text-sm block mb-2 tracking-widest uppercase">01. About Me</span>
            Bridging Data and Intelligence.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted leading-relaxed space-y-6 flex flex-col justify-center"
          >
            <p>
              Hello! I'm Kaustubh, a Data Science undergraduate with a deep fascination for Machine Learning, Data Analytics, and Full-Stack Development. My journey began with a simple curiosity about how data shapes our understanding of the world, leading me to build complex, AI-driven applications.
            </p>
            <p>
              Currently pursuing my B.Tech in Computer Engineering at Dr. D.Y. Patil Pratishthan's College of Engineering, I've cultivated hands-on experience by building predictive healthcare applications and executing comprehensive business data analyses. 
            </p>
            <p>
              Whether it's training a Convolutional Neural Network for disease detection or crafting an intuitive Power BI dashboard to extract business insights, I thrive on translating raw complexity into elegant, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <AboutCard
              icon={<BrainCircuit className="text-accent" size={32} />}
              title="Machine Learning"
              desc="Building predictive models and deep learning architectures."
              delay={0.1}
            />
            <AboutCard
              icon={<LineChart className="text-primary" size={32} />}
              title="Data Analysis"
              desc="Extracting actionable insights using Python and Power BI."
              delay={0.2}
            />
            <AboutCard
              icon={<Code2 className="text-primary" size={32} />}
              title="Full-Stack Dev"
              desc="Developing scalable APIs and interactive UI dashboards."
              delay={0.3}
            />
            <AboutCard
              icon={<Database className="text-accent" size={32} />}
              title="Database Management"
              desc="Optimizing complex queries and system design with SQL / MySQL."
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4"
  >
    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-sm text-textMuted leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default About;
