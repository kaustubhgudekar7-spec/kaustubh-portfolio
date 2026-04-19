import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, Star } from 'lucide-react';

const eduData = [
  {
    degree: "B.Tech in Computer Engineering (Data Science)",
    school: "Dr. D.Y. Patil Pratishthan's College of Engineering, Kolhapur",
    year: "2022 - 2026",
    score: "CGPA: 8.20"
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    school: "State Board",
    year: "2021 - 2022",
    score: "56.93%"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "State Board",
    year: "2019 - 2020",
    score: "87.20%"
  }
];

const certData = [
  {
    title: "SQL Certification",
    issuer: "Infosys Springboard",
    year: "2025"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2026"
  },
  {
    title: "UI/UX Basics",
    issuer: "Great Learning",
    year: "2025"
  },
  {
    title: "Google Play Store Listing Certification",
    issuer: "Google",
    year: "2025"
  }
];

const Certifications = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono text-sm block mb-2 tracking-widest uppercase">05. Academics</span>
            Education & Certifications.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {eduData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all"
                >
                  <h4 className="text-lg font-bold text-white leading-tight">{edu.degree}</h4>
                  <p className="text-textMuted text-sm mt-2 mb-4">{edu.school}</p>
                  <div className="flex items-center justify-between text-xs font-mono text-primary bg-primary/5 p-3 rounded-lg">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {edu.year}</span>
                    <span className="flex items-center gap-2 text-accent"><Award size={14} /> {edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Star className="text-accent" /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-start justify-between min-h-[160px] group"
                >
                  <div className="p-2 bg-gradient-to-br from-white/5 to-white/0 rounded-lg mb-4 border border-white/5 group-hover:border-accent/30 transition-colors">
                    <Award className="text-white group-hover:text-accent transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 leading-snug">{cert.title}</h4>
                    <div className="flex items-center justify-between mt-3 text-xs text-textMuted">
                      <span>{cert.issuer}</span>
                      <span className="font-mono">{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
