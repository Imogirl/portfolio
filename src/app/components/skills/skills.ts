import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faAngular, faReact, faNodeJs, faHtml5, faCss3, faJs, faGit, faAws
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faTools, faRocket, faClock,  faBolt, faPaintBrush, faCog, faWrench,faLayerGroup, faLaptopCode  } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


interface Skill {
  name: string;
  level: number;
  description: string;
  experience: string;
  icon: IconDefinition;
  color: string;
  category: string;
}

interface Category {
  name: string;
  icon: IconDefinition;
  color:string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface Technology {
  name: string;
  logo: IconDefinition;
  color: string; 
}

@Component({
  selector: 'app-skills',
   standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit, AfterViewInit {
  activeCategory: number = 0;
  hoveredSkill: string | null = null;
  filteredSkills: Skill[] = [];
  particles: any[] = [];

  categories: Category[] = [
    { name: 'All', icon: faLayerGroup ,color:'#FFD700'  },
    { name: 'Frontend', icon: faLaptopCode, color:'#FF4500'  },
    { name: 'Backend', icon: faServer, color:'#1E90FF'  },
    { name: 'Database', icon: faDatabase, color:'#32CD32'  },
    { name: 'Tools', icon: faWrench, color:'#8A2BE2'  },
  ];

  skills: Skill[] = [
    {
      name: 'Angular',
      level: 50,
      description: 'Building dynamic single-page applications with advanced features',
      experience: '2+ Months',
      icon: faAngular,
      color: '#DD0031',
      category: 'Frontend'
    },
    {
      name: 'React',
      level: 90,
      description: 'Creating interactive UIs with modern React hooks and patterns',
      experience: '6+ Months',
      icon: faReact,
      color: '#61DAFB',
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      level: 92,
      description: 'Type-safe development with advanced TypeScript features',
      experience: '3+ Months',
      icon: faJs,
      color: '#3178C6',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      level: 88,
      description: 'Building scalable server-side applications and REST APIs',
      experience: '6+ Months',
      icon: faNodeJs,
      color: '#3C873A',
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      level: 87,
      description: 'NoSQL database design and optimization',
      experience: '6+ Months',
      icon: faDatabase,
      color: '#47A248',
      category: 'Database'
    },
    {
      name: 'Git',
      level: 90,
      description: 'Version control and collaborative development workflows',
      experience: '1+ years',
      icon: faGit,
      color: '#F05032',
      category: 'Tools'
    },
    {
      name: 'CSS',
      level: 93,
      description: 'Modern styling with animations and responsive design',
      experience: '2+ years',
      icon: faCss3,
      color: '#264DE4',
      category: 'Frontend'
    }
  ];

  stats: Stat[] = [
    {
      value: 5,
      suffix: '+',
      label: 'Projects Completed',
      icon: '🚀'
    },
    {
      value: 1,
      suffix: '+',
      label: 'Years Experience',
      icon: '⏱️'
    },
    {
      value: 5,
      suffix: '+',
      label: 'Technologies',
      icon: '💻'
    },
  ];

 technologies: Technology[] = [
  { name: 'HTML5', logo: faHtml5, color: '#DD4B25' },
  { name: 'CSS3', logo: faCss3, color: '#264DE4' },
  { name: 'JavaScript', logo: faJs, color: '#F7DF1E' },
  { name: 'TypeScript', logo: faJs, color: '#3178C6' },
  { name: 'Angular', logo: faAngular, color: '#DD0031' },
  { name: 'React', logo: faReact, color: '#61DAFB' },
  { name: 'Node.js', logo: faNodeJs, color: '#3C873A' },
  { name: 'Express', logo: faServer, color: '#858484FF' },
  { name: 'MongoDB', logo: faDatabase, color: '#47A248' },
  { name: 'Git', logo: faGit, color: '#F05032' },
  { name: 'AWS', logo: faAws, color: '#FF9900' },
];


  ngOnInit(): void {
    this.filterSkills();
    this.generateParticles();
  }

  ngAfterViewInit(): void {
    this.animateCounters();
  }

  setActiveCategory(index: number): void {
    this.activeCategory = index;
    this.filterSkills();
  }

  filterSkills(): void {
    if (this.activeCategory === 0) {
      this.filteredSkills = [...this.skills];
    } else {
      const categoryName = this.categories[this.activeCategory].name;
      this.filteredSkills = this.skills.filter(skill => skill.category === categoryName);
    }
  }

  generateParticles(): void {
    this.particles = [];
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        style: {
          left: Math.random() * 100 + '%',
          'animation-delay': Math.random() * 15 + 's',
          'animation-duration': (10 + Math.random() * 10) + 's'
        }
      });
    }
  }

  animateCounters(): void {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current).toString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toString();
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }
}
