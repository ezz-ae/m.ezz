// src/components/notebooks/SkillPicker.tsx
"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

const masterSkills = [
  "Organizer", "Archiver", "Planner", "Writer", "Teacher", "Analyzer", "Monitor"
];

export function SkillPicker() {
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {masterSkills.map((skill) => (
        <button
          key={skill}
          onClick={() => toggleSkill(skill)}
          className={cn(
            "px-3 py-1.5 text-sm rounded-full border transition-colors",
            selectedSkills.includes(skill)
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:border-neutral-600"
          )}
        >
          {skill}
        </button>
      ))}
    </div>
  );
}
