import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private isBrowser: boolean;

  constructor(
    private scrollService: ScrollService,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  currentYear = new Date().getFullYear();

  get currentTheme() {
    return this.themeService.getCurrentTheme()();
  }

  contactInfo = {
    email: 'antonioromes1@hotmail.com',
    phone: '(16) 99784-9729',
    location: 'São Paulo, Brasil',
  };

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Antonio-Romes',
      icon: 'github',
      description: 'Veja meus projetos no GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/antonio-romes/',
      icon: 'linkedin',
      description: 'Conecte-se comigo no LinkedIn',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/antonio_romes_lima/',
      icon: 'instagram',
      description: 'Acompanhe meu dia a dia',
    },
  ];

  scrollToTop() {
    this.scrollService.scrollToTop();
  }

  scrollToSection(sectionId: string) {
    this.scrollService.smoothScrollTo(sectionId);
  }

  openSocialLink(url: string) {
    if (this.isBrowser) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  downloadCV() {
    if (this.isBrowser) {
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
