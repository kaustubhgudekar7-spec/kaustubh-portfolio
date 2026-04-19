import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI Fracture & Pneumonia Detection",
    type: "Featured Project",
    desc: "A state-of-the-art CNN model trained on 5,000+ X-ray images to simultaneously detect fractures and pneumonia. Achieved 84% accuracy. Deployed as a real-time web application using Streamlit with advanced preprocessing and data augmentation techniques.",
    longDesc: "This ambitious project involved creating an end-to-end pipeline for medical image analysis. I utilized a Convolutional Neural Network (CNN) architecture, applying rigorous data preprocessing, augmentation, and K-Fold cross-validation to ensure model robustness. The final product was deployed via Streamlit, allowing users to upload X-rays and instantly receive diagnostic predictions alongside Grad-CAM explainability visuals.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    github: "https://github.com/Kaustubh1551",
    demo: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Personal Healthcare Assistant",
    type: "Web Application",
    desc: "A Flask-based web application featuring secure user authentication, health records management, and an integrated ML-based risk prediction and symptom checker.",
    longDesc: "Designed a comprehensive healthcare tracking system. Users can securely log in, store health records, and utilize an interactive symptom checker powered by Machine Learning algorithms to predict potential health risks. The backend is driven by REST APIs connected to a robust MySQL database.",
    tech: ["Python", "Flask", "Machine Learning", "MySQL", "HTML/CSS"],
    github: "https://github.com/Kaustubh1551",
    demo: "#",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Sales Data Analysis Dashboard",
    type: "Data Analytics",
    desc: "Comprehensive data analysis utilizing Pandas and NumPy to clean raw data and extract actionable insights. Built interactive dashboards in Power BI for visual reporting.",
    longDesc: "Transformed raw, unstructured sales data into meaningful business intelligence. Tasks included extensive data cleaning, exploratory data analysis (EDA) using Python libraries, and the creation of dynamic, interactive dashboards in Power BI to monitor KPIs and sales trends.",
    tech: ["Python", "Pandas", "NumPy", "Power BI"],
    github: "https://github.com/Kaustubh1551",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono text-sm block mb-2 tracking-widest uppercase">03. Portfolio</span>
            Featured Projects.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 h-[300px] md:h-[400px] relative group overflow-hidden rounded-2xl border border-white/10 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content Container */}
              <div className={`w-full lg:w-2/5 flex flex-col ${idx % 2 !== 0 ? 'lg:items-start' : 'lg:items-end text-left lg:text-right'} relative z-20`}>
                <span className="text-accent font-mono text-sm tracking-wide mb-2">{project.type}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                
                <div className={`glass-card p-6 rounded-xl mb-6 shadow-2xl ${idx % 2 !== 0 ? '' : 'lg:-ml-20'} text-textMuted text-sm md:text-base`}>
                  <p>{project.desc}</p>
                </div>

                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-textMuted mb-8 ${idx % 2 !== 0 ? 'justify-start' : 'justify-start lg:justify-end'}`}>
                  {project.tech.map(t => (
                    <li key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{t}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors p-2">
                    <Github size={22} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors p-2">
                    <ExternalLink size={22} />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="ml-4 flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Details <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl"
            >
              <div className="h-64 sm:h-80 relative overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-primary/50 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-primary font-mono text-sm mb-6">{selectedProject.type}</p>
                <p className="text-textMuted leading-relaxed mb-8">{selectedProject.longDesc}</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
                    <Github size={18} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
