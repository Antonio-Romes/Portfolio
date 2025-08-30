import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile';
  icon: string;
  description: string;
  level: number;
  experience: string;
  lastUsed?: string;
  projects?: string[];
}

interface LearningTechnology {
  name: string;
  icon: string;
  description: string;
  progress: number;
}

interface Certification {
  name: string;
  institution: string;
  year: string;
  icon: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  activeCategory: string = 'all';
  
  technologies: Technology[] = [
    {
      name: 'Angular',
      category: 'frontend',
      icon: 'assets/icons/angular.svg',
      description: 'Framework moderno para desenvolvimento de SPAs com TypeScript',
      level: 95,
      experience: '3+ anos',
      lastUsed: '2024',
      projects: ['Portfolio', 'Sistema de Cadastro', 'E-commerce Admin']
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      icon: 'assets/icons/typescript.svg',
      description: 'Superset tipado do JavaScript para desenvolvimento escalável',
      level: 90,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['Portfolio Angular', 'API REST', 'Todo App']
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      icon: 'assets/icons/javascript.svg',
      description: 'Linguagem de programação para desenvolvimento web interativo',
      level: 90,
      experience: '3+ anos',
      lastUsed: '2024',
      projects: ['Jogo Racha Cuca', 'Sistema Cadastro', 'Todo List']
    },
    {
      name: 'React',
      category: 'frontend',
      icon: 'assets/icons/react.svg',
      description: 'Biblioteca JavaScript para construção de interfaces de usuário',
      level: 85,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['Todo List', 'Weather App', 'Blog pessoal']
    },
    {
      name: 'HTML5',
      category: 'frontend',
      icon: 'assets/icons/html.svg',
      description: 'Linguagem de marcação semântica para estruturação web',
      level: 95,
      experience: '3+ anos',
      lastUsed: '2024',
      projects: ['Todos os projetos web']
    },
    {
      name: 'CSS3',
      category: 'frontend',
      icon: 'assets/icons/css.svg',
      description: 'Folhas de estilo para design responsivo e animações',
      level: 90,
      experience: '3+ anos',
      lastUsed: '2024',
      projects: ['Portfolio', 'Landing Pages', 'Dashboards']
    },
    {
      name: 'C#',
      category: 'backend',
      icon: 'assets/icons/csharp.svg',
      description: 'Linguagem orientada a objetos para desenvolvimento .NET',
      level: 85,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['API E-commerce', 'Sistema de Gestão', 'Web Services']
    },
    {
      name: '.NET Core',
      category: 'backend',
      icon: 'assets/icons/dotnet.svg',
      description: 'Framework multiplataforma para APIs e aplicações web',
      level: 80,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['API REST', 'Microserviços', 'Backend E-commerce']
    },
    {
      name: 'Java',
      category: 'backend',
      icon: 'assets/icons/java.svg',
      description: 'Linguagem robusta para aplicações enterprise',
      level: 75,
      experience: '1+ ano',
      lastUsed: '2023',
      projects: ['Sistema Bancário', 'API REST', 'Aplicação Desktop']
    },
    {
      name: 'SQL Server',
      category: 'database',
      icon: 'assets/icons/sql.svg',
      description: 'Sistema de gerenciamento de banco de dados relacional',
      level: 85,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['E-commerce DB', 'Sistema de Usuários', 'Relatórios']
    },
    {
      name: 'MySQL',
      category: 'database',
      icon: 'assets/icons/mysql.svg',
      description: 'Banco de dados relacional open source',
      level: 80,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['Blog', 'Sistema de Cadastro', 'API REST']
    },
    {
      name: 'Git',
      category: 'tools',
      icon: 'assets/icons/git.svg',
      description: 'Sistema de controle de versão distribuído',
      level: 90,
      experience: '3+ anos',
      lastUsed: '2024',
      projects: ['Todos os projetos']
    },
    {
      name: 'VS Code',
      category: 'tools',
      icon: 'assets/icons/vscode.svg',
      description: 'Editor de código leve e extensível',
      level: 95,
      experience: '3+ anos',
      lastUsed: '2024',
      projects: ['Desenvolvimento diário']
    },
    {
      name: 'Visual Studio',
      category: 'tools',
      icon: 'assets/icons/visual-studio.svg',
      description: 'IDE completa para desenvolvimento .NET',
      level: 85,
      experience: '2+ anos',
      lastUsed: '2024',
      projects: ['Aplicações .NET', 'APIs C#']
    },
    {
      name: 'Figma',
      category: 'tools',
      icon: 'assets/icons/figma.svg',
      description: 'Ferramenta de design colaborativo para UI/UX',
      level: 70,
      experience: '1+ ano',
      lastUsed: '2024',
      projects: ['Design do Portfolio', 'Protótipos']
    }
  ];

  learningTechnologies: LearningTechnology[] = [
    {
      name: 'Node.js',
      icon: 'assets/icons/nodejs.svg',
      description: 'Runtime JavaScript para backend',
      progress: 60
    },
    {
      name: 'Vue.js',
      icon: 'assets/icons/vue.svg',
      description: 'Framework progressivo para interfaces',
      progress: 40
    },
    {
      name: 'Docker',
      icon: 'assets/icons/docker.svg',
      description: 'Containerização de aplicações',
      progress: 35
    },
    {
      name: 'MongoDB',
      icon: 'assets/icons/mongodb.svg',
      description: 'Banco de dados NoSQL',
      progress: 45
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      institution: 'Microsoft',
      year: '2024',
      icon: 'assets/icons/microsoft.svg'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      institution: 'freeCodeCamp',
      year: '2023',
      icon: 'assets/icons/freecodecamp.svg'
    },
    {
      name: 'Responsive Web Design',
      institution: 'freeCodeCamp',
      year: '2023',
      icon: 'assets/icons/freecodecamp.svg'
    }
  ];

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getFilteredTechnologies(): Technology[] {
    if (this.activeCategory === 'all') {
      return this.technologies;
    }
    return this.technologies.filter(tech => tech.category === this.activeCategory);
  }

  getTotalTechnologies(): number {
    return this.technologies.length;
  }

  getAverageLevel(): number {
    const total = this.technologies.reduce((sum, tech) => sum + tech.level, 0);
    return Math.round(total / this.technologies.length);
  }

  getTechAnimation(index: number): string {
    const animations = ['fade-up', 'fade-right', 'fade-left'];
    return animations[index % animations.length];
  }

  getLevelClass(level: number): string {
    if (level >= 90) return 'expert';
    if (level >= 75) return 'advanced';
    if (level >= 50) return 'intermediate';
    return 'beginner';
  }

  getCategoryName(category: string): string {
    const categoryNames: { [key: string]: string } = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Database',
      'tools': 'Ferramentas',
      'mobile': 'Mobile'
    };
    return categoryNames[category] || category;
  }

  onTechHover(tech: Technology) {
    // Optional: Add hover effects or tooltip functionality
    console.log('Hovering over:', tech.name);
  }

  onTechLeave(tech: Technology) {
    // Optional: Remove hover effects
    console.log('Left hover:', tech.name);
  }

  // Legacy getters for backward compatibility
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