'use client';

import React, { useEffect, useRef } from 'react';
import FooterMinimal from '@/components/FooterMinimal';

const nodesData = [
  { top: '10%', left: '5%', title: 'Cognitive Architecture — Forgetence / FCT', label: 'COGNITIVE ARCHITECTURE', id: 'forgetence' },
  { top: '30%', left: '25%', title: 'OS & Language — NotefullBook OS & NotebookML', label: 'OS · LANGUAGE', id: 'notefullbook' },
  { top: '50%', left: '45%', title: 'Identity & AI Clones — AIXSELF Universe', label: 'IDENTITY · AI CLONES', id: 'aixself' },
  { top: '70%', left: '65%', title: 'Prototype & Physics — The Omega Law', label: 'PROTOTYPE · PHYSICS', id: 'omega' },
  { top: '90%', left: '85%', title: 'DLDCHAIN & Mashroi — Real Estate Intelligence', label: 'DLDCHAIN · MASHROI', id: 'realestate' },
  { top: '20%', left: '75%', title: 'Luredoor & KAP — Security & Traps', label: 'LUREDOOR · KAP', id: 'security' },
  { top: '50%', left: '85%', title: 'BruteBrains & ChainCrack — Puzzles & Crypto Systems', label: 'BRUTEBRAINS · CHAINCRACK', id: 'puzzles' },
  { top: '80%', left: '25%', title: 'MTC & Marketinum — Marketing Ecosystems', label: 'MTC · MARKETINUM', id: 'marketing' },
  { top: '40%', left: '5%', title: 'Ezzton & Setup — Sound & Identity', label: 'EZZTON · SETUP', id: 'sound' },
  { top: '10%', left: '50%', title: 'Philosophy & Language — Scroll Lesson: On Language', label: 'PHILOSOPHY · LANGUAGE', id: 'scroll-lesson' }
];

const AixaPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const diagram = diagramRef.current;
    if (!canvas || !diagram) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (diagram) {
        canvas.width = diagram.offsetWidth;
        canvas.height = diagram.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      tx: number;
      ty: number;
      progress: number;
      xCurrent: number = 0;
      yCurrent: number = 0;

      constructor(x: number, y: number, tx: number, ty: number) {
        this.x = x; this.y = y; this.tx = tx; this.ty = ty;
        this.progress = Math.random();
      }

      update() {
        this.progress += 0.005;
        if (this.progress > 1) this.progress = 0;
        this.xCurrent = this.x + (this.tx - this.x) * this.progress;
        this.yCurrent = this.y + (this.ty - this.y) * this.progress;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.xCurrent, this.yCurrent, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,127,80,0.6)';
        ctx.fill();
      }
    }

    let particles: Particle[] = [];
    const getNodes = () => nodesRef.current.filter(n => n !== null) as HTMLDivElement[];

    function generateParticles() {
      particles = [];
      const currentNodes = getNodes();
      if (!diagram) return;

      currentNodes.forEach((a, i) => {
        currentNodes.forEach((b, j) => {
          if (i < j) {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            const diagramRect = diagram.getBoundingClientRect();
            const x1 = rectA.left + rectA.width / 2 - diagramRect.left;
            const y1 = rectA.top + rectA.height / 2 - diagramRect.top;
            const x2 = rectB.left + rectB.width / 2 - diagramRect.left;
            const y2 = rectB.top + rectB.height / 2 - diagramRect.top;
            for (let k = 0; k < 3; k++) particles.push(new Particle(x1, y1, x2, y2));
          }
        });
      });
    }
    
    let animationFrameId: number;

    function drawConnections() {
      if(!ctx || !diagram) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentNodes = getNodes();
      const diagramRect = diagram.getBoundingClientRect();

      currentNodes.forEach((a, i) => {
        currentNodes.forEach((b, j) => {
          if (i < j) {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            const x1 = rectA.left + rectA.width / 2 - diagramRect.left;
            const y1 = rectA.top + rectA.height / 2 - diagramRect.top;
            const x2 = rectB.left + rectB.width / 2 - diagramRect.left;
            const y2 = rectB.top + rectB.height / 2 - diagramRect.top;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.bezierCurveTo((x1 + x2) / 2, y1, (x1 + x2) / 2, y2, x2, y2);
            ctx.strokeStyle = 'rgba(255,127,80,0.15)';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(drawConnections);
    }
    
    // Initial setup
    setTimeout(() => {
        resizeCanvas();
        generateParticles();
        drawConnections();
    }, 100);

    const handleResize = () => {
        resizeCanvas();
        generateParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

    // Tooltip and Panel Logic
    useEffect(() => {
        const currentNodes = nodesRef.current.filter(n => n !== null) as HTMLDivElement[];

        currentNodes.forEach(node => {
            const title = node.dataset.title || '';
            const notebookId = node.dataset.id || '';
            
            const handleMouseEnter = () => {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = title;
                document.body.appendChild(tooltip);

                const handleMouseMove = (e: MouseEvent) => {
                    tooltip.style.top = `${e.clientY + 15}px`;
                    tooltip.style.left = `${e.clientX + 15}px`;
                };

                const handleMouseLeave = () => {
                    tooltip.remove();
                    node.removeEventListener('mousemove', handleMouseMove);
                    node.removeEventListener('mouseleave', handleMouseLeave);
                };
                
                node.addEventListener('mousemove', handleMouseMove);
                node.addEventListener('mouseleave', handleMouseLeave);
            };

            const handleClick = () => {
                window.location.href = `/notebooks/${notebookId}`;
            };
            
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('click', handleClick);

            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter);
                node.removeEventListener('click', handleClick);
            };
        });
    }, []);


  return (
    <>
      <style jsx global>{`
        .aixa-page {
          background-color: #000;
          color: #fff;
          padding-top: 100px;
          min-height: 100vh;
        }
        .node {
          position: absolute;
          width: 140px;
          height: 140px;
          background: rgba(255, 127, 80, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 0 50px rgba(255, 127, 80, 0.3);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          animation: pulse 3s ease-in-out infinite alternate;
          padding: 10px;
          font-size: 0.8rem;
        }
        .node:hover {
          transform: scale(1.25);
          box-shadow: 0 0 120px rgba(255, 127, 80, 0.6);
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .tooltip {
          position: fixed;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          padding: 10px 15px;
          border-radius: 10px;
          font-size: 0.9rem;
          pointer-events: none;
          z-index: 9999;
          white-space: nowrap;
          box-shadow: 0 0 20px rgba(255, 127, 80, 0.3);
          transition: opacity 0.2s;
        }
      `}</style>
      <main className="aixa-page">
        <section id="architecture" className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light">AIXA Architecture</h1>
            <p className="text-neutral-400 mt-2">A Living Map of the Cognitive Ecosystem</p>
          </div>

          <div ref={diagramRef} id="diagram" style={{ position: 'relative', width: '100%', height: '600px', margin: '50px auto' }}>
            {nodesData.map((nodeInfo, i) => (
              <div
                key={nodeInfo.id}
                ref={el => { nodesRef.current[i] = el; }}
                className="node"
                style={{ top: nodeInfo.top, left: nodeInfo.left }}
                data-title={nodeInfo.title}
                data-id={nodeInfo.id}
              >
                {nodeInfo.label}
              </div>
            ))}
            <canvas ref={canvasRef} id="connections" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}></canvas>
          </div>

          <p className="text-center text-neutral-500 max-w-2xl mx-auto">
            Hover on nodes to reveal short descriptions, click to explore full notebooks. Each node is alive, part of the AIXA cognitive ecosystem.
          </p>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
};

export default AixaPage;
