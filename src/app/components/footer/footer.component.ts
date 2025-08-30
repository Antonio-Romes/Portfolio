import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor(private scrollService: ScrollService) {}

  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Antonio-Romes',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/antonio-romes/',
      icon: 'linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/antonio_romes_lima/',
      icon: 'instagram'
    }
  ];

  contactInfo = {
    email: 'antonioromes1@hotmail.com',
    phone: '(16) 99784-9729'
  };

  scrollToTop() {
    this.scrollService.scrollToTop();
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}