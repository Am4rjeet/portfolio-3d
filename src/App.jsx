import React, { useState, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* 3D Interactive Canvas Scene */}
      <Scene3D theme={theme} />
      
      {/* High-tech grid overlay */}
      <div className="bg-grid-overlay" />
      
      {/* Floating glow blobs */}
      <div className="glow-blob glow-indigo" />
      <div className="glow-blob glow-purple" />
      <div className="glow-blob glow-pink" />
      
      {/* Decorative Glow Layer */}
      <div className="bg-glow-radial" />

      {/* Navigation Menu */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* App Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Projects />
        <GithubStats />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '3rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-secondary)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Amarjeet Kumar. Crafted with React, Three.js & Framer Motion.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
