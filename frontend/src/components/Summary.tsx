import React from 'react';
import { SocialsComponent } from './Socials';
import type { Socials } from '../types';

interface SummaryProps {
  name: string;
  title?: string;
  bio: string;
  profileImageUrl: string;
  socials: Socials[];
}

export const Summary: React.FC<SummaryProps> = ({
  name,
  title,
  bio,
  profileImageUrl,
  socials,
}) => {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start gap-10 pt-4">
      {/* Avatar Side Image */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-slate-200 shadow shrink-0 bg-white p-1">
        <img 
          src={profileImageUrl} 
          alt={`${name} avatar`} 
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left space-y-3.5 pt-3">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-950">
            {name}
          </h1>
          <p className="text-sm font-semibold text-blue-600 tracking-wider mt-1.5">
            {title}
          </p>
        </div>
        <p className="text-slate-950 text-sm sm:text-base leading-relaxed max-w-2xl whitespace-pre-line">
          {bio}
        </p>

        {/* Extracted Social Links */}
        <SocialsComponent socials={socials} />
      </div>
    </header>
  );
};