
import { ArrowRight, BookOpen, BrainCircuit, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getImage } from '@/lib/utils';
import { cn } from '@/lib/utils';

const IntroSection = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  image,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: { src: string; alt: string; hint: string };
  className?: string;
}) => (
  <section
    className={cn(
      'relative py-24 md:py-32 motion-safe:animate-fade-in-scroll [animation-timeline:view()] [animation-range:entry_25%_cover_50%]',
      className
    )}
  >
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover"
      data-ai-hint={image.hint}
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="container relative z-10 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          {description}
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={buttonLink}>
            {buttonText} <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default function Home() {
  const libraryImage = getImage('home-library-bg');
  const theoryImage = getImage('home-theory-bg');
  const mindmapImage = getImage('home-mindmap-bg');

  return (
    <div>
      <div className="flex h-dvh min-h-[600px] items-center justify-center bg-background text-foreground">
        <div className="container text-center">
          <h1 className="font-headline text-6xl font-bold tracking-tighter animate-fade-in-scale-up md:text-8xl lg:text-9xl">
            The Physics of Cognition
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-delay md:text-xl">
            I build forgetting-based intelligence systems: architectures where
            AI forgets safely, resonates clearly, and aligns with how human
            cognition actually works.
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

      <IntroSection
        icon={<BookOpen className="h-12 w-12 text-primary" />}
        title="Explore The Library"
        description="A curated collection of living notebooks detailing the architecture and philosophy of the AIXSELF universe."
        buttonText="Enter the Library"
        buttonLink="/library"
        image={{
          src: libraryImage.imageUrl,
          alt: libraryImage.description,
          hint: libraryImage.imageHint,
        }}
      />

      <IntroSection
        icon={<BrainCircuit className="h-12 w-12 text-primary" />}
        title="Understand The Theory"
        description="Delve into the core principles of Cognitive Architecture, where limitation, resonance, and meaning forge intelligent systems."
        buttonText="Read the Theory"
        buttonLink="/theory"
        image={{
          src: theoryImage.imageUrl,
          alt: theoryImage.description,
          hint: theoryImage.imageHint,
        }}
        className="bg-card"
      />

      <IntroSection
        icon={<Share2 className="h-12 w-12 text-primary" />}
        title="Visualize The Universe"
        description="Interact with a visual map of the AIXSELF ecosystem, from the ADEPT kernel to the AIXEYE governance layer."
        buttonText="View the MindMap"
        buttonLink="/mindmap"
        image={{
          src: mindmapImage.imageUrl,
          alt: mindmapImage.description,
          hint: mindmapImage.imageHint,
        }}
      />
    </div>
  );
}
