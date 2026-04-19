import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming & Core",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL / MySQL", level: 85 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "Java", level: 70 },
      { name: "C / C++", level: 75 },
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Pandas & NumPy", level: 95 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Matplotlib & Seaborn", level: 90 },
      { name: "Flask", level: 80 },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Streamlit", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "HTML & CSS", level: 80 },
      { name: "Linux", level: 70 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#111111] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent font-mono text-sm block mb-2 tracking-widest uppercase">02. Technical Arsenal</span>
            Skills & Technologies.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white pb-2 border-b border-white/10 flex items-center gap-3">
                <span className="text-primary font-mono text-sm">0{idx + 1}.</span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-textMuted group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm font-mono text-textMuted/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary/50 to-accent/80 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
