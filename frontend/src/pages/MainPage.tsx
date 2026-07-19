import React from 'react';
import { portfolioData } from '../data/projectsData';
import { ProjectItem } from '../components/ProjectItem';

export const MainPage: React.FC = () => {
  const { name, title, bio, profileImageUrl, projects } = portfolioData;

  return (
    // Minimalistic light-grey background canvas
    <div className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Unrestricted Root-Level Profile Section (Centered photo + bio to the side) */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-10 pt-4">
          {/* Avatar Side Image with subtle styling */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-slate-200 shadow shrink-0 bg-white p-1">
            <img 
              src={profileImageUrl} 
              alt={`${name} avatar`} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          {/* Text Content unconfined at the root level */}
          <div className="text-center sm:text-left space-y-3.5 pt-3">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-950">
                {name}
              </h1>
              <p className="text-sm font-semibold text-blue-600 tracking-wider mt-1.5">
                {title}
              </p>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {bio}
            </p>
          </div>
        </header>

        {/* Projects Section Wrapper */}
        {/* CRITICAL: We need 'overflow-hidden' on this wrapper to ensure the 
            massive negative margins on the cards don't cause horizontal 
            scrolling on the page. */}
        <main className="space-y-12 overflow-hidden px-1">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Featured Systems
            </h2>
            <p className="text-sm text-slate-500 mt-1">A portfolio of computational research, machine learning engineering, and architectural design.</p>
          </div>

          {/* Cards List with alternating side entry */}
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <ProjectItem 
                key={project.id} 
                project={project} 
                index={index} // Pass the index (0, 1, 2) to the card
              />
            ))}
          </div>
        </main>
        
        {/* Subtle dynamic footer acts as a visual anchor */}
        <footer className="text-center text-xs text-slate-500 pt-10 border-t border-slate-100">
          © {new Date().getFullYear()} {name}. Built using React, TypeScript, and Tailwind CSS.
        </footer>
      </div>
    </div>
  );
};