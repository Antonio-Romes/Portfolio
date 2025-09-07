import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface ExtendedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: 'frontend' | 'api' | 'mobile' | 'backend';
  year: string;
  status: 'completed' | 'in-progress' | 'planning';
  difficulty: 1 | 2 | 3 | 4 | 5;
  features?: string[];
  duration?: string;
  teamSize?: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  selectedFilter = 'all';
  private isBrowser: boolean;
  hasMoreProjects = false;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  projects: ExtendedProject[] = [
    {
      id: '1',
      title: 'Sistema de Cadastro Avançado',
      description:
        'Sistema completo de cadastro com validações em tempo real, paginação dinâmica, filtragem avançada e exportação para PDF/Excel.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      imageUrl: 'img/desafio-cadastro.svg',
      liveUrl: 'https://antonio-romes.github.io/DesafioCadastro/',
      githubUrl: 'https://github.com/Antonio-Romes/DesafioCadastro',
      featured: true,
      category: 'frontend',
      year: '2024',
      status: 'completed',
      difficulty: 3,
      features: [
        'Validação em tempo real',
        'Paginação dinâmica',
        'Exportação PDF/Excel',
        'Filtragem avançada',
      ],
      duration: '3 semanas',
      teamSize: 1,
    },
    {
      id: '2',
      title: 'Racha a Cuca - Puzzle Game',
      description:
        'Jogo de quebra-cabeça interativo com múltiplos níveis de dificuldade, seleção de imagens personalizadas e sistema de pontuação.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
      imageUrl: 'img/racha-cuca.svg',
      liveUrl: 'https://antonio-romes.github.io/Racha_Cuca/',
      githubUrl: 'https://github.com/Antonio-Romes/Racha_Cuca',
      featured: true,
      category: 'frontend',
      year: '2024',
      status: 'completed',
      difficulty: 4,
      features: [
        'Múltiplos níveis de dificuldade',
        'Upload de imagens personalizadas',
        'Sistema de pontuação',
        'Animações suaves',
      ],
      duration: '4 semanas',
      teamSize: 1,
    },
    {
      id: '3',
      title: 'Todo List Moderno',
      description:
        'Aplicativo de gerenciamento de tarefas com interface moderna, categorização, filtros avançados e persistência de dados.',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Local Storage'],
      imageUrl: 'img/lista-tarefa.svg',
      liveUrl: 'https://todo-list-jet-rho.vercel.app/',
      githubUrl: 'https://github.com/Antonio-Romes/todo-list',
      featured: true,
      category: 'frontend',
      year: '2024',
      status: 'completed',
      difficulty: 3,
      features: [
        'Interface responsiva',
        'Categorização de tarefas',
        'Filtros avançados',
        'Persistência local',
      ],
      duration: '2 semanas',
      teamSize: 1,
    },
    {
      id: '4',
      title: 'Jogo do Número Secreto',
      description:
        'Jogo interativo de adivinhação com sistema de dicas inteligentes, diferentes níveis de dificuldade e ranking de pontuação.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      imageUrl: 'img/jogo-adivinhe.png',
      liveUrl: 'https://jogo-do-adivinhe-o67uv54qo-antonio-romes-projects.vercel.app/',
      githubUrl: 'https://github.com/Antonio-Romes/Jogo_Do_Adivinhe',
      featured: false,
      category: 'frontend',
      year: '2023',
      status: 'completed',
      difficulty: 2,
      features: [
        'Sistema de dicas inteligentes',
        'Múltiplos níveis',
        'Efeitos sonoros',
        'Ranking de pontuação',
      ],
      duration: '1 semana',
      teamSize: 1,
    },
    {
      id: '5',
      title: 'API REST E-commerce',
      description:
        'API completa para e-commerce com autenticação JWT, gerenciamento de produtos, carrinho de compras e integração com pagamento.',
      technologies: ['C#', '.NET Core', 'Entity Framework', 'SQL Server', 'JWT'],
      imageUrl: 'img/api-visual.svg',
      githubUrl: 'https://github.com/Antonio-Romes/EcommerceAPI',
      featured: true,
      category: 'api',
      year: '2024',
      status: 'in-progress',
      difficulty: 5,
      features: [
        'Autenticação JWT',
        'CRUD completo de produtos',
        'Carrinho de compras',
        'Integração de pagamento',
      ],
      duration: '6 semanas',
      teamSize: 1,
    },
    {
      id: '6',
      title: 'App Mobile Delivery',
      description:
        'Aplicativo mobile para delivery de comida com localização em tempo real, pagamento integrado e acompanhamento de pedidos.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API'],
      imageUrl: 'img/mobile-placeholder.svg',
      githubUrl: 'https://github.com/Antonio-Romes/DeliveryApp',
      featured: true,
      category: 'mobile',
      year: '2024',
      status: 'planning',
      difficulty: 5,
      features: [
        'Localização em tempo real',
        'Pagamento integrado',
        'Push notifications',
        'Acompanhamento de pedidos',
      ],
      duration: '8 semanas',
      teamSize: 2,
    },
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === this.selectedFilter);
  }

  getProjectsByCategory(category: string): ExtendedProject[] {
    return this.projects.filter((project) => project.category === category);
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  selectProject(project: ExtendedProject) {
    // Optional: Add project detail modal or navigation
    console.log('Selected project:', project);
  }

  openProject(url: string, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    if (this.isBrowser) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  getCardAnimation(index: number): string {
    const animations = ['fade-up', 'fade-up', 'fade-up'];
    return animations[index % animations.length];
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      completed: 'Concluído',
      'in-progress': 'Em Desenvolvimento',
      planning: 'Planejamento',
    };
    return statusMap[status] || status;
  }

  getCategoryText(category: string): string {
    const categoryMap: { [key: string]: string } = {
      all: 'Todos',
      frontend: 'Frontend',
      api: 'API',
      mobile: 'Mobile',
      backend: 'Backend',
    };
    return categoryMap[category] || category;
  }

  getDifficultyStars(difficulty: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, index) => index < difficulty);
  }

  getTechIcon(tech: string): string {
    const techIcons: { [key: string]: string } = {
      HTML5: 'assets/icons/html.svg',
      CSS3: 'assets/icons/css.svg',
      JavaScript: 'assets/icons/javascript.svg',
      TypeScript: 'assets/icons/typescript.svg',
      React: 'assets/icons/react.svg',
      Angular: 'assets/icons/angular.svg',
      'C#': 'assets/icons/csharp.svg',
      '.NET Core': 'assets/icons/dotnet.svg',
      'SQL Server': 'assets/icons/sql.svg',
      Bootstrap: 'assets/icons/bootstrap.svg',
    };
    return techIcons[tech] || 'assets/icons/default.svg';
  }

  loadMoreProjects() {
    // Implementation for loading more projects
    console.log('Loading more projects...');
  }

  scrollToSection(sectionId: string) {
    this.scrollService.smoothScrollTo(sectionId);
  }
}
