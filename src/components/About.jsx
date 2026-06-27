import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Terminal } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const categories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      color: '#6366f1',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'CSS3 / HTML5'],
    },
    {
      title: 'Backend Engineering',
      icon: Server,
      color: '#a855f7',
      skills: ['Node.js', 'Express', 'NestJS', 'RESTful APIs', 'GraphQL', 'WebSockets'],
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: '#3b82f6',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Firebase'],
    },
    {
      title: 'DevOps & Tooling',
      icon: Terminal,
      color: '#10b981',
      skills: ['Git & GitHub', 'Docker', 'AWS (S3/EC2)', 'Vercel / Netlify', 'Linux / Bash', 'CI/CD'],
    },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>About & Technical Stack</h2>
          <p className="mb-4">
            Highly structured systems engineering capabilities across client interfaces, database layers, and cloud infrastructure.
          </p>
          <div className="flex justify-center gap-3" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tech-tag" style={{ background: 'rgba(168, 85, 247, 0.08)', borderColor: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
              🎓 Manipal University
            </span>
            <span className="tech-tag" style={{ background: 'rgba(99, 102, 241, 0.08)', borderColor: 'rgba(99, 102, 241, 0.15)', color: '#6366f1', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
              📍 Jaipur, India
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                className="glass-panel p-6 text-left"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-xl text-white"
                    style={{
                      backgroundColor: cat.color,
                      boxShadow: `0 4px 15px ${cat.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold font-heading" style={{ color: cat.color }}>{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="tech-tag"
                      style={{
                        backgroundColor: `${cat.color}08`,
                        borderColor: `${cat.color}15`,
                        color: cat.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
