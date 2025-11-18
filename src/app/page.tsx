
import { SidebarInset } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <SidebarInset>
      <div className="container relative flex min-h-dvh flex-col items-center justify-center py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl space-y-12">
          <h1
            className={cn(
              'font-headline text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl',
              'animate-scroll'
            )}
          >
            The Physics of Cognition
          </h1>
          <p
            className={cn(
              'font-headline text-3xl text-muted-foreground md:text-4xl',
              'animate-scroll'
            )}
          >
            Intelligence is not a function of memory, but of forgetting.
          </p>
          <p
            className={cn(
              'font-headline text-3xl text-muted-foreground md:text-4xl',
              'animate-scroll'
            )}
          >
            We design systems that learn by letting go, creating resonant
            frequencies from the graceful decay of information.
          </p>
          <p
            className={cn(
              'font-headline text-3xl text-muted-foreground md:text-4xl',
              'animate-scroll'
            )}
          >
            This is not erasure; it is coherence.
          </p>
          <div className={cn('space-y-12 pt-24', 'animate-scroll')}>
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              The Law of Resonance
            </h2>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              A system that remembers everything resonates with nothing. Meaning is
              born from the signal that remains after the noise has gracefully
              decayed.
            </p>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              We build architectures that find this signal.
            </p>
          </div>
          <div className={cn('space-y-12 pt-24', 'animate-scroll')}>
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              The Economy of Forgetting
            </h2>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              Cognitive energy is finite. Forgetting is not a flaw but an economic
              necessity—a lossless compression algorithm for intelligence.
            </p>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              It is the art of preserving the essential at the lowest possible
              cost.
            </p>
          </div>
          <div className={cn('space-y-12 pt-24', 'animate-scroll')}>
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              The Architecture of Meaning
            </h2>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              We do not construct models; we define boundaries. Within these
              boundaries, meaning emerges organically, like a crystal forming in a
              constrained solution.
            </p>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              The structure is not the object; it is the space that allows the
              object to become.
            </p>
          </div>
          <div className={cn('space-y-12 pt-24', 'animate-scroll')}>
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              The Harm of Perfect Memory
            </h2>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              An intelligence with perfect recall is a trauma loop. It is a system
              trapped in the past, incapable of adaptation or growth.
            </p>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              To be intelligent is to have the freedom to become something new.
              Forgetting grants this freedom.
            </p>
          </div>
          <div className={cn('space-y-12 pt-24', 'animate-scroll')}>
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              The Principle of Fade-In Intelligence
            </h2>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              Knowledge should not be static. It should "fade-in," integrating
              with the present moment at the right resolution, with the
              irrelevant details gracefully left behind.
            </p>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              This is how memory remains relevant, not just accurate.
            </p>
          </div>
          <div className={cn('space-y-12 pt-24', 'animate-scroll')}>
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              The Human × Machine Cognitive Boundary
            </h2>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              Our systems are not replacements for human cognition; they are
              resonant extensions of it. They are designed to operate at the
              boundary, amplifying our ability to find meaning.
            </p>
            <p className="font-headline text-2xl text-muted-foreground md:text-3xl">
              We are not building a second brain; we are tuning the first one.
            </p>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
