'use client';

import { useState, useMemo } from 'react';
import type { Project } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './project-card';
import { Search } from 'lucide-react';

type ProjectFilterProps = {
  projects: Project[];
};

const categories = ['All', 'Residential', 'Commercial', 'Cultural'];

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        return activeCategory === 'All' || project.category === activeCategory;
      })
      .filter((project) => {
        return project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               project.description.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [projects, activeCategory, searchTerm]);

  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <h2 className="text-center font-headline text-4xl font-bold tracking-tight md:text-left">
          Selected Works
        </h2>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="col-span-full py-16 text-center text-muted-foreground">
          <p>No projects found that match your criteria.</p>
        </div>
      )}
    </>
  );
}
