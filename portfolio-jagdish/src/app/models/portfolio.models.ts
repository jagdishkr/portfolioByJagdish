export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  keyAchievements?: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface CourseTopic {
  id: string;
  title: string;
  duration: string;
  description: string;
  codeExample?: string;
  vectorIcon?: string; // ⚡ Added to store your custom vector graphics strings
}

export interface Course {
  title: string;
  description: string;
  duration: string;
  level: string;
  topics: CourseTopic[];
}

export interface Blog {
  id: string;
  title: string;
  topic: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tableOfContents?: TableOfContentsItem[];
  course?: Course; // Cleaned up to reference the standalone Course model
  image?: string;
}

export interface Portfolio {
  hero: {
    name: string;
    titles: string[];
    tagline: string;
    bio: string;
  };
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  contact: {
    email?: string;
    github?: string;
    linkedin?: string;
  };
  blogs: Blog[];
}