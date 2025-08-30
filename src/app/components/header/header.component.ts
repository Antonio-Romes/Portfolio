import { Component, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  
  constructor(
    private scrollService: ScrollService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // Listen for scroll changes to update active section
  }

  get activeSection() {
    return this.scrollService.getCurrentSection()();
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme()();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.scrollService.smoothScrollTo(sectionId);
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}