import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


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
  
})
export class Projects implements OnInit, OnDestroy {
  
  private isBrowser: boolean;

  // All projects data
  projects: Project[] = [
    {
      id: 1,
      title: 'Dairy Production Management System',
      description: 'Ruhunu Yoghurt Dairy Product Management System is a complete platform for managing yoghurt production, inventory, distribution, sales, and quality tracking within the Ruhunu dairy process.',
      longDescription: 'Delivery Component manages the full delivery workflow by converting orders into deliveries, automatically calculating distance-based costs, assigning drivers intelligently, and tracking delivery progress using start and end time ranges. It also includes a reporting feature for analyzing delivery performance and operational efficiency.',
      image: 'p1.1.png',
      tags: ['Featured', 'Web'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web',
      githubUrl: 'https://github.com/LEULEX-404/Ruhunu_Yoghurt',
      liveUrl: 'https://ruhunu-yoghurt-imo.vercel.app/home',
      features: [
        'Convert Orders to Deliveries — Automatically generate deliveries from incoming orders.',
        'Auto Distance & Cost Calculation — System calculates delivery cost based on distance.',
        'Automatic Driver Assignment — Drivers are assigned intelligently without manual input.',
        'Delivery Time Tracking — Add start time and end time to monitor delivery duration.',
        'Delivery Handling — Manage delivery stages smoothly from creation to completion.',
        'Reporting Module — Generate delivery performance and efficiency reports.'
      ],
      stats: [
        { label: 'Users', value: '1K+' },
        { label: 'Products', value: '100+' },
        { label: 'Orders', value: '100+' },
        { label: 'Rating', value: '4.8/5' }
      ],
      gallery: [
        'p1.2.png',
        'p1.3.png',
        'p1.4.png',
        'p1.5.png',
        'p1.6.png'
      ],
      challenges: [
        {
          title: 'Distance & Cost Calculation',
          solution: 'Automated distance-based cost calculation for accurate and consistent delivery pricing.'
        },
        {
          title: 'Driver Assignment',
          solution: 'Implemented automatic driver allocation based on availability and workload for efficiency.'
        }
      ],
      team: {
        size: '5 developers',
        role: 'Full-stack Developer',
        duration: '4 months'
      }
    },
    {
      id: 2,
      title: 'Smart Customer Care System',
      description: 'A web-based helpdesk system where customers can raise tickets, support agents resolve issues, managers oversee activities, and admins manage announcements and configurations.',
      longDescription: 'The Admin module of the Smart Customer Care System allows administrators to efficiently manage system operations by creating, editing, and deleting announcements, ensuring timely communication with all users. Additionally, admins can manage user accounts, including adding new users, updating details, controlling roles and permissions, and deactivating accounts, providing secure and organized access to the system. This module serves as the central hub for maintaining system efficiency, communication, and user management.',
      image: 'p2.1.png',
      tags: ['Web', 'Featured'],
      technologies: ['Java', 'MySQL'],
      category: 'Web',
      githubUrl: 'https://github.com/Imogirl/Smart-Customer-Care-System',
      liveUrl: 'https://example.com',
      features: [
        'Manage Announcements — Create, edit, and delete system-wide announcements.',
        'User Account Management — Add, update, or deactivate user accounts.',
        'Central Management Hub — Oversee and maintain overall system organization and efficiency.'
      ],
      stats: [
        { label: 'Accuracy', value: '95%' },
        { label: 'Languages', value: '2' },
        { label: 'Queries/Day', value: '2K+' },
        { label: 'Response Time', value: '< 1s' }
      ],
      gallery: [
        'p2.2.png',
        'p2.3.png',
        'p2.4.png'
      ],
      team: {
        size: '4 developers',
        role: 'Full Stack Developer',
        duration: '2 months'
      }
    },
    {
      id: 3,
      title: 'Mobile Health Tracker',
      description: 'A mobile app that monitors daily habits, mood, hydration, steps, and other smart wellness features to help users maintain a healthy lifestyle.',
      longDescription: 'The Mobile Health Tracker is a comprehensive wellness application designed to help users maintain and improve their daily health. It allows users to track habits, monitor their mood, and maintain proper hydration levels throughout the day. The built-in step counter helps users stay active by monitoring daily physical activity, while the smart widgets provide quick access to important health metrics and reminders directly from the home screen. With its intuitive interface and smart tracking features, the app empowers users to make informed decisions about their lifestyle, promoting overall health and well-being.',
      image: 'p3.1.png',
      tags: ['Mobile'],
      technologies: ['Kotlin', 'XML'],
      category: 'Mobile',
      githubUrl: 'https://github.com',
      features: [
        'Habit Tracking — Monitor daily routines and build healthy habits.',
        'Mood Tracking — Record and analyze emotional patterns over time.',
        'Hydration Monitoring — Track water intake and stay properly hydrated.',
        'Step Counter — Measure daily steps to encourage physical activity.',
        'Smart Widgets — Quick access to health stats and reminders from the home screen.',
        'Comprehensive Health Insights — Get a clear overview of wellness trends and progress.'
      ],
      stats: [
        { label: 'Downloads', value: '50K+' },
        { label: 'Active Users', value: '15K+' },
        { label: 'Workouts', value: '100K+' },
        { label: 'App Rating', value: '4.7/5' }
      ],
      gallery: [
        'p3.2.png',
        'p3.3.png',
        'p3.4.png',
        'p3.5.png',
        'p3.6.png'
      ]
    },
    {
      id: 4,
      title: 'Movie & Entertainment App',
      description: 'An app to browse and book movies, games, and other entertainment options, with personalized settings for a tailored experience.',
      longDescription: 'The Movie & Entertainment App provides a seamless platform for users to explore and enjoy a variety of entertainment options. Users can browse movies showing in their preferred cinema halls and explore other entertainment items such as games and bars. The app allows easy booking of movies and entertainment activities directly from the platform. Additionally, personalized settings let users tailor the experience to their preferences, including favorite genres, notifications, and preferred cinema locations. With its intuitive interface and comprehensive entertainment options, the app enhances the user’s leisure experience by making browsing, booking, and personalization quick and enjoyable.',
      image: 'p4.5.png',
      tags: ['Mobile'],
      technologies: ['Kotlin', 'XML'],
      category: 'Mobile',
      githubUrl: 'https://github.com',
      features: [
        'Browse Movies — Explore movies currently showing in your preferred cinema halls.',
        'Entertainment Options — Discover games, bars, and other leisure activities.',
        'Booking System — Easily book movies or entertainment activities directly through the app.',
        'Personalized Settings — Customize preferences like favorite genres, notifications, and cinema locations.',
        'Intuitive Interface — User-friendly navigation for smooth browsing and booking.',
        'Comprehensive Entertainment Hub — All-in-one platform for movies, games, and other leisure options.'
      ],
      stats: [
        { label: 'Data Points', value: '1M+' },
        { label: 'Updates/Sec', value: '100+' },
        { label: 'Charts', value: '50+' },
        { label: 'Companies', value: '200+' }
      ],
      gallery: [
        'p4.1.png',
        'p4.2.png',
        'p4.3.png',
        'p4.4.png',
        'p4.6.png',
        'p4.7.png'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern and interactive portfolio website built with Angular, showcasing my skills, projects, and experience through a clean design, smooth animations, and responsive UI components.',
      longDescription: 'This Angular-based portfolio website is a fully responsive and modern digital identity crafted to highlight my professional journey. It features an elegant UI with dynamic animations, category-based skill filtering, animated counters, particle effects, and technology highlights. The site is built using Angular standalone components and FontAwesome icons, ensuring high performance and clean architecture. Visitors can explore my technical skills, view completed projects, read about my experience, and easily connect with me. The portfolio is designed to be visually appealing, intuitive to navigate, and optimized for both desktop and mobile devices—reflecting my passion for front-end development and clean, scalable code.',
      image: 'p5.1.png',
      tags: ['Web', 'Featured'],
      technologies: ['Angular', 'HTML', 'CSS'],
      category: 'Web',
      githubUrl: 'https://github.com/Imogirl/portfolio',
      liveUrl: 'https://imasha-portfolio.vercel.app/',
      features: [
        'Modern, responsive Angular UI with standalone components',
        'Category-based skill filtering',
        'Technology carousel with icons',
        'Smooth hover and scroll animations',
        'Particle background effects',
        'Clean, fast, and optimized performance',
        'Easy to customize and expand'
      ],
      stats: [
        { label: 'Transactions', value: '10K+' },
        { label: 'Gas Efficiency', value: '85%' },
        { label: 'Security Audits', value: '3' },
        { label: 'Elections', value: '25+' }
      ],
      gallery: [
        'p5.2.png',
        'p5.3.png',
        'p5.4.png',
        'p5.5.png',
        'p5.6.png'
      ],
      challenges: [
        {
          title: 'Animation Execution Errors',
          solution: 'Ensured all animations run only in the browser using isPlatformBrowser() checks.'
        },
        {
          title: 'IntersectionObserver / Document Not Defined',
          solution: 'Wrapped DOM-dependent code inside ngAfterViewInit() and added safety checks to prevent execution during SSR or server builds.'
        }
      ]
    }
  ];

  // Filter options
  filters: string[] = ['All', 'Web', 'Mobile'];
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

  trackByProjectId(index: number, project: Project) {
  return project.id;
}

  constructor(@Inject(PLATFORM_ID) platformId: object,
  private cdr: ChangeDetectorRef) {
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
    this.cdr.detectChanges();
    if (this.isBrowser) {
      document.body.style.overflow = 'auto';
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