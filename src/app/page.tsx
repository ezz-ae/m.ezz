
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex grow items-center justify-center bg-background text-foreground">
      <div className="container text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
          The Physics of Cognition
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          I build forgetting-based intelligence systems: architectures where AI
          forgets safely, resonates clearly, and aligns with how human cognition
          actually works.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/notebooks">
              Explore Notebooks <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">About The Philosophy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
