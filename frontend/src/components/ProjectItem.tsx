import React from 'react';
import type { Project } from '../data/projectsData';

interface ProjectItemProps {
  project: Project;
  index: number; // Crucial prop for determining entry side and mirroring
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const { title, description, imageUrl, githubUrl, appUrl, tags } = project;
  
  const isEnteringFromLeft = index % 2 === 0;

  // Key styling strategy: Use massive negative margins and large paddings to 
  // allow the card's background to stretch right to the edge of the *browser window*,
  // while keeping the content neatly aligned with your central layout.
  
  // Outer container controls the entry "stretch" and full-width background color.
  const stretchStyles = isEnteringFromLeft
    ? "ml-[-5vw] mr-[30vw] md:pl-[5vw] rounded-r-xl border-l-0" // Stretches left off-screen
    : "mr-[-5vw] md:pr-[5vw] rounded-l-xl border-r-0"; // Stretches right off-screen

  // Flexbox order controls image placement (on left for even, on right for odd).
  const imageOrderStyles = isEnteringFromLeft
    ? "md:order-2" // Image is rendered first (on the left)
    : "md:order-1 md:border-l"; // Image rendered second (on the right) and adds a divider

  const textOrderStyles = isEnteringFromLeft
    ? "md:order-1" // Text is rendered second (on the right)
    : "md:order-2"; // Text is rendered first (on the left)

  return (
    <div 
      className={`flex flex-col md:flex-row bg-white border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 w-full hover:shadow-md hover:border-blue-200/80 hover:bg-slate-50/50 group ${stretchStyles}`}
    >
      
      {/* 1. Visual / Image Section */}
      <div className={`md:w-1/2 h-52 md:h-auto shrink-0 relative overflow-hidden bg-slate-100 ${imageOrderStyles}`}>
        <img 
          src={imageUrl} 
          alt={`${title} preview`} 
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />
        {/* Adds a gradient "shadow" over the image on mobile stacks */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent md:hidden" />
      </div>

      {/* 2. Content Section */}
      <div className={`flex-1 p-6 md:p-8 flex flex-col justify-between ${textOrderStyles}`}>
        <div>
          {/* Subtle Blue Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Action Links with a Hint of Blue */}
        <div className="flex items-center gap-5 pt-4 border-t border-slate-100">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Source Code
          </a>
          
          {appUrl && (
            <a 
          href={appUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-semibold px-4 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:shadow-sm transition-all duration-300"
            >
              Launch Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};