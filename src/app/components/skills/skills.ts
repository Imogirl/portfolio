import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  description: string;
  experience: string;
  icon: string;
  category: string;
}

interface Category {
  name: string;
  icon: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface Technology {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-skills',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit, AfterViewInit {
  activeCategory: number = 0;
  hoveredSkill: string | null = null;
  filteredSkills: Skill[] = [];
  particles: any[] = [];

  categories: Category[] = [
    { name: 'All', icon: '⚡' },
    { name: 'Frontend', icon: '🎨' },
    { name: 'Backend', icon: '⚙️' },
    { name: 'Database', icon: '💾' },
    { name: 'Tools', icon: '🛠️' }
  ];

  skills: Skill[] = [
    {
      name: 'Angular',
      level: 50,
      description: 'Building dynamic single-page applications with advanced features',
      experience: '3+ years',
      icon: '🅰️',
      category: 'Frontend'
    },
    {
      name: 'React',
      level: 90,
      description: 'Creating interactive UIs with modern React hooks and patterns',
      experience: '4+ years',
      icon: '⚛️',
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      level: 92,
      description: 'Type-safe development with advanced TypeScript features',
      experience: '3+ years',
      icon: '📘',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      level: 88,
      description: 'Building scalable server-side applications and REST APIs',
      experience: '3+ years',
      icon: '🟢',
      category: 'Backend'
    },
    {
      name: 'Python',
      level: 85,
      description: 'Backend development and data processing with Python',
      experience: '2+ years',
      icon: '🐍',
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      level: 87,
      description: 'NoSQL database design and optimization',
      experience: '2+ years',
      icon: '🍃',
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      level: 83,
      description: 'Relational database management and complex queries',
      experience: '2+ years',
      icon: '🐘',
      category: 'Database'
    },
    {
      name: 'Git',
      level: 90,
      description: 'Version control and collaborative development workflows',
      experience: '4+ years',
      icon: '📦',
      category: 'Tools'
    },
    {
      name: 'Docker',
      level: 80,
      description: 'Containerization and deployment automation',
      experience: '2+ years',
      icon: '🐳',
      category: 'Tools'
    },
    {
      name: 'CSS/SASS',
      level: 93,
      description: 'Modern styling with animations and responsive design',
      experience: '4+ years',
      icon: '🎨',
      category: 'Frontend'
    },
    {
      name: 'REST APIs',
      level: 89,
      description: 'Designing and implementing RESTful web services',
      experience: '3+ years',
      icon: '🔌',
      category: 'Backend'
    },
    {
      name: 'GraphQL',
      level: 82,
      description: 'Building efficient query-based APIs',
      experience: '1+ years',
      icon: '◈',
      category: 'Backend'
    }
  ];

  stats: Stat[] = [
    {
      value: 50,
      suffix: '+',
      label: 'Projects Completed',
      icon: '🚀'
    },
    {
      value: 3,
      suffix: '+',
      label: 'Years Experience',
      icon: '⏱️'
    },
    {
      value: 20,
      suffix: '+',
      label: 'Technologies',
      icon: '💻'
    },
    {
      value: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: '⭐'
    }
  ];

  technologies: Technology[] = [
    { name: 'HTML5', logo: '🌐' },
    { name: 'CSS3', logo: '🎨' },
    { name: 'JavaScript', logo: '📜' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'Angular', logo: '🅰️' },
    { name: 'React', logo: '⚛️' },
    { name: 'Vue.js', logo: '💚' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Express', logo: '🚂' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'Git', logo: '📦' },
    { name: 'Docker', logo: '🐳' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Figma', logo: '🎯' }
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
