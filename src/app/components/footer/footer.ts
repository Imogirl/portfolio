import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements OnInit {
  currentYear: number = new Date().getFullYear();
  showScrollTop: boolean = false;

  ngOnInit(): void {
    // Initialize component
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }


  checkScrollPosition() {
  if (typeof window !== 'undefined') {
    this.showScrollTop = window.scrollY > 300;
  }
}


  scrollToTop(): void {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSocialClick(platform: string): void {
  // Log for analytics or debugging
  console.log(`Navigating to ${platform}`);
  
  // Optional: Add analytics tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'social_link_click', {
      platform: platform,
      event_category: 'engagement',
      event_label: platform
    });
  }
  
  // The actual navigation happens via href, so no need to prevent default
}
}
