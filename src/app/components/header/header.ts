import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isMenuOpen = false;
  lastScrollTop = 0;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Close menu on scroll
    if (this.isMenuOpen) {
      this.closeMenu();
    }

    // Add active class to links based on scroll position
    this.highlightActiveSection();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Close menu on resize if window becomes larger
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  private highlightActiveSection(): void {
    const sections = ['home', 'skills', 'projects', 'about', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      const link = document.querySelector(`a[href="#${section}"]`);
      
      if (element && link) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
}
