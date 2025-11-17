import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImage } from '@/lib/utils';
import type { Project } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = getImage(project.coverImage);

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={coverImage.imageUrl}
            alt={project.title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={coverImage.imageHint}
          />
        </div>
        <CardHeader>
            <Badge variant="secondary" className="w-fit">{project.category}</Badge>
            <CardTitle className="font-headline text-2xl leading-tight">
                {project.title}
            </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex items-center text-sm font-semibold text-primary">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
