import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faGraduationCap, faCode, faLaptopCode, faBrain, faHeart, faGamepad,
  faMusic, faBook, faCoffee, faRocket, faBolt, faStar, faAward,faEnvelope,
  faUsers, faChartLine, faLightbulb, faPalette, faTerminal, faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, faLinkedin, faTwitter, faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface AboutCard {
  title: string;
  description: string;
  icon: IconDefinition;
  color: string;
}

interface Interest {
  name: string;
  icon: IconDefinition;
  color: string;
}

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: IconDefinition;
}

interface Value {
  title: string;
  description: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  particles: any[] = [];
  currentYear = new Date().getFullYear();

  aboutCards: AboutCard[] = [
    {
      title: 'Education',
      description: 'Currently pursuing a Software Engineering degree, diving deep into algorithms, data structures, and modern development practices.',
      icon: faGraduationCap,
      color: '#a78bfa'
    },
    {
      title: 'Passion',
      description: 'Obsessed with creating elegant solutions to complex problems. I love turning ideas into reality through clean, efficient code.',
      icon: faHeart,
      color: '#ec4899'
    },
    {
      title: 'Innovation',
      description: 'Always exploring cutting-edge technologies and frameworks. I believe in continuous learning and staying ahead of the curve.',
      icon: faRocket,
      color: '#8b5cf6'
    },
    {
      title: 'Problem Solver',
      description: 'I thrive on challenges and enjoy breaking down complex problems into manageable solutions with creative approaches.',
      icon: faBrain,
      color: '#f472b6'
    }
  ];

  interests: Interest[] = [
    { name: 'Coding', icon: faCode, color: '#a78bfa' },
    { name: 'Gaming', icon: faGamepad, color: '#ec4899' },
    { name: 'Music', icon: faMusic, color: '#8b5cf6' },
    { name: 'Reading', icon: faBook, color: '#f472b6' },
    { name: 'Coffee', icon: faCoffee, color: '#a78bfa' },
    { name: 'Design', icon: faPalette, color: '#ec4899' }
  ];

  achievements: Achievement[] = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining high GPA while mastering full-stack development',
      year: '2023-2025',
      icon: faAward
    },
    {
      title: 'GitHub Activity',
      description: 'Worked on personal coding projects and version control using GitHub',
      year: '2024-2025',
      icon: faGithub
    },
    {
      title: 'Personal Projects',
      description: 'Built 5+ full-stack applications from concept to deployment',
      year: '2024-2025',
      icon: faLaptopCode
    }
  ];

  values: Value[] = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that stands the test of time',
      icon: faTerminal
    },
    {
      title: 'Teamwork',
      description: 'Working well with others to achieve goals',
      icon: faUsers
    },
    {
      title: 'Continuous Growth',
      description: 'Never stopping learning, always pushing boundaries',
      icon: faChartLine
    },
    {
      title: 'Innovation',
      description: 'Thinking outside the box to create unique solutions',
      icon: faLightbulb
    }
  ];

  socialLinks = [
    { icon: faGithub, url: 'https://github.com/imogirl', name: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/imashadulshini', name: 'LinkedIn' },
    { icon: faEnvelope, url: 'mailto:imashadulxsini1@gmail.com', name: 'Email' },
    { icon: faInstagram, url: 'https://instagram.com/maddumage.m.i.d.r', name: 'Instagram' }
  ];

  ngOnInit(): void {
    this.generateParticles();
  }

  ngAfterViewInit(): void {
    // 🚀 FIX: Only run in browser (prevents IntersectionObserver crash)
    if (isPlatformBrowser(this.platformId)) {
      this.observeAnimations();
    }
  }

  generateParticles(): void {
    this.particles = [];
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        style: {
          left: Math.random() * 100 + '%',
          'animation-delay': Math.random() * 20 + 's',
          'animation-duration': (15 + Math.random() * 15) + 's',
          width: (2 + Math.random() * 4) + 'px',
          height: (2 + Math.random() * 4) + 'px'
        }
      });
    }
  }

  

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }
}
