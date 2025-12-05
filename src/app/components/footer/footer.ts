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

  private checkScrollPosition(): void {
    // Show scroll to top button after scrolling down 300px
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSocialClick(platform: string): void {
    // Handle social media link clicks
    // You can add analytics tracking here
    console.log(`Clicked on ${platform}`);
    
    // Prevent default for demo purposes
    // Remove this in production and add actual social media URLs in the template
    event?.preventDefault();
    
    // Example: Open in new tab
    // window.open('your-social-url', '_blank');
  }
}
