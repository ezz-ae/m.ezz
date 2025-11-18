
import { MindMapNode } from '@/components/mindmap/mind-map-node';
import { Share2 } from 'lucide-react';

const mindMapData = {
  id: 'aixself',
  label: 'AIXSELF',
  description: 'The Complete Intelligence Instance',
  children: [
    {
      id: 'adept',
      label: 'ADEPT',
      description: 'The Cognitive Kernel',
    },
    {
      id: 'aixa',
      label: 'AIXA',
      description: 'The Deployment Interface',
    },
    {
      id: 'notefull',
      label: 'Notefull',
      description: 'The Memory Fabric',
    },
    {
      id: 'aixiam',
      label: 'AIXIAM',
      description: 'The Identity Layer',
    },
    {
      id: 'aixeye',
      label: 'AIXEYE',
      description: 'The Governance Intelligence',
    },
  ],
};

export default function MindMapPage() {
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

      <div className="relative mt-20 flex min-h-[400px] items-center justify-center">
        {/* Central Node */}
        <MindMapNode
          label={mindMapData.label}
          description={mindMapData.description}
          isCentral
        />

        {/* Connecting Lines and Child Nodes */}
        {mindMapData.children.map((node, index) => {
          const angle = (index / mindMapData.children.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * 250; // 250 is the radius
          const y = Math.sin(angle) * 200;

          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Line */}
              <div
                className="absolute origin-center-center"
                style={{
                  width: '250px',
                  height: '1px',
                  backgroundColor: 'hsl(var(--border))',
                  transform: `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`,
                  transformOrigin: '100% 50%',
                  top: `calc(50% + ${-y}px)`,
                  left: `calc(50% + ${-x}px)`,
                  zIndex: -1,
                }}
              />
              <MindMapNode label={node.label} description={node.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
