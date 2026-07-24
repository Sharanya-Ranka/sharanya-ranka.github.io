export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  appUrl?: string; // Optional if a project doesn't have a live deployment yet
  tags: string[];
}

export interface Socials {
    type: "github" | "linkedin",
    image_url: string,
    redirect_url: string,
    display_name: string,
}

export interface ProfileData {
  name: string;
  title?: string;
  bio: string;
  profileImageUrl: string;
  socials: Socials[];
  projects: Project[];
}