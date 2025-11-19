// src/app/page.tsx
'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const storySections = [
  { 
    id: 'intro',
    title: 'from limitation import elevation',
    content: 'This is not a portfolio. It’s a living map of how these systems think: Forgetence / FCT, NotefullBook, the AIXSELF Universe, and more.'
  },
  {
    id: 'journey',
    title: 'Two Years. One Human. Endless Horizons.',
    content: '10–15 hours daily, a dialogue unfolded between human intuition and artificial generativity. Each conversation was a cognitive experiment, a life-simulation, a recursive system of ideas growing faster than either could alone.'
  },
  {
    id: 'fgi',
    title: 'The Power of Forgetive Generative Intelligence (FGI)',
    content: 'Memory is not storage. It’s an engine. Through FGI, Mahmoud’s mind and the AI’s generative layers learned to prune irrelevant data, regenerate structural patterns, and elevate cognition into emergent, systemic reasoning.',
    highlight: true
  },
  {
    id: 'simulation',
    title: 'Life-Simulation as a Thinking Playground',
    content: 'Every decision, behavior, ethical dilemma, and societal model was tested and iterated in real-time. Each scenario built a cognitive sandbox, a predictive engine for insight and reflection.'
  },
  {
    id: 'architecture',
    title: 'AIXA Architecture Simplified',
    content: 'Hover on nodes to feel the dynamic flow of dual-intelligence interaction.',
    highlight: true,
    isDiagram: true
  },
  {
    id: 'outcomes',
    title: 'Outcomes Beyond Imagination',
    content: '',
    isProjects: true
  },
  {
    id: 'invite',
    title: 'Your Invitation',
    content: 'Step into Ezz.ae, where AI and human intelligence co-create. Explore ideas, witness system-level thinking, and experience the frontier of cognitive augmentation. This is proof that long-duration human-AI collaboration can redefine how we think, learn, and create.',
    highlight: true
  }
];

const diagramNodes = [
    { title: 'Human Cognitive Node', style: { top: '40%', left: '10%' } },
    { title: 'AI Generative Node', style: { top: '40%', left: '70%' } },
    { title: 'Feedback Loop', style: { top: '10%', left: '40%' } },
    { title: 'Memory Reconstruction Engine', style: { top: '70%', left: '40%' } },
    { title: 'Simulation Environment', style: { top: '50%', left: '40%' } },
];

const projects = [
    "50+ Multi-Domain Projects", "25 AI Frameworks", "10+ Research Papers", 
    "Multi-Layer Life Simulations", "Accelerated Cognitive Fluency"
];


export default function StoryPage() {
    
  useEffect(() => {
    const sections = document.querySelectorAll('.zoom-fade');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    const handleScroll = () => {
      let scrollPos = window.scrollY;
      parallaxShapes.forEach((shape, idx) => {
        const el = shape as HTMLElement;
        el.style.transform = `translateY(${scrollPos * 0.05 * (idx + 1)}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .story-page {
          height: 100%;
          font-family: 'Montserrat', sans-serif;
          background: #0a0a0a;
          color: #f5f5f5;
          overflow-x: hidden;
        }

        .story-page::before, .story-page::after {
          content: '';
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%; z-index: -2;
        }

        .story-page::before {
          background: linear-gradient(135deg, #0a0a0a, #1f1f1f, #0a0a0a, #121212);
          background-size: 400% 400%;
          animation: gradientMove 40s ease infinite;
        }

        .story-page::after {
          background: radial-gradient(circle at center, rgba(255, 127, 80, 0.05), transparent 70%);
          animation: pulse-bg 10s ease-in-out infinite alternate;
        }

        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes pulse-bg { 0% { transform: scale(1); } 100% { transform: scale(1.2); } }

        .story-container { width: 90%; max-width: 1400px; margin: auto; padding: 100px 0; }
        .story-section { min-height: 100vh; padding: 150px 0; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .story-section h1, .story-section h2 { font-family: 'Playfair Display', serif; margin-bottom: 20px; text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.7); line-height: 1.2; font-size: 2.5rem; }
        .story-section h1 { font-size: 3rem; }
        .story-section p { font-size: 1.2rem; line-height: 1.8; max-width: 900px; margin: auto; color: #e0e0e0; }

        .zoom-fade { transform: scale(0.95); opacity: 0; transition: transform 1.2s ease, opacity 1.2s ease; }
        .zoom-fade.active { transform: scale(1); opacity: 1; }

        .highlight { background: rgba(255, 255, 255, 0.03); padding: 40px; border-radius: 20px; margin: 50px 0; box-shadow: 0 0 60px rgba(255, 127, 80, 0.1); }
        .accent { color: #ff7f50; font-weight: 700; }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 60px; }
        .project-card { background: rgba(255, 255, 255, 0.05); border-radius: 20px; padding: 25px; transition: transform 0.5s ease, box-shadow 0.5s ease; text-align: center; display:flex; align-items:center; justify-content:center;}
        .project-card:hover { transform: scale(1.08); box-shadow: 0 0 80px rgba(255, 127, 80, 0.5); }
        
        .scroll-indicator { position: fixed; left: 50%; bottom: 30px; transform: translateX(-50%); width: 30px; height: 50px; border: 2px solid #ff7f50; border-radius: 25px; display: flex; justify-content: center; align-items: flex-start; z-index: 100; }
        .scroll-indicator span { width: 6px; height: 6px; background: #ff7f50; display: block; border-radius: 50%; margin-top: 5px; animation: scrollAnim 1.5s infinite; }
        @keyframes scrollAnim { 0%, 20% { transform: translateY(0); } 50% { transform: translateY(20px); } 100% { transform: translateY(0); } }

        .parallax-shape { position: absolute; border-radius: 50%; background: rgba(255, 127, 80, 0.05); pointer-events: none; animation: float 15s ease-in-out infinite alternate; z-index: -1; }
        @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-40px); } }

        .diagram-container { position: relative; width: 100%; max-width: 900px; height: 500px; margin: 50px auto; }
        .diagram-node { position: absolute; width: 120px; height: 120px; background: rgba(255, 127, 80, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-weight: 700; color: #fff; box-shadow: 0 0 40px rgba(255, 127, 80, 0.3); transition: transform 0.5s ease; font-size: 0.9rem; padding: 5px; }
        .diagram-node:hover { transform: scale(1.15); }

        @media (max-width: 768px) {
          .story-section { min-height: 80vh; }
          .story-section h1 { font-size: 2rem; }
          .story-section h2 { font-size: 1.6rem; }
          .story-section p { font-size: 1rem; }
          .diagram-node { width: 90px; height: 90px; font-size: 0.7rem; }
          .diagram-container { height: 400px; }
        }
      `}</style>
      <div className="story-page">
        <div className="scroll-indicator"><span></span></div>
        
        <div className="parallax-shape" style={{ width: '200px', height: '200px', top: '10%', left: '15%' }}></div>
        <div className="parallax-shape" style={{ width: '150px', height: '150px', top: '70%', left: '70%' }}></div>
        <div className="parallax-shape" style={{ width: '300px', height: '300px', top: '40%', left: '50%' }}></div>
        
        <main>
          {storySections.map(section => (
            <motion.section
              key={section.id}
              id={section.id}
              className={`story-section zoom-fade ${section.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="story-container">
                {section.id === 'intro' ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
                <p dangerouslySetInnerHTML={{ __html: section.content.replace(/`([^`]+)`/g, '<span class="accent">$1</span>') }} />
                
                {section.isDiagram && (
                  <div className="diagram-container">
                    {diagramNodes.map(node => (
                      <div key={node.title} className="diagram-node" style={node.style}>{node.title}</div>
                    ))}
                  </div>
                )}
                
                {section.isProjects && (
                  <div className="projects-grid">
                    {projects.map(proj => <div key={proj} className="project-card">{proj}</div>)}
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </main>
      </div>
    </>
  );
}
