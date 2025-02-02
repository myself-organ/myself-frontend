interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  stack: string;
  demo: string;
}

export type { Project };