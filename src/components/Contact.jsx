import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Auto close message
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Start a Collaboration</h2>
          <p>
            Have a project in mind, looking to expand your development team, or simply want to connect? 
            Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Info Panel */}
          <motion.div
            className="glass-panel p-6 md:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4 gradient-text">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need assistance with cloud architecture, front-end optimization, 
                or fully managed software products, I am always ready to help.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">Email</div>
                    <a href="mailto:amarjeetxwd@gmail.com" className="text-sm font-bold text-white hover:text-indigo-300">
                      amarjeetxwd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">Location</div>
                    <div className="text-sm font-bold text-white">Jaipur, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
              <a
                href="https://github.com/Am4rjeet"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary p-3 rounded-xl text-gray-400 hover:text-white"
                style={{ padding: '0.75rem' }}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary p-3 rounded-xl text-gray-400 hover:text-white"
                style={{ padding: '0.75rem' }}
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div
            className="glass-panel p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-group">
                <label className="text-xs text-gray-400 font-bold tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="text-xs text-gray-400 font-bold tracking-wider uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="text-xs text-gray-400 font-bold tracking-wider uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  className="form-input"
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full justify-center mt-2 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </motion.div>
                  ) : submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <CheckCircle size={18} />
                      <span>Message Sent!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={16} />
                      <span>Send Inquiry</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
