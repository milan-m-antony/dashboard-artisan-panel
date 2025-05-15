
export interface Activity {
  id: number;
  type: 'project' | 'message' | 'system';
  description: string;
  time: string;
}

export interface Project {
  id: number;
  name: string;
  category: string;
  status: 'published' | 'draft';
  date: string;
  image?: string;
  description?: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  location: string;
  skills: string[];
  socials: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}
