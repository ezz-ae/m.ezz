import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { getImage } from '@/lib/utils';
import { DesignInsights } from '@/components/projects/design-insights';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: `${project.title} | Ezz.AE Projects`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const coverImage = getImage(project.coverImage);

  return (
    <article className="bg-background">
      <header className="relative h-[50dvh] min-h-[400px] w-full">
        <Image
          src={coverImage.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={coverImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-start justify-end p-4 text-white md:container">
          <div className="max-w-3xl pb-8">
            <div className="space-x-2">
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <Badge variant="secondary" className="mb-2">{project.year}</Badge>
            </div>
            <h1 className="font-headline text-4xl leading-tight tracking-tight md:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </header>
      
      <div className="container py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-semibold">About the Project</h2>
            <div className="prose prose-lg mt-4 max-w-none">
              <p>{project.longDescription}</p>
            </div>
          </div>
          <div className="lg:col-span-1">
             <DesignInsights 
                designDescription={project.longDescription}
                keyElements={project.keyElements}
              />
          </div>
        </div>
      </div>

      <div className="container pb-16 md:pb-24">
        <h2 className="mb-8 text-center font-headline text-3xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.images.map((imageId) => {
            const image = getImage(imageId);
            return (
              <div key={imageId} className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={image.imageHint}
                />
              </div>
            );
          })}
        </div>
      </div>

    </article>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
