import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/lib/data';
import { getImage } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import { ProjectFilter } from '@/components/projects/project-filter';

export default function Home() {
  const heroImage = getImage('hero-main');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60dvh] min-h-[500px] w-full text-white md:h-dvh">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 p-4 text-center">
          <h1 className="font-headline text-4xl leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Shaping Space, Defining Futures
          </h1>
          <p className="max-w-2xl font-body text-lg text-primary-foreground/80 md:text-xl">
            Limitation is the mother of meaning. We build structures that
            resonate with purpose and identity.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="#projects">
              Explore Works <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="projects" className="container py-16 md:py-24">
        <ProjectFilter projects={projects} />
      </section>
    </div>
  );
}
