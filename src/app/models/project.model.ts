export type ProjectCategory = 'AI / ML' | 'Python' | 'Web' | 'Other';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
  image: 'ml' | 'pycasino' | 'shopsite' | 'default';
  featured: boolean;
  status?: string;
}
