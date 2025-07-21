export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  type: 'Professional' | 'Academic' | 'Personal';
  highlights: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  location: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  companyType: string;
  isCurrentRole?: boolean;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft';
}

export interface Achievement {
  icon: string;
  description: string;
}
