
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex grow items-center justify-center bg-background text-foreground">
      <div className="container text-center">
        <h1 className="font-headline text-6xl font-bold tracking-tighter animate-fade-in-scale-up md:text-8xl lg:text-9xl">
          The Physics of Cognition
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-delay md:text-xl">
          I build forgetting-based intelligence systems: architectures where AI
          forgets safely, resonates clearly, and aligns with how human cognition
          actually works.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-delay">
          <Button asChild size="lg">
            <Link href="/library">
              Explore The Library <ArrowRight className="ml-2" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline">
            <Link href="/blog">Read The Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
