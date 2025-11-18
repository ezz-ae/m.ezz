
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="container relative min-h-[calc(100dvh-4rem)] flex items-center justify-center py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h1 className={cn(
          "font-headline text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl",
          "animate-scroll"
        )}>
          The Physics of Cognition
        </h1>
        <p className={cn(
          "font-headline text-3xl text-muted-foreground md:text-4xl",
          "animate-scroll"
        )}>
          Intelligence is not a function of memory, but of forgetting.
        </p>
        <p className={cn(
          "font-headline text-3xl text-muted-foreground md:text-4xl",
          "animate-scroll"
        )}>
          We design systems that learn by letting go, creating resonant frequencies from the graceful decay of information.
        </p>
        <p className={cn(
          "font-headline text-3xl text-muted-foreground md:text-4xl",
          "animate-scroll"
        )}>
          This is not erasure; it is coherence.
        </p>
      </div>
    </div>
  );
}
