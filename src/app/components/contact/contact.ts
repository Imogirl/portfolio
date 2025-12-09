import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, 
  faUser, faComment, faCheckCircle, faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, faLinkedin, faTwitter, faInstagram, faDiscord, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ContactInfo {
  icon: IconDefinition;
  title: string;
  value: string;
  link?: string;
  color: string;
}

interface SocialLink {
  icon: IconDefinition;
  name: string;
  url: string;
  color: string;
  username: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit, AfterViewInit {
  // Icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faPaperPlane = faPaperPlane;
  faUser = faUser;
  faComment = faComment;
  faCheckCircle = faCheckCircle;
  faSpinner = faSpinner;

  particles: any[] = [];
  formSubmitted = false;
  isSubmitting = false;
  isBrowser: boolean;

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo: ContactInfo[] = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'imashadulxsini1@gmail.com',
      link: 'mailto:imashadulxsini1@gmail.com',
      color: '#a78bfa'
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '077-4275154',
      link: 'tel:+94774275154',
      color: '#ec4899'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'Kothalawala, Kaduwela, Sri Lanka',
      color: '#8b5cf6'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      icon: faGithub,
      name: 'GitHub',
      url: 'https://github.com/imogirl',
      color: '#ffffff',
      username: '@imogirl'
    },
    {
      icon: faLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/imashadulshini',
      color: '#0A66C2',
      username: 'Imahsa Dulshini'
    },
    {
      icon: faInstagram,
      name: 'Instagram',
      url: 'https://instagram.com/maddumage.m.i.d.r',
      color: '#E4405F',
      username: '@Imasha Dulshini'
    },
    {
      icon: faWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/0774275154',
      color: '#25D366',
      username: '077-4275154'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.generateParticles();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.observeAnimations();
    }
  }

  generateParticles(): void {
    this.particles = [];
    for (let i = 0; i < 25; i++) {
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

  observeAnimations(): void {
    if (!this.isBrowser) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        
        // Reset form after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
          this.resetForm();
        }, 5000);
      }, 2000);
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  isFormValid(): boolean {
    return !!(this.formData.name && 
              this.formData.email && 
              this.formData.message &&
              this.isValidEmail(this.formData.email));
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
