import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ExperienceService, Experience as ExperienceInterface } from '../../services/experience.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  experiences: ExperienceInterface[] = [];
  private isBrowser: boolean;

  constructor(
    private experienceService: ExperienceService,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.loadExperiences();
  }

  private loadExperiences() {
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    });
  }

  scrollToSection(sectionId: string) {
    this.scrollService.smoothScrollTo(sectionId);
  }

  trackByExperience(index: number, experience: ExperienceInterface): string {
    return experience.id;
  }
}
