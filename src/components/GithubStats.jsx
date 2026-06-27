import React from 'react';
import { motion } from 'framer-motion';
import { GitFork, Star, GitCommit, GitPullRequest, Eye, FolderGit2 } from 'lucide-react';

export default function GithubStats() {
  // Generate mock contribution grid data (7 rows, 28 columns for a compact view)
  const columns = 36;
  const rows = 7;
  const contributionGrid = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => {
      const rand = Math.random();
      if (rand < 0.3) return 0; // Empty
      if (rand < 0.6) return 1; // Light Indigo
      if (rand < 0.8) return 2; // Medium Purple
      return 3; // Dark Purple
    })
  );

  const mockRepos = [
    {
      name: 'react-three-constellation',
      description: 'Custom React Three Fiber component for highly interactive 3D node meshes and interactive mouse particle warp.',
      stars: 42,
      forks: 7,
      lang: 'JavaScript',
      langColor: '#f1e05a',
    },
    {
      name: 'microservices-boilerplate',
      description: 'Production-ready Express.js template utilizing Docker Compose, Redis pub/sub messaging, and PostgreSQL prisma clients.',
      stars: 128,
      forks: 24,
      lang: 'TypeScript',
      langColor: '#3178c6',
    },
  ];

  const getColor = (level) => {
    switch (level) {
      case 1:
        return 'rgba(99, 102, 241, 0.25)';
      case 2:
        return 'rgba(168, 85, 247, 0.55)';
      case 3:
        return '#a855f7';
      default:
        return 'rgba(255, 255, 255, 0.03)';
    }
  };

  return (
    <section id="github">
      <div className="container">
        <div className="section-header">
          <h2>Open Source & GitHub Activity</h2>
          <p>
            I actively support open-source contributions and maintain codebases centered around 
            system reliability and modular design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Contribution Graph Panel */}
          <motion.div
            className="glass-panel p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <GitCommit size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading">Contribution History</h3>
                  <p className="text-xs text-gray-400">Activity tracked over the past year</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: getColor(0) }} />
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: getColor(1) }} />
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: getColor(2) }} />
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: getColor(3) }} />
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Scrollable grid container */}
            <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
              <div className="flex flex-col gap-1" style={{ minWidth: '500px' }}>
                {contributionGrid.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-1">
                    {row.map((cell, cIdx) => (
                      <div
                        key={cIdx}
                        className="w-3 h-3 rounded-sm transition-colors hover:scale-110"
                        style={{
                          backgroundColor: getColor(cell),
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Repos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockRepos.map((repo, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-6 text-left flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FolderGit2 size={18} className="text-indigo-400" />
                    <h4 className="text-md font-bold font-heading text-white">{repo.name}</h4>
                  </div>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  {/* Language badge */}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span className="text-gray-400 font-semibold">{repo.lang}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-gray-400">
                    <Star size={14} className="text-yellow-500/80" />
                    <span>{repo.stars}</span>
                  </div>

                  {/* Forks */}
                  <div className="flex items-center gap-1 text-gray-400">
                    <GitFork size={14} />
                    <span>{repo.forks}</span>
                  </div>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-bold ml-auto"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
