import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private isBrowser: boolean;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Initialize AOS
      this.initializeAOS();
    }
  }

  private initializeAOS() {
    if (this.isBrowser) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        anchorPlacement: 'top-bottom'
      });
    }
  }

  scrollToSection(sectionId: string) {
    this.scrollService.smoothScrollTo(sectionId);
  }

  downloadCV() {
    if (this.isBrowser) {
      // Create download link
      const link = document.createElement('a');
      link.href = 'assets/pdf/Antonio-Romes-CV.pdf';
      link.download = 'Antonio-Romes-CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}