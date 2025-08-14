export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}

export const HERO_CONFIGS = {
  HOME: {
    title: "Strengthening Local Governance.\nEmpowering Communities.\nPreserving Heritage.",
    description: "The Ministry of Local Government, Community & Chieftaincy Affairs coordinates local governance, community development, and traditional institutions for effective service delivery in Imo State.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Ongoing & Completed Projects",
    description: "Infrastructure and community development initiatives enhancing local governance across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Dedicated leaders driving local governance and community development in Imo State",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Services",
    description: "Comprehensive services supporting local governments, communities, and traditional institutions in Imo State",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "Latest News & Press Releases",
    description: "Stay informed about local governance, community development, and chieftaincy matters in Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Gallery & Media Resources",
    description: "Explore our collection of photos and videos showcasing local government activities and community development",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Upcoming Events & Community Engagements",
    description: "Town hall meetings, training programs, and stakeholder engagements across Imo State's local governments",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Local Government Affairs",
    description: "Promoting effective local governance, community development, and traditional institution support across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Our Departments",
    description: "Explore the various departments that make up the Ministry of Local Government Area, Community and Chieftaincy Affairs",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
