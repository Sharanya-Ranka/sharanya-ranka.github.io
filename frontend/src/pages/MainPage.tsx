import React from 'react';
import { portfolioData } from '../data/projectsData';
import { Summary } from '../components/Summary';
import { Projects } from '../components/Projects';

export const MainPage: React.FC = () => {
  const { name, title, bio, profileImageUrl, projects, socials } = portfolioData;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* 1) Summary Section */}
        <Summary 
          name={name}
          title={title}
          bio={bio}
          profileImageUrl={profileImageUrl}
          socials={socials}
        />

        {/* 2) Projects Section */}
        <Projects projects={projects} />

        {/* Dynamic Footer */}
        <footer className="text-center text-xs text-slate-500 pt-10 border-t border-slate-100">
          © {new Date().getFullYear()} {name}. Built using React, TypeScript, and Tailwind CSS. Code generated with assistance from Gemini (Google).
        </footer>
      </div>
    </div>
  );
};