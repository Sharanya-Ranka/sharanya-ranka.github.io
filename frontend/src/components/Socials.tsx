import React from 'react';

export interface Social {
  type: "github" | "linkedin";
  image_url: string;
  redirect_url: string;
  display_name: string;
}

interface SocialsProps {
  socials: Social[];
}

export const SingleSocial: React.FC<Social> = ({
  image_url,
  redirect_url,
  display_name,
}) => {
  // Apply platform-specific styling based on `type`
//   const bgClasses =
//     type === 'linkedin'
//       ? 'bg-[#0A66C2] hover:bg-[#084e96]'
//       : 'bg-slate-900 hover:bg-slate-800';

  return (
    <a
      href={redirect_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${display_name} Profile`}
      className="group flex items-center h-10 bg-white border border-slate-200 text-slate-800 rounded-full p-2.5 shadow-sm transition-all duration-300 ease-in-out hover:border-slate-300 hover:shadow-md hover:pr-4"
    >
      <img
        src={image_url}
        alt={`${display_name} icon`}
        className="w-5 h-5 shrink-0 object-contain"
      />
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-300 ease-in-out text-xs font-semibold tracking-wide">
        {display_name}
      </span>
    </a>
  );
};

export const SocialsComponent: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
      {socials.map((social) => (
        <SingleSocial
          key={`${social.type}-${social.display_name}`}
          {...social}
        />
      ))}
    </div>
  );
};