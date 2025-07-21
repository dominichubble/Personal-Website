import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'mezzedata-platform',
    title: 'Community Information App',
    description: 'Developing a Flutter-based mobile application for local residents to access community news, events, dining options, and local government information.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Mobile Development'],
    status: 'In Progress',
    type: 'Professional',
    highlights: [
      '📱 Building mobile app for community engagement',
      '📰 Implementing news and events management system',
      '🏛️ Connecting residents with local commissioners and services'
    ]
  },
  {
    id: 'panthera-app',
    title: 'Panthera Student Lifestyle App',
    description: 'Award-winning student lifestyle application that won several awards at the national level.',
    technologies: ['React Native', 'JavaScript'],
    status: 'Completed',
    type: 'Academic',
    highlights: [
      '🏆 Won Several Competition Awards',
      '👑 Received Inspirational Leader Award',
      '🎯 Achieved Companies Choice Award',
      '💻 Led team of 4 developers for 10 months'
    ],
    link: 'https://www.instagram.com/p/CbuKdeLqJZP/'
  },
  {
    id: 'traffic-automation',
    title: 'Marketing Automation Tools',
    description: 'Developed Python automation tools for affiliate marketing and competitor analysis.',
    technologies: ['Python', 'Sentiment Analysis', 'Data Analysis', 'Web Scraping', 'APIs'],
    status: 'Completed',
    type: 'Professional',
    highlights: [
      '📈 Increased traffic engagement by 30%',
      '🤖 Automated 80% of repetitive marketing tasks',
      '🔍 Built comprehensive competitor intelligence system'
    ]
  },
  {
    id: 'productivity-platform',
    title: 'Productivity Platform',
    description: 'Modern, responsive platform built with React, MySQL, and Bootstrap. Built with a team of 6 other developers.',
    technologies: ['Scrum', 'React', 'TypeScript', 'MySQL', 'Bootstrap', 'PHPMyAdmin', 'Google Cloud'],
    status: 'Completed',
    type: 'Academic',
    highlights: [
      '👨‍💼 Leading a team of 6 developers using Agile methodologies',
      '📱 Fully responsive design',
      '✨ Implemented user-friendly interfaces and experiences'
    ],
    link: 'https://www.linkedin.com/posts/dominichubble_another-exciting-and-challenging-phase-of-activity-7299509157802504193-cAgA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADhuLNIBIHLbwP6xLKdQUupQj83tti8Rql0'
  }
];
