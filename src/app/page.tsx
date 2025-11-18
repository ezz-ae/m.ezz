
import { cn } from '@/lib/utils';
import { NavCard } from '@/components/home/nav-card';

export default function Home() {
  return (
    <div className="container relative min-h-dvh flex flex-col items-center justify-center py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto space-y-12">
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
         <p className={cn(
          "font-headline text-3xl text-muted-foreground md:text-4xl pt-12",
          "animate-scroll"
        )}>
          Explore the architecture.
        </p>
      </div>

       <div className="mt-24 grid w-full max-w-5xl gap-8 md:grid-cols-3">
          <NavCard
            href="/library"
            image="home-library-bg"
            title="The Library"
            description="Enter the living blueprints of the AIXSELF universe."
          />
          <NavCard
            href="/theory"
            image="home-theory-bg"
            title="The Theory"
            description="Understand the philosophy behind our cognitive architecture."
          />
          <NavCard
            href="/mindmap"
            image="home-mindmap-bg"
            title="The Mind Map"
            description="Visualize the interconnected components of the ecosystem."
          />
        </div>

    </div>
  );
}
