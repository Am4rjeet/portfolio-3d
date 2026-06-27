import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { ArrowRight, Mail, Calendar, Compass, Star } from 'lucide-react';
import { GithubIcon } from './Icons';

function FloatingCore() {
  const sphereRef = useRef();
  const ringRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Rotate items on independent axes
    sphereRef.current.rotation.y = time * 0.15;
    sphereRef.current.rotation.x = time * 0.08;
    
    ringRef.current.rotation.y = -time * 0.25;
    ringRef.current.rotation.x = time * 0.18;
  });

  return (
    <group>
      {/* Central Wireframe Geodesic Sphere */}
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.35} />
      </mesh>
      
      {/* Outer Orbital Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.9, 0.03, 8, 64]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="home">
      <div className="container">
        {/* Split Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text & Hero Action Copy (7 columns) */}
          <motion.div
            className="md:col-span-7 text-left"
            variants={itemVariants}
          >
            {/* Status Tag */}
            <div className="mb-6">
              <span className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                🚀 Open to Full-Stack Engineer Opportunities
              </span>
            </div>

            {/* Heavy Typography Title */}
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Architecting <span className="gradient-text">ephemeral software</span> & clean interfaces.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl" style={{ lineHeight: 1.6 }}>
              Hi, I'm **Amarjeet Kumar**, a Full-Stack Engineer based in Jaipur, India. Specializing in high-performance React frontends, robust REST/GraphQL APIs, and Docker deployments. Currently pursuing software engineering at Manipal University.
            </p>

            {/* Action CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#projects" className="btn btn-primary w-full sm:w-auto justify-center">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary w-full sm:w-auto justify-center">
                <span>Contact Me</span>
                <Mail size={18} />
              </a>
              
              {/* GitHub Shortcut */}
              <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-auto">
                <a
                  href="https://github.com/Am4rjeet"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-white/10 hover:border-indigo-400 hover:text-indigo-400 transition-all text-gray-400 bg-white/5"
                  style={{ display: 'inline-flex' }}
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating 3D Geodesic Core Panel (5 columns) */}
          <motion.div
            className="md:col-span-5 glass-panel"
            variants={itemVariants}
            style={{ 
              overflow: 'hidden', 
              padding: 0, 
              height: '420px', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(99, 102, 241, 0.15)'
            }}
          >
            {/* Local 3D Canvas */}
            <div style={{ flex: 1, position: 'relative', background: 'transparent' }}>
              <Canvas
                camera={{ position: [0, 0, 4.5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
              >
                <ambientLight intensity={0.9} />
                <pointLight position={[5, 5, 5]} intensity={1.5} />
                <FloatingCore />
              </Canvas>

              {/* Coordinates Indicator */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--accent-primary)',
                opacity: 0.6,
                pointerEvents: 'none'
              }}>
                <div>GEODESIC_CORE // ONLINE</div>
                <div>SECURE_CONN // ACTIVE</div>
              </div>
            </div>

            {/* Micro Dashboard Info Footer */}
            <div style={{ 
              padding: '1.25rem 2rem', 
              background: 'rgba(255, 255, 255, 0.02)', 
              borderTop: '1px solid var(--border-color)',
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1rem', 
              textAlign: 'center' 
            }}>
              <div>
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>REACT</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>FRONTEND</div>
              </div>
              <div>
                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: 'bold' }}>NODE</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>BACKEND</div>
              </div>
              <div>
                <div style={{ color: 'var(--accent-tertiary)', fontSize: '0.8rem', fontWeight: 'bold' }}>DOCKER</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>DEVOPS</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
