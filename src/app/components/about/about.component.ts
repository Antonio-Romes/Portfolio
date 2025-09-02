import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private isBrowser: boolean;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Top skills for skills section
  topSkills: Skill[] = [
    { name: 'Angular', level: 95, icon: 'assets/icons/angular.svg' },
    { name: 'TypeScript', level: 90, icon: 'assets/icons/typescript.svg' },
    { name: 'C# .NET', level: 85, icon: 'assets/icons/csharp.svg' },
    { name: 'JavaScript', level: 90, icon: 'assets/icons/javascript.svg' },
    { name: 'SQL Server', level: 80, icon: 'assets/icons/sql.svg' },
    { name: 'HTML/CSS', level: 95, icon: 'assets/icons/html.svg' }
  ];
}