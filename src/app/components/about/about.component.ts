import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
    { name: 'Angular', icon: 'icons/angular.svg' },
    { name: 'TypeScript', icon: 'icons/typescript.svg' },
    { name: 'C#', icon: 'icons/csharp-simple.svg' },
    { name: 'ASP.NET Core', icon: 'icons/aspnet-core.svg' },
    { name: 'JavaScript', icon: 'icons/javascript.svg' },
    { name: 'Git', icon: 'icons/git.svg' },
    { name: 'VB.NET', icon: 'icons/vbnet.svg' },
    { name: 'SQL Server', icon: 'icons/sql.svg' },
  ];
}
