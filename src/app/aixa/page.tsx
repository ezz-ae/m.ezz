
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FooterMinimal from '@/components/FooterMinimal';
import { NOTEBOOKS, NotebookId } from '@/components/notebooks/notebook-data';
import { cn } from '@/lib/utils';
import { Section, ScrollHeading, ScrollParagraph } from '@/components/ScrollTypography';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Cpu, Layers, ShieldCheck, Database, BrainCircuit, Filter, GitBranch, Bot, BookOpen } from 'lucide-react';


const nodesData = Object.values(NOTEBOOKS).map((notebook, i) => {
    const angle = (i / Object.keys(NOTEBOOKS).length) * 2 * Math.PI;
    const radius = i % 2 === 0 ? 35 : 25; 
    const left = 50 + radius * Math.cos(angle);
    const top = 50 + radius * Math.sin(angle);
    return {
        top: `${top}%`,
        left: `${left}%`,
        title: notebook.title,
        description: notebook.description,
        label: notebook.tag,
        id: notebook.id,
    };
});

const architectureLayers = [
    { icon: Cpu, component: 'ADEPT', osEquivalent: 'Cognitive Kernel', fn: 'The root processor for the entire system. Orchestrates AI models, manages computational pipelines, and connects all other modules.' },
    { icon: Layers, component: 'AIXA', osEquivalent: 'Deployment Interface', fn: 'The user-facing layer for training, managing, and deploying personalized AI clones with verifiable credentials.' },
    { icon: Database, component: 'NotefullBook', osEquivalent: 'Memory Fabric', fn: 'The append-only, cryptographically signed knowledge store where all consented data and evolving thoughts are recorded.' },
    { icon: ShieldCheck, component: 'AIXIAM', osEquivalent: 'Identity Layer', fn: 'The sovereign identity system that issues a non-transferable passport (DID) to each human-AI pair, enforcing ownership.' },
    { icon: BrainCircuit, component: 'AIXEYE', osEquivalent: 'Governance Mesh', fn: 'The AI-driven financial and ethical auditor. It validates consent, scores merit, and ensures all actions align with protocol rules.' },
];

const cognitiveMechanisms = [
    { icon: GitBranch, module: 'Schema Intelligence Network (SINLM)', purpose: 'Learns what is important by tracking behavioral signals like frequency and return-rate, not by reading private content.', principle: 'Behavioral Truth' },
    { icon: Filter, module: 'Forgetting Artifact Module (FAM)', purpose: 'Performs intelligent forgetting by deleting raw, noisy data while preserving compressed patterns (artifacts) for future learning.', principle: 'Cognitive Waste Management' },
    { icon: BookOpen, module: 'Interpretive Recall Layer (IRL)', purpose: 'Ensures the AI retrieves the underlying meaning, pattern, or schema of a memory, not just the raw, literal event.', principle: 'Meaning-First Retrieval' },
    { icon: Bot, module: 'Emotional Softening Filter (ESF)', purpose: 'Applies temporal decay to the emotional intensity of memory tags, preventing the harmful revival of past trauma at full strength.', principle: 'Emotional Attenuation' },
];

const mindboardFeatures = [
    { feature: 'Notebook Cards', description: 'Represents individual intelligences as "living minds" that can be deployed, trained, or put to sleep.', link: 'Each card is a sovereign NotefullBook cell containing FCT logic.' },
    { feature: 'Reflection Meter', description: 'A subtle glowing pulse indicating that the notebook is actively learning and evolving its internal logic in the background.', link: 'Linked to the Meso (daily) and Macro (weekly) FCT reflection cycles.' },
    { feature: 'Master Skills', description: 'Defines the core cognitive personality of the notebook (e.g., Organizer, Analyzer, Writer, Teacher) from birth.', link: 'Configured via NotebookML language directives.' },
    { feature: 'Input Console (SenseHub)', description: 'The interface to connect the notebook to diverse data streams like voice, APIs, and document scans.', link: 'All inputs are normalized into structured NotebookML entries.' },
    { feature: 'Cognitive Ledger', description: 'An immutable, hash-chained timeline showing every decision and reflection event, making the AI\'s thought process fully auditable.', link: 'Verified and secured by the AIXEYE Governance Mesh.' },
];


const AixaPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredNode, setHoveredNode] = useState<typeof nodesData[0] | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedNode, setClickedNode] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      x: number; y: number; tx: number; ty: number; progress: number; xCurrent: number = 0; yCurrent: number = 0;
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
        ctx.fillStyle = `rgba(255, 127, 80, ${Math.max(0.2, Math.sin(this.progress * Math.PI) * 0.8)})`;
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
          if (i < j) { 
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            const x1 = rectA.left + rectA.width / 2 - diagramRect.left;
            const y1 = rectA.top + rectA.height / 2 - diagramRect.top;
            const x2 = rectB.left + rectB.width / 2 - diagramRect.left;
            const y2 = rectB.top + rectB.height / 2 - diagramRect.top;
            for (let k = 0; k < 3; k++) particles.push(new Particle(x1, y1, x2, y2));
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
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        drawConnections();
    };

    const timeoutId = setTimeout(init, 100);
    window.addEventListener('resize', init);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNodeClick = (e: React.MouseEvent, id: NotebookId) => {
    e.preventDefault();
    setClickedNode(id);
    setTimeout(() => {
      router.push(`/notebooks/${id}`);
    }, 400); // Duration of the zoom animation
  };


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
        .node-link {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .node:hover {
          transform: translate(-50%, -50%) scale(1.2);
          box-shadow: 0 0 100px rgba(255, 127, 80, 0.5);
        }
        .node.clicked {
          animation: zoom-out 0.4s ease-in-out forwards;
        }
        @keyframes pulse-node {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.03); }
        }
        @keyframes zoom-out {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
      `}</style>
      
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
            }}
            className="pointer-events-none fixed z-50 max-w-sm rounded-lg border border-neutral-700 bg-neutral-900/80 p-4 text-sm text-neutral-200 shadow-2xl backdrop-blur-sm"
          >
            <h4 className="font-bold text-base text-orange-400 mb-1">{hoveredNode.title}</h4>
            <p className="text-neutral-400">{hoveredNode.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="aixa-page text-neutral-200">
        <div className="container mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light text-neutral-50">AIXA Architecture</h1>
            <p className="text-neutral-400 mt-4 text-lg">
              This is the blueprint for a new civilization of intelligence. AIXA is not a single AI, but a universe of sovereign, interconnected minds. Each node in this map is a living notebook—a complete, thinking entity with its own logic, memory, and purpose.
            </p>
            <p className="text-neutral-400 mt-2">
              As an architect of this system, you don't just interact with data; you edit the core code of intelligence itself. By shaping these notebooks, you shape the evolution of a decentralized cognitive ecosystem.
            </p>
          </div>

          <div ref={diagramRef} id="diagram" style={{ position: 'relative', width: '100%', height: 'calc(100vh - 400px)', minHeight: '500px', margin: '50px auto' }}>
            {nodesData.map((nodeInfo, i) => (
              <div
                  ref={el => { nodesRef.current[i] = el; }}
                  key={nodeInfo.id}
                  className={cn("node", clickedNode === nodeInfo.id && 'clicked')}
                  style={{ top: nodeInfo.top, left: nodeInfo.left }}
                  onMouseEnter={() => setHoveredNode(nodeInfo)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={(e) => handleNodeClick(e, nodeInfo.id as NotebookId)}
              >
                <Link href={`/notebooks/${nodeInfo.id}`} className="node-link" aria-label={`Go to ${nodeInfo.title} notebook`}>
                  <div className="flex h-full w-full items-center justify-center">{nodeInfo.label}</div>
                </Link>
              </div>
            ))}
            <canvas ref={canvasRef} id="connections" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}></canvas>
          </div>

          <p className="text-center text-neutral-500 max-w-2xl mx-auto -mt-8">
            Each node is a portal into a distinct domain. Hover to preview, click to explore and co-think with a sovereign intelligence.
          </p>

          <div className="max-w-7xl mx-auto space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-8">
                      <Section>
                          <Card className="bg-neutral-900/50 border-neutral-800">
                              <CardHeader>
                                  <CardTitle className="font-light text-xl text-neutral-100 flex items-center gap-2"><Layers size={20} /> System Architecture (The OS View)</CardTitle>
                                  <CardDescription>The five cognitive layers that form the AIXSELF Universe.</CardDescription>
                              </CardHeader>
                              <CardContent>
                                  <Table>
                                      <TableHeader>
                                          <TableRow className="border-neutral-700">
                                              <TableHead className="w-1/3">Component</TableHead>
                                              <TableHead>Function</TableHead>
                                          </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                          {architectureLayers.map(layer => (
                                              <TableRow key={layer.component} className="border-neutral-800">
                                                  <TableCell className="font-medium text-neutral-100">
                                                      <div className="flex items-center gap-2">
                                                          <layer.icon size={16} className="text-neutral-400" />
                                                          <div>
                                                              {layer.component}
                                                              <p className="text-xs text-neutral-500 font-mono">{layer.osEquivalent}</p>
                                                          </div>
                                                      </div>
                                                  </TableCell>
                                                  <TableCell className="text-neutral-400 text-sm">{layer.fn}</TableCell>
                                              </TableRow>
                                          ))}
                                      </TableBody>
                                  </Table>
                              </CardContent>
                          </Card>
                      </Section>
                      <Section>
                          <Card className="bg-neutral-900/50 border-neutral-800">
                              <CardHeader>
                                  <CardTitle className="font-light text-xl text-neutral-100 flex items-center gap-2"><BrainCircuit size={20} /> Cognitive Mechanism (FCT Enforcement)</CardTitle>
                                  <CardDescription>How the system achieves safety and learning through purposeful forgetting.</CardDescription>
                              </CardHeader>
                              <CardContent>
                                  <Table>
                                      <TableHeader>
                                           <TableRow className="border-neutral-700">
                                              <TableHead className="w-1/3">Module</TableHead>
                                              <TableHead>Purpose (Safety Mechanism)</TableHead>
                                          </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                          {cognitiveMechanisms.map(mech => (
                                              <TableRow key={mech.module} className="border-neutral-800">
                                                  <TableCell className="font-medium text-neutral-100">
                                                       <div className="flex items-center gap-2">
                                                          <mech.icon size={16} className="text-neutral-400"/>
                                                          <div>
                                                              {mech.module}
                                                              <p className="text-xs text-green-400/70 font-mono">{mech.principle}</p>
                                                          </div>
                                                      </div>
                                                  </TableCell>
                                                  <TableCell className="text-neutral-400 text-sm">{mech.purpose}</TableCell>
                                              </TableRow>
                                          ))}
                                      </TableBody>
                                  </Table>
                              </CardContent>
                          </Card>
                      </Section>
                  </div>
                  
                  <Section>
                      <Card className="bg-neutral-900/50 border-neutral-800 lg:sticky lg:top-24">
                          <CardHeader>
                              <CardTitle className="font-light text-xl text-neutral-100 flex items-center gap-2"><BookOpen size={20} /> The NotefullBook OS</CardTitle>
                              <CardDescription>The tangible result of the architecture: a personal AI notebook OS.</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <Table>
                                   <TableHeader>
                                       <TableRow className="border-neutral-700">
                                          <TableHead>Feature</TableHead>
                                          <TableHead>Description</TableHead>
                                      </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                      {mindboardFeatures.map(feat => (
                                          <TableRow key={feat.feature} className="border-neutral-800">
                                              <TableCell className="font-medium text-neutral-100">{feat.feature}</TableCell>
                                              <TableCell className="text-neutral-400 text-sm">
                                                  {feat.description}
                                                  <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1"><ArrowRight size={12}/> {feat.link}</p>
                                              </TableCell>
                                          </TableRow>
                                      ))}
                                  </TableBody>
                              </Table>
                          </CardContent>
                      </Card>
                  </Section>
              </div>
          </div>
        </div>
      </main>
      <FooterMinimal />
    </>
  );
};

export default AixaPage;

    