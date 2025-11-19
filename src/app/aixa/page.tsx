
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import FooterMinimal from '@/components/FooterMinimal';
import { NOTEBOOKS, NotebookId } from '@/components/notebooks/notebook-data';

const nodesData = Object.values(NOTEBOOKS).map((notebook, i) => {
    // Distribute nodes in a more visually pleasing circular layout
    const angle = (i / Object.keys(NOTEBOOKS).length) * 2 * Math.PI;
    const radius = i % 2 === 0 ? 35 : 25; // Alternate radius for variety
    const left = 50 + radius * Math.cos(angle);
    const top = 50 + radius * Math.sin(angle);
    return {
        top: `${top}%`,
        left: `${left}%`,
        title: notebook.title,
        label: notebook.tag,
        id: notebook.id,
    };
});


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

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (diagram) {
        canvas.width = diagram.offsetWidth;
        canvas.height = diagram.offsetHeight;
      }
    };

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
        this.progress += 0.003;
        if (this.progress > 1) this.progress = 0;
        this.xCurrent = this.x + (this.tx - this.x) * this.progress;
        this.yCurrent = this.y + (this.ty - this.y) * this.progress;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.xCurrent, this.yCurrent, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,127,80,0.5)';
        ctx.fill();
      }
    }

    let particles: Particle[] = [];
    const getNodes = () => nodesRef.current.filter(n => n !== null) as HTMLDivElement[];

    function generateParticles() {
      particles = [];
      const currentNodes = getNodes();
      if (!diagram) return;
      const diagramRect = diagram.getBoundingClientRect();

      currentNodes.forEach((a, i) => {
        currentNodes.forEach((b, j) => {
          if (i < j) { // Only connect each pair once
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            const x1 = rectA.left + rectA.width / 2 - diagramRect.left;
            const y1 = rectA.top + rectA.height / 2 - diagramRect.top;
            const x2 = rectB.left + rectB.width / 2 - diagramRect.left;
            const y2 = rectB.top + rectB.height / 2 - diagramRect.top;
            for (let k = 0; k < 2; k++) particles.push(new Particle(x1, y1, x2, y2));
          }
        });
      });
    }
    
    function drawConnections() {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(drawConnections);
    }
    
    const init = () => {
        resizeCanvas();
        generateParticles();
        drawConnections();
    };

    // Use a timeout to ensure all elements are rendered and have dimensions
    const timeoutId = setTimeout(init, 100);

    window.addEventListener('resize', init);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
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
          width: 120px;
          height: 120px;
          background: rgba(255, 127, 80, 0.1);
          border: 1px solid rgba(255, 127, 80, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 0 40px rgba(255, 127, 80, 0.2);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          animation: pulse-node 4s ease-in-out infinite alternate;
          padding: 10px;
          font-size: 0.75rem;
          transform: translate(-50%, -50%); /* Center the nodes */
        }
        .node:hover {
          transform: translate(-50%, -50%) scale(1.2);
          box-shadow: 0 0 100px rgba(255, 127, 80, 0.5);
        }
        @keyframes pulse-node {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.03); }
        }
        .tooltip {
          position: fixed;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          pointer-events: none;
          z-index: 9999;
          white-space: nowrap;
          box-shadow: 0 0 15px rgba(255, 127, 80, 0.2);
          transition: opacity 0.2s;
        }
      `}</style>
      <main className="aixa-page">
        <section id="architecture" className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light">AIXA Architecture</h1>
            <p className="text-neutral-400 mt-2">A Living Map of the Cognitive Ecosystem</p>
          </div>

          <div ref={diagramRef} id="diagram" style={{ position: 'relative', width: '100%', height: 'calc(100vh - 300px)', minHeight: '500px', margin: '50px auto' }}>
            {nodesData.map((nodeInfo, i) => (
              <Link href={`/notebooks/${nodeInfo.id}`} key={nodeInfo.id}>
                <div
                    ref={el => { nodesRef.current[i] = el; }}
                    className="node"
                    style={{ top: nodeInfo.top, left: nodeInfo.left }}
                    title={nodeInfo.title}
                >
                    {nodeInfo.label}
                </div>
              </Link>
            ))}
            <canvas ref={canvasRef} id="connections" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}></canvas>
          </div>

          <p className="text-center text-neutral-500 max-w-2xl mx-auto">
            Each node is a living notebook, a portal into a distinct domain of the AIXSELF cognitive ecosystem. Click to explore.
          </p>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
};

export default AixaPage;
