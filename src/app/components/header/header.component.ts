import { Component, OnInit, OnDestroy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  
  // Computed signal for active section
  activeSection = computed(() => this.scrollService.getCurrentSection()());
  
  // Computed signal for current theme
  currentTheme = computed(() => this.themeService.getCurrentTheme()());
  
  constructor(
    private scrollService: ScrollService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // Component initialization
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    console.log('Header: Scrolling to section:', sectionId);
    this.scrollService.smoothScrollTo(sectionId);
    this.isMenuOpen = false; // Close mobile menu after navigation
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}