import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS Placeholder credentials.
    // Replace these with your actual Service ID, Template ID, and Public Key from emailjs.com
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: "Kaustubh Gudekar",
        from_email: formData.email,
        to_email: "gudekarkaustubh15@gmail.com",
        message: formData.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's build something <span className="text-gradient">remarkable</span>.</h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="glass-card p-8 md:p-12 rounded-3xl text-left max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 resize-none"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === 'loading' && <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></span>}
            {status === 'success' && <CheckCircle size={20} className="text-green-600" />}
            {status === 'idle' && <Send size={20} />}
            {status === 'error' && "Error Sending"}
            
            {status === 'idle' && "Send Message"}
            {status === 'loading' && "Sending..."}
            {status === 'success' && "Message Sent!"}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-sm mt-4 text-center">Failed to send message. Please ensure you update the EmailJS credentials.</p>
          )}

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
