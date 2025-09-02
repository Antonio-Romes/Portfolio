import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private currentSection = signal<string>('home');
  private isBrowser: boolean;
  private isScrolling = false;
  private scrollTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.setupScrollListener();
    }
  }

  getCurrentSection() {
    return this.currentSection.asReadonly();
  }

  smoothScrollTo(elementId: string): void {
    if (!this.isBrowser) return;
    
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80; // Updated header height
      const elementPosition = element.offsetTop - headerHeight;
      const currentPosition = window.scrollY;
      const distance = Math.abs(elementPosition - currentPosition);
      const duration = Math.min(Math.max(distance / 3, 300), 1000); // Dynamic duration

      this.isScrolling = true;
      
      // Use modern scroll API with better easing
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });

      // Manually adjust for header offset
      setTimeout(() => {
        window.scrollBy({
          top: -headerHeight,
          behavior: 'smooth'
        });
      }, 100);

      // Update active section
      this.currentSection.set(elementId);
      
      // Reset scrolling flag
      setTimeout(() => {
        this.isScrolling = false;
      }, duration);
    }
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;
    
    this.isScrolling = true;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    this.currentSection.set('home');
    
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  private setupScrollListener(): void {
    if (!this.isBrowser) return;
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking && !this.isScrolling) {
        requestAnimationFrame(() => {
          this.updateCurrentSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial section detection
    setTimeout(() => {
      this.updateCurrentSection();
    }, 500);
  }

  private updateCurrentSection(): void {
    if (!this.isBrowser || this.isScrolling) return;
    
    const sections = ['home', 'about', 'experience', 'projects'];
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const headerOffset = 100;
    
    // Check if we're at the very top
    if (scrollPosition < 50) {
      this.currentSection.set('home');
      return;
    }
    
    // Check if we're at the bottom
    if (scrollPosition + viewportHeight >= document.body.scrollHeight - 50) {
      this.currentSection.set(sections[sections.length - 1]);
      return;
    }

    // Find the section that's most visible in the viewport
    let maxVisibleArea = 0;
    let activeSection = this.currentSection();

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = elementTop + element.offsetHeight;
        
        // Calculate visible area of the section
        const viewportTop = scrollPosition + headerOffset;
        const viewportBottom = scrollPosition + viewportHeight;
        
        const visibleTop = Math.max(elementTop, viewportTop);
        const visibleBottom = Math.min(elementBottom, viewportBottom);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSection = sectionId;
        }
      }
    }

    if (activeSection !== this.currentSection()) {
      this.currentSection.set(activeSection);
    }
  }

  // Utility method to check if element is in viewport
  isElementInViewport(elementId: string): boolean {
    if (!this.isBrowser) return false;
    
    const element = document.getElementById(elementId);
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }

  // Method to get scroll progress (0-100%)
  getScrollProgress(): number {
    if (!this.isBrowser) return 0;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return Math.round((scrollTop / docHeight) * 100);
  }
}
