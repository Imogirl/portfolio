import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface ProjectStat {
  label: string;
  value: string;
}

interface Challenge {
  title: string;
  solution: string;
}

interface Team {
  size: string;
  role: string;
  duration: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  stats?: ProjectStat[];
  gallery?: string[];
  challenges?: Challenge[];
  team?: Team;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'scale(0.9)', opacity: 0 }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', 
          style({ transform: 'scale(0.9)', opacity: 0 }))
      ])
    ])
  ]
})
export class Projects implements OnInit, OnDestroy {
  
  private isBrowser: boolean;

  // All projects data
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      longDescription: 'Built a comprehensive e-commerce platform from scratch featuring user authentication, product management, shopping cart, payment gateway integration with Stripe, order tracking, and an advanced admin dashboard for analytics and inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Featured', 'Web'],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      category: 'Web',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Real-time inventory tracking with automatic stock updates',
        'Secure payment processing with Stripe integration',
        'Advanced search and filtering with Elasticsearch',
        'User authentication with JWT and OAuth 2.0',
        'Responsive design optimized for all devices',
        'Admin dashboard with sales analytics and reporting'
      ],
      stats: [
        { label: 'Users', value: '5K+' },
        { label: 'Products', value: '1000+' },
        { label: 'Orders', value: '10K+' },
        { label: 'Rating', value: '4.8/5' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop'
      ],
      challenges: [
        {
          title: 'Real-time Inventory Sync',
          solution: 'Implemented WebSocket connections for real-time inventory updates across multiple users, ensuring stock accuracy and preventing overselling.'
        },
        {
          title: 'Payment Security',
          solution: 'Integrated Stripe with PCI compliance, implementing tokenization and 3D Secure authentication for enhanced security.'
        }
      ],
      team: {
        size: '4 developers',
        role: 'Full-stack Developer & Team Lead',
        duration: '6 months'
      }
    },
    {
      id: 2,
      title: 'AI Chatbot Assistant',
      description: 'An intelligent chatbot powered by machine learning algorithms for customer service automation.',
      longDescription: 'Developed an AI-powered chatbot using natural language processing and machine learning to provide intelligent customer support, answer queries, and automate repetitive tasks with 95% accuracy.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['AI', 'Featured'],
      technologies: ['Python', 'TensorFlow', 'React', 'NLP', 'FastAPI'],
      category: 'AI/ML',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Natural language understanding with BERT model',
        'Multi-language support (English, Spanish, French)',
        'Context-aware conversations with memory',
        'Sentiment analysis for customer feedback',
        'Integration with CRM systems',
        'Learning from interactions to improve responses'
      ],
      stats: [
        { label: 'Accuracy', value: '95%' },
        { label: 'Languages', value: '3' },
        { label: 'Queries/Day', value: '2K+' },
        { label: 'Response Time', value: '< 1s' }
      ],
      team: {
        size: '3 developers',
        role: 'ML Engineer & Backend Developer',
        duration: '4 months'
      }
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
      longDescription: 'Created a comprehensive fitness tracking application with workout planning, nutrition logging, progress tracking, and social features to help users achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
      tags: ['Mobile'],
      technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit API'],
      category: 'Mobile',
      githubUrl: 'https://github.com',
      features: [
        'Custom workout plans and exercise library',
        'Calorie and macro tracking with barcode scanner',
        'Progress photos and body measurements',
        'Social feed and challenge competitions',
        'Integration with wearable devices',
        'Personalized recommendations using ML'
      ],
      stats: [
        { label: 'Downloads', value: '50K+' },
        { label: 'Active Users', value: '15K+' },
        { label: 'Workouts', value: '100K+' },
        { label: 'App Rating', value: '4.7/5' }
      ]
    },
    {
      id: 4,
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard for visualizing business metrics and KPIs with real-time data updates.',
      longDescription: 'Designed and developed a powerful analytics dashboard providing real-time insights into business performance with customizable widgets, interactive charts, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Web', 'Data'],
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Python', 'PostgreSQL'],
      category: 'Web',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Real-time data streaming with WebSocket',
        'Customizable dashboard with drag-and-drop widgets',
        'Interactive charts and visualizations',
        'Automated report generation and email delivery',
        'Multi-tenant support with role-based access',
        'Export data in multiple formats (PDF, Excel, CSV)'
      ],
      stats: [
        { label: 'Data Points', value: '1M+' },
        { label: 'Updates/Sec', value: '100+' },
        { label: 'Charts', value: '50+' },
        { label: 'Companies', value: '200+' }
      ]
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform built on blockchain technology ensuring vote integrity.',
      longDescription: 'Developed a decentralized voting system leveraging blockchain technology to ensure transparency, immutability, and security in electoral processes.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      tags: ['Blockchain', 'Featured'],
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'IPFS'],
      category: 'Blockchain',
      githubUrl: 'https://github.com',
      features: [
        'Immutable vote recording on Ethereum blockchain',
        'Anonymous voting with zero-knowledge proofs',
        'Smart contract verification and auditing',
        'Decentralized identity management',
        'Real-time vote counting and results',
        'IPFS storage for candidate information'
      ],
      stats: [
        { label: 'Transactions', value: '10K+' },
        { label: 'Gas Efficiency', value: '85%' },
        { label: 'Security Audits', value: '3' },
        { label: 'Elections', value: '25+' }
      ],
      challenges: [
        {
          title: 'Voter Privacy',
          solution: 'Implemented zero-knowledge proofs to ensure vote anonymity while maintaining verifiability.'
        }
      ]
    },
    {
      id: 6,
      title: 'Social Media Content Scheduler',
      description: 'Multi-platform content scheduling tool with analytics and AI-powered caption suggestions.',
      longDescription: 'Built an all-in-one social media management platform that helps businesses schedule content, analyze performance, and generate engaging captions using AI.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Web', 'AI'],
      technologies: ['Next.js', 'PostgreSQL', 'OpenAI', 'Redis', 'AWS'],
      category: 'Web',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Schedule posts across multiple platforms',
        'AI-powered caption and hashtag suggestions',
        'Content calendar with drag-and-drop interface',
        'Performance analytics and engagement tracking',
        'Team collaboration and approval workflows',
        'Media library with cloud storage integration'
      ],
      stats: [
        { label: 'Users', value: '8K+' },
        { label: 'Posts Scheduled', value: '500K+' },
        { label: 'Platforms', value: '6' },
        { label: 'Time Saved', value: '70%' }
      ]
    }
  ];

  // Filter options
  filters: string[] = ['All', 'Web', 'Mobile', 'AI/ML', 'Blockchain'];
  activeFilter: string = 'All';
  
  // Filtered projects
  filteredProjects: Project[] = [];
  
  // Pagination
  displayedProjects: number = 6;
  hasMoreProjects: boolean = false;

  // Floating particles data
  particles: any[] = [];

  // Modal state
  selectedProject: Project | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    this.updateHasMore();
    this.generateParticles();
  }

  ngOnDestroy(): void {
    // Cleanup: restore body scroll (only in browser)
    if (this.isBrowser) {
      document.body.style.overflow = 'auto';
    }
  }

  /**
   * Filter projects by category
   */
  filterProjects(category: string): void {
    this.activeFilter = category;
    
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        project => project.category === category
      );
    }
    
    this.displayedProjects = 6;
    this.updateHasMore();
  }

  /**
   * Load more projects
   */
  loadMore(): void {
    this.displayedProjects += 3;
    this.updateHasMore();
  }

  /**
   * Check if there are more projects to load
   */
  updateHasMore(): void {
    this.hasMoreProjects = this.filteredProjects.length > this.displayedProjects;
  }

  /**
   * Get visible projects based on pagination
   */
  get visibleProjects(): Project[] {
    return this.filteredProjects.slice(0, this.displayedProjects);
  }

  /**
   * Open project modal
   */
  openProject(project: Project): void {
    this.selectedProject = project;
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Close project modal
   */
  closeModal(): void {
    this.selectedProject = null;
    if (this.isBrowser) {
      document.body.style.overflow = 'auto';
    }
  }

  /**
   * Stop event propagation
   */
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  /**
   * Open gallery image
   */
  openGalleryImage(index: number): void {
    console.log('Opening gallery image:', index);
    // Implement lightbox functionality here
  }

  /**
   * Generate random particles for background animation
   */
  generateParticles(): void {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        left: Math.random() * 100 + '%',
        'animation-delay': Math.random() * 15 + 's',
        'animation-duration': (Math.random() * 10 + 10) + 's'
      });
    }
  }
}