import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'ml-project',
    title: 'ML Project',
    description:
      'A practical machine-learning project focused on data analysis, preprocessing, feature engineering and model development.',
    category: 'AI / ML',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: null,
    liveDemoUrl: null,
    image: 'ml',
    featured: true,
    status: 'Personal project',
  },
  {
    id: 'pycasino',
    title: 'PyCasino',
    description:
      'A Python desktop application demonstrating GUI development, database integration and application logic through login, registration, Blackjack and Baccarat.',
    category: 'Python',
    technologies: ['Python', 'PyQt5', 'SQLite'],
    githubUrl: null,
    liveDemoUrl: null,
    image: 'pycasino',
    featured: true,
    status: 'Personal project',
  },
  {
    id: 'shopsite',
    title: 'ShopSite',
    description:
      'A web-development project included as part of my hands-on software development work.',
    category: 'Web',
    technologies: [],
    githubUrl: null,
    liveDemoUrl: null,
    image: 'shopsite',
    featured: false,
    status: 'Personal project',
  },
];
