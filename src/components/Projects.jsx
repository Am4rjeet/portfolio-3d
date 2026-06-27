import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const projectList = [
    {
      title: 'OmniSphere Analytics',
      description:
        'A premium enterprise dashboard providing real-time data streaming, user behavior maps, and complex custom event tracking metrics.',
      tags: ['Next.js', 'React Three Fiber', 'PostgreSQL', 'TailwindCSS'],
      github: 'https://github.com/Am4rjeet',
      demo: 'https://example.com',
      color: '#6366f1',
    },
    {
      title: 'PulseChat AI Collaboration',
      description:
        'Real-time workspace collaboration application featuring Markdown editing, direct audio calls, and deep LLM chat assistant integration.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
      github: 'https://github.com/Am4rjeet',
      demo: 'https://example.com',
      color: '#a855f7',
    },
    {
      title: 'DevNet Microservice Store',
      description:
        'Robust e-commerce system built on Dockerized Node.js services, Stripe checkout integration, and message broker notifications.',
      tags: ['Docker', 'Express', 'RabbitMQ', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/Am4rjeet',
      demo: 'https://example.com',
      color: '#ec4899',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Engineering Projects</h2>
          <p>
            A curated showcase of recent full-stack applications, highlighting database integrity, 
            interactive UIs, and real-world system designs.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 text-left flex flex-col justify-between"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              style={{ minHeight: '420px' }}
            >
              <div>
                {/* Visual Header Thumbnail */}
                <div className="project-card-visual" style={{
                  background: `linear-gradient(135deg, var(--bg-secondary) 0%, ${project.color}15 50%, ${project.color}05 100%)`,
                  borderColor: `${project.color}25`
                }}>
                  <div className="font-heading font-bold text-3xl" style={{
                    color: project.color,
                    opacity: 0.85,
                    letterSpacing: '0.05em',
                    textShadow: `0 0 15px ${project.color}40`
                  }}>
                    {project.title.split(' ').map(w => w[0]).join('')}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6" style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="tech-tag"
                      style={{
                        fontSize: '0.7rem',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderColor: 'rgba(255,255,255,0.06)',
                        color: '#9ca3af',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
                    style={{ color: project.color }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
