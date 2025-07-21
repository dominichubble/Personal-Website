import type { Project } from '../types';

export const getStatusColor = (status: Project['status']): string => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'In Progress': return 'bg-blue-100 text-blue-800';
    case 'Planning': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getTypeColor = (type: Project['type']): string => {
  switch (type) {
    case 'Professional': return 'bg-purple-100 text-purple-800';
    case 'Academic': return 'bg-orange-100 text-orange-800';
    case 'Personal': return 'bg-indigo-100 text-indigo-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getCompanyColorClass = (color: string): string => {
  switch (color) {
    case 'blue': return 'text-blue-600';
    case 'green': return 'text-green-600';
    case 'purple': return 'text-purple-600';
    case 'orange': return 'text-orange-600';
    case 'red': return 'text-red-600';
    default: return 'text-gray-600';
  }
};
