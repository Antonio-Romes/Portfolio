import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  
  technologies = [
    {
      name: 'C#',
      category: 'backend',
      icon: 'assets/icons/icon-csharp.svg',
      description: 'Linguagem de programação orientada a objetos'
    },
    {
      name: 'Java',
      category: 'backend', 
      icon: 'assets/icons/icon-java.svg',
      description: 'Desenvolvimento de aplicações enterprise'
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      icon: 'assets/icons/icon-javascript.svg',
      description: 'Linguagem de programação web moderna'
    },
    {
      name: 'Angular',
      category: 'frontend',
      icon: 'assets/icons/icon-angular.svg',
      description: 'Framework para aplicações web'
    },
    {
      name: 'SQL',
      category: 'database',
      icon: 'assets/icons/icon-sql.svg',
      description: 'Linguagem de consulta estruturada'
    },
    {
      name: '.NET',
      category: 'backend',
      icon: 'assets/icons/icon-net.svg',
      description: 'Plataforma de desenvolvimento Microsoft'
    },
    {
      name: 'HTML',
      category: 'frontend',
      icon: 'assets/icons/icon-html.svg',
      description: 'Linguagem de marcação web'
    },
    {
      name: 'CSS',
      category: 'frontend',
      icon: 'assets/icons/icon-css3.svg',
      description: 'Folhas de estilo em cascata'
    },
    {
      name: 'React',
      category: 'frontend',
      icon: 'assets/icons/icon-react.svg',
      description: 'Biblioteca JavaScript para UI'
    },
    {
      name: 'Git',
      category: 'tools',
      icon: 'assets/icons/icon-git.svg',
      description: 'Sistema de controle de versão'
    }
  ];

  get frontendTechs() {
    return this.technologies.filter(tech => tech.category === 'frontend');
  }

  get backendTechs() {
    return this.technologies.filter(tech => tech.category === 'backend');
  }

  get databaseTechs() {
    return this.technologies.filter(tech => tech.category === 'database');
  }

  get toolsTechs() {
    return this.technologies.filter(tech => tech.category === 'tools');
  }
}