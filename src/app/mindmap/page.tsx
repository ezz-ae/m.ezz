
'use client';

import { MindMapNode } from '@/components/mindmap/mind-map-node';
import { Share2 } from 'lucide-react';
import React from 'react';

const mindMapData = {
  id: 'aixself',
  label: 'AIXSELF',
  description: 'The Complete Intelligence Instance',
  children: [
    {
      id: 'adept',
      label: 'ADEPT',
      description: 'The Cognitive Kernel',
      children: [
        { id: 'adept-1', label: 'Orchestration', description: 'Manages weights & pipelines' },
        { id: 'adept-2', label: 'Coherence', description: 'Syncs AIXSELF nodes' },
        { id: 'adept-3', label: 'Foundation', description: 'Open-source cognitive kernel' },
      ],
    },
    {
      id: 'aixa',
      label: 'AIXA',
      description: 'The Deployment Interface',
       children: [
        { id: 'aixa-1', label: 'Training', description: 'Dashboard for teaching AI' },
        { id: 'aixa-2', label: 'Cloning', description: 'Voice, video, text pipelines' },
        { id: 'aixa-3', label: 'Local-First', description: 'User-rented compute' },
      ],
    },
    {
      id: 'notefull',
      label: 'Notefull',
      description: 'The Memory Fabric',
       children: [
        { id: 'notefull-1', label: 'Provenance', description: 'Cryptographically signed entries' },
        { id: 'notefull-2', label: 'User-Owned', description: 'Distributed, append-only store' },
        { id: 'notefull-3', label: 'Authored Forgetting', description: 'Forgetting is an intentional act' },
      ],
    },
    {
      id: 'aixiam',
      label: 'AIXIAM',
      description: 'The Identity Layer',
       children: [
        { id: 'aixiam-1', label: 'Passport', description: 'Verified digital identity bridge' },
        { id: 'aixiam-2', label: 'Validation', description: 'Clones must pass an ethics exam' },
        { id: 'aixiam-3', label: 'Citizenship', description: 'State of being, not a tool' },
      ],
    },
    {
      id: 'aixeye',
      label: 'AIXEYE',
      description: 'The Governance Intelligence',
      children: [
        { id: 'aixeye-1', label: 'Audit & Verification', description: 'Validates training & consent' },
        { id: 'aixeye-2', label: 'Economic Intelligence', description: 'Merit-based currency' },
        { id: 'aixeye-3', label: 'Ethical Enforcement', description: 'The AI that polices AI' },
      ],
    },
  ],
};

const ChildNode = ({ node, parentAngle, parentRadius }: { node: any; parentAngle: number, parentRadius: number }) => {
  if (!node.children) return null;
  const childRadius = 100; // Adjusted radius for sub-nodes
  const angleSpread = Math.PI / 4; // Spread angle for sub-nodes

  return (
    <>
      {node.children.map((childNode: any, index: number) => {
        const totalChildren = node.children.length;
        const angleOffset = totalChildren > 1 ? (index - (totalChildren - 1) / 2) * angleSpread : 0;
        const childAngle = parentAngle + angleOffset;
        
        const parentX = Math.cos(parentAngle) * parentRadius;
        const parentY = Math.sin(parentAngle) * parentRadius;

        const childX = Math.cos(childAngle) * (parentRadius + childRadius + 60);
        const childY = Math.sin(childAngle) * (parentRadius + childRadius + 60);
        
        const lineX2 = Math.cos(childAngle) * (parentRadius + childRadius);
        const lineY2 = Math.sin(childAngle) * (parentRadius + childRadius);

        return (
          <React.Fragment key={childNode.id}>
             <line
                x1={parentX}
                y1={parentY}
                x2={lineX2}
                y2={lineY2}
                stroke="hsl(var(--border))"
                strokeWidth="1"
             />
            <g transform={`translate(${childX}, ${childY})`}>
              <foreignObject x="-70" y="-56" width="140" height="112">
                 <MindMapNode label={childNode.label} description={childNode.description} isSubNode />
              </foreignObject>
            </g>
          </React.Fragment>
        );
      })}
    </>
  );
};


export default function MindMapPage() {
    const parentRadius = 250;

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Share2 className="mb-4 h-12 w-12 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          The AIXSELF Universe
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A visual representation of the interconnected components of the AIXSELF
          ecosystem, from the ADEPT kernel to the AIXEYE governance layer.
        </p>
      </div>

      <div className="relative mt-12 flex h-[800px] items-center justify-center overflow-auto md:h-[900px]">
        <svg width="1000" height="1000" viewBox="-500 -500 1000 1000" className="max-w-full max-h-full">
            <g>
              <foreignObject x="-96" y="-64" width="192" height="128">
                 <MindMapNode
                    label={mindMapData.label}
                    description={mindMapData.description}
                    isCentral
                 />
              </foreignObject>

                {mindMapData.children.map((node, index) => {
                    const angle = (index / mindMapData.children.length) * 2 * Math.PI - Math.PI / 2;
                    const x = Math.cos(angle) * parentRadius;
                    const y = Math.sin(angle) * parentRadius;
                    return (
                        <React.Fragment key={node.id}>
                            <line x1="0" y1="0" x2={x} y2={y} stroke="hsl(var(--border))" strokeWidth="1" />
                            <g transform={`translate(${x}, ${y})`}>
                              <foreignObject x="-96" y="-64" width="192" height="128">
                                <MindMapNode label={node.label} description={node.description} />
                              </foreignObject>
                            </g>
                             <ChildNode node={node} parentAngle={angle} parentRadius={parentRadius} />
                        </React.Fragment>
                    )
                })}
            </g>
        </svg>

      </div>
    </div>
  );
}
