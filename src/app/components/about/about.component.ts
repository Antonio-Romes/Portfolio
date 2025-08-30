import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
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

  // Experience timeline data
  experience: Experience[] = [
    {
      year: '2024',
      title: 'Desenvolvedor Full Stack',
      company: 'Empresa Atual',
      description: 'Desenvolvimento de aplicações web com Angular e .NET Core'
    },
    {
      year: '2023',
      title: 'Desenvolvedor Júnior',
      company: 'Tech Solutions',
      description: 'Criação de interfaces responsivas e APIs REST'
    },
    {
      year: '2022',
      title: 'Trainee Developer',
      company: 'StartUp Tech',
      description: 'Aprendizado prático em tecnologias web modernas'
    },
    {
      year: '2021',
      title: 'Estagiário',
      company: 'Dev Company',
      description: 'Primeira experiência profissional em desenvolvimento'
    }
  ];

  // Top skills for sidebar
  topSkills: Skill[] = [
    { name: 'Angular', level: 95, icon: 'assets/icons/angular.svg' },
    { name: 'TypeScript', level: 90, icon: 'assets/icons/typescript.svg' },
    { name: 'C# .NET', level: 85, icon: 'assets/icons/csharp.svg' },
    { name: 'JavaScript', level: 90, icon: 'assets/icons/javascript.svg' },
    { name: 'SQL Server', level: 80, icon: 'assets/icons/sql.svg' },
    { name: 'HTML/CSS', level: 95, icon: 'assets/icons/html.svg' }
  ];

  // All skills (legacy support)
  skills: Skill[] = [
    { name: 'C#', level: 85, icon: 'assets/icons/csharp.svg' },
    { name: 'Java', level: 80, icon: 'assets/icons/java.svg' },
    { name: 'JavaScript', level: 90, icon: 'assets/icons/javascript.svg' },
    { name: 'Angular', level: 95, icon: 'assets/icons/angular.svg' },
    { name: 'SQL', level: 85, icon: 'assets/icons/sql.svg' },
    { name: '.NET', level: 85, icon: 'assets/icons/dotnet.svg' }
  ];

  // Statistics data
  stats: Stat[] = [
    { number: '3+', label: 'Anos' },
    { number: '20+', label: 'Projetos' },
    { number: '100%', label: 'Dedicação' },
    { number: '24/7', label: 'Suporte' }
  ];

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

  scrollToSection(sectionId: string) {
    this.scrollService.smoothScrollTo(sectionId);
  }
}