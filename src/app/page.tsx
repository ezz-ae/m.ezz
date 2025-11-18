
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="container relative min-h-[calc(100dvh-4rem)] flex items-center justify-center py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className={cn(
          "font-headline text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl",
          "animate-scroll"
        )}>
          The Physics of Cognition
        </h1>
        <p className={cn(
          "mt-8 text-lg text-muted-foreground md:text-xl",
          "animate-scroll"
        )}>
          I build forgetting-based intelligence systems: architectures where AI
          forgets safely, resonates clearly, and aligns with how human
          cognition actually works. This is not just a philosophy; it is a
          structural law we build upon. We create systems that are not just seen, but
          felt and understood.
        </p>
        <div className={cn(
            "mt-10 flex flex-wrap justify-center gap-4",
            "animate-scroll"
        )}>
          <Button asChild size="lg">
            <Link href="/library">
              Explore The Library <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/theory">Understand The Theory</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
