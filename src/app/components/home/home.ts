import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  currentRole: string = '';
  private roles: string[] = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Frontend Specialist',
    'Problem Solver',
    'Tech Enthusiast'
  ];
  private currentRoleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 100;
  private deletingSpeed: number = 50;
  private pauseTime: number = 2000;
  private typingInterval: any;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    console.log('Home component initialized');
    console.log('Is Browser?', this.isBrowser);
    
    if (this.isBrowser) {
      // Start immediately
      this.startTypingAnimation();
    }
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTypingAnimation(): void {
    if (!this.isBrowser) return;

    const currentFullRole = this.roles[this.currentRoleIndex];
    
    if (!this.isDeleting && this.charIndex < currentFullRole.length) {
      // Typing
      this.currentRole = currentFullRole.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.cdr.detectChanges(); // Force change detection
      this.typingInterval = setTimeout(() => this.startTypingAnimation(), this.typingSpeed);
    } else if (this.isDeleting && this.charIndex > 0) {
      // Deleting
      this.currentRole = currentFullRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.cdr.detectChanges(); // Force change detection
      this.typingInterval = setTimeout(() => this.startTypingAnimation(), this.deletingSpeed);
    } else if (!this.isDeleting && this.charIndex === currentFullRole.length) {
      // Pause at end of word
      this.isDeleting = true;
      this.typingInterval = setTimeout(() => this.startTypingAnimation(), this.pauseTime);
    } else if (this.isDeleting && this.charIndex === 0) {
      // Move to next role
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.typingInterval = setTimeout(() => this.startTypingAnimation(), 500);
    }
  }
}