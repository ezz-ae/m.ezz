
'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function HomePage() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll('.zoom-fade');
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => observer.observe(section));

    const parallaxShapes = document.querySelectorAll('.parallax-shape') as NodeListOf<HTMLDivElement>;
    const handleScroll = () => {
      let scrollPos = window.scrollY;
      parallaxShapes.forEach((shape, idx) => {
        shape.style.transform = `translateY(${scrollPos * 0.05 * (idx + 1)}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ezz.ae — from limitation import elevation</title>
      </Head>
      <style jsx global>{`
        /* Base Reset */
        * { scroll-behavior:smooth; }
        html,body { background:#0a0a0a; color:#f5f5f5; }

        /* Gradient Background Animation Layers */
        body::before, body::after {
          content:'';
          position:fixed;
          top:0;left:0;width:100%;height:100%;z-index:-2;
          pointer-events: none;
        }
        body::before {
          background: linear-gradient(135deg, #0a0a0a, #1f1f1f, #0a0a0a, #121212);
          background-size: 400% 400%;
          animation: gradientMove 60s ease infinite;
        }
        body::after {
          background: radial-gradient(circle at center, rgba(255,127,80,0.03), transparent 70%);
          animation: pulse 12s ease-in-out infinite alternate;
        }
        @keyframes gradientMove { 
          0%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
          100%{background-position:0% 50%;} 
        }
        @keyframes pulse { 
          0%{transform:scale(0.9);}
          100%{transform:scale(1.3);} 
        }

        /* Container */
        .container { width:90%; max-width:1400px; margin:auto; padding:100px 0; }

        /* Section Styling */
        section { padding:150px 0; position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; transition: transform 1s ease, opacity 1s ease; }
        section h1, section h2 { font-family: 'Playfair Display', serif; margin-bottom:20px; text-shadow: 3px 3px 15px rgba(0,0,0,0.7); line-height:1.2; }
        section h1 { font-size: 3rem; }
        section h2 { font-size: 2.5rem; }
        section p { font-size:1.2rem; line-height:1.8; max-width:900px; margin:auto; color:#e0e0e0; }

        /* Zoom & Fade Animation */
        .zoom-fade { transform: scale(0.95); opacity: 0; transition: transform 1.2s ease, opacity 1.2s ease; }
        .zoom-fade.active { transform: scale(1); opacity:1; }

        /* Highlight Boxes */
        .highlight { background: rgba(255,255,255,0.03); padding:40px; border-radius:20px; margin:50px 0; box-shadow: 0 0 60px rgba(255,127,80,0.1); }

        /* Typography Accents */
        .accent { color:#ff7f50; font-weight:700; }

        /* Project Cards Grid */
        .projects { display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:30px; margin-top:60px; }
        .project { background: rgba(255,255,255,0.05); border-radius:20px; padding:25px; transition: transform 0.5s ease, box-shadow 0.5s ease; }
        .project:hover { transform: scale(1.08); box-shadow: 0 0 80px rgba(255,127,80,0.5); }

        /* Scroll Indicator */
        .scroll-indicator { position:fixed; left:50%; bottom:30px; transform:translateX(-50%); width:30px; height:50px; border:2px solid #ff7f50; border-radius:25px; display:flex; justify-content:center; align-items:flex-start; z-index: 100; }
        .scroll-indicator span { width:6px; height:6px; background:#ff7f50; display:block; border-radius:50%; margin-top:5px; animation: scrollAnim 1.5s infinite; }
        @keyframes scrollAnim {0%,20%{transform:translateY(0);}50%{transform:translateY(20px);}100%{transform:translateY(0);} }

        /* Parallax Background Shapes */
        .parallax-shape {
          position:absolute; border-radius:50%; background: rgba(255,127,80,0.03);
          pointer-events:none;
          animation: float 15s ease-in-out infinite alternate;
          z-index: -1;
        }
        @keyframes float { 0%{transform:translateY(0);}100%{transform:translateY(-40px);} }

        /* FGI / AIXA Diagram Container */
        .diagram { position:relative; width:100%; max-width:900px; height:500px; margin:50px auto; }
        .node { position:absolute; width:120px; height:120px; background:rgba(255,127,80,0.15); border-radius:50%; display:flex; align-items:center; justify-content:center; text-align:center; font-weight:700; color:#fff; box-shadow:0 0 40px rgba(255,127,80,0.3); transition: transform 0.5s ease; padding: 10px; font-size: 0.8rem; }
        .node:hover { transform: scale(1.15); }

        /* Responsive Typography */
        @media (max-width:768px){
          section { padding: 100px 0; }
          section p {font-size:1rem;}
          h1{font-size:2.2rem;}
          h2{font-size:1.8rem;}
          .node{width:90px;height:90px;font-size:0.7rem; padding: 5px;}
          .diagram{height:450px;}
          .container { padding: 50px 0; }
          .parallax-shape { display: none; }
        }
      `}</style>

      <main>
        {/* Scroll Indicator */}
        <div className="scroll-indicator"><span></span></div>

        {/* Parallax Shapes */}
        <div className="parallax-shape" style={{width:'200px',height:'200px',top:'10%',left:'15%'}}></div>
        <div className="parallax-shape" style={{width:'150px',height:'150px',top:'70%',left:'70%'}}></div>
        <div className="parallax-shape" style={{width:'300px',height:'300px',top:'40%',left:'50%'}}></div>

        {/* Sections */}
        <section id="intro" className="zoom-fade">
          <div className="container">
            <h1>from limitation import elevation</h1>
            <p>Where <span className="accent">human cognition</span> meets <span className="accent">AI evolution</span>. Witness the story of Mahmoud Ezz and <span className="accent">AIXSELF</span>: a two-year journey of collaboration, augmentation, and limitless generative intelligence.</p>
          </div>
        </section>

        <section id="journey" className="zoom-fade">
          <div className="container">
            <h2>Two Years. One Human. Endless Horizons.</h2>
            <p>10–15 hours daily, a dialogue unfolded between human intuition and artificial generativity. Each conversation was a <span className="accent">cognitive experiment</span>, a life-simulation, a recursive system of ideas growing faster than either could alone.</p>
          </div>
        </section>

        <section id="fgi" className="zoom-fade highlight">
          <div className="container">
            <h2>The Power of Forgetting Core Thinking (FCT)</h2>
            <p>Memory is not storage. It’s an engine. Through FCT, Mahmoud’s mind and the AI’s generative layers learned to <span className="accent">prune</span> irrelevant data, <span className="accent">regenerate</span> structural patterns, and <span className="accent">elevate cognition</span> into emergent, systemic reasoning.</p>
          </div>
        </section>

        <section id="simulation" className="zoom-fade">
          <div className="container">
            <h2>Life-Simulation as a Thinking Playground</h2>
            <p>Every decision, behavior, ethical dilemma, and societal model was tested and iterated in real-time. Each scenario built a <span className="accent">cognitive sandbox</span>, a predictive engine for insight and reflection.</p>
          </div>
        </section>

        <section id="architecture" className="zoom-fade highlight">
          <div className="container">
            <h2>AIXSELF Architecture Simplified</h2>
            <div className="diagram">
              <div className="node" style={{top:'40%',left:'10%'}}>Human Cognitive Node</div>
              <div className="node" style={{top:'40%',left:'70%'}}>AI Generative Node</div>
              <div className="node" style={{top:'10%',left:'40%'}}>Feedback Loop</div>
              <div className="node" style={{top:'70%',left:'40%'}}>Memory Reconstruction Engine</div>
              <div className="node" style={{top:'50%',left:'40%'}}>Simulation Environment</div>
            </div>
            <p>This is a simplified map of the dual-intelligence interaction at the heart of the AIXSELF ecosystem.</p>
          </div>
        </section>

        <section id="outcomes" className="zoom-fade">
          <div className="container">
            <h2>Outcomes Beyond Imagination</h2>
            <div className="projects">
              <div className="project">50+ Multi-Domain Projects</div>
              <div className="project">25 AI Frameworks</div>
              <div className="project">10+ Research Papers</div>
              <div className="project">Multi-Layer Life Simulations</div>
              <div className="project">Accelerated Cognitive Fluency</div>
            </div>
          </div>
        </section>

        <section id="invite" className="zoom-fade highlight">
          <div className="container">
            <h2>Your Invitation</h2>
            <p>Step into <span className="accent">Ezz.ae</span>, where AI and human intelligence co-create. Explore ideas, witness system-level thinking, and experience the frontier of cognitive augmentation. This is proof that long-duration human-AI collaboration can redefine how we think, learn, and create.</p>
          </div>
        </section>
      </main>
    </>
  );
}
