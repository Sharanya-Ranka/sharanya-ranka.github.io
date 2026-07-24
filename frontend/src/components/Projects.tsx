import React from 'react';
import { ProjectItem } from './ProjectItem';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <main className="space-y-12 overflow-hidden px-1">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Featured Systems
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          A portfolio of computational research, machine learning engineering, and architectural design.
        </p>
      </div>

      {/* Cards List with alternating side entry */}
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectItem 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </main>
  );
};