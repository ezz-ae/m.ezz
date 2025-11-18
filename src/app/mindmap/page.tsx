
import { Share2 } from 'lucide-react';

export default function MindMapPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Share2 className="mb-4 h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          The AIXSELF Universe
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a visual representation of the interconnected components of the AIXSELF ecosystem, from the ADEPT kernel to the AIXEYE governance layer.
        </p>
        <div className="mt-8 w-full rounded-lg border-2 border-dashed border-muted bg-card p-12">
          <p className="text-muted-foreground">
            [Mind Map component will be placed here]
          </p>
        </div>
      </div>
    </div>
  );
}
