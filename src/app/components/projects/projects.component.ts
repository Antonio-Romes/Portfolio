import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedFilter = 'all';
  
  projects: Project[] = [
    {
      id: '1',
      title: 'Desafio Cadastro',
      description: 'Sistema de cadastro com validações, paginação, filtragem, ordenação e exportação para PDF/Excel.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'assets/img/Desafio-cadastro.PNG',
      liveUrl: 'https://antonio-romes.github.io/DesafioCadastro/',
      githubUrl: 'https://github.com/Antonio-Romes/DesafioCadastro',
      featured: true,
      category: 'frontend'
    },
    {
      id: '2',
      title: 'Racha a Cuca',
      description: 'Jogo de tabuleiro onde você seleciona uma imagem, nível de dificuldade e reposiciona as peças.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'assets/img/racha-cuca.PNG',
      liveUrl: 'https://antonio-romes.github.io/Racha_Cuca/',
      githubUrl: 'https://github.com/Antonio-Romes/Racha_Cuca',
      featured: true,
      category: 'frontend'
    },
    {
      id: '3',
      title: 'Todo List',
      description: 'Aplicação para gerenciar tarefas com funcionalidades de adicionar, pesquisar, filtrar e marcar como concluído.',
      technologies: ['React', 'CSS', 'JavaScript'],
      imageUrl: 'assets/img/lista-tarefa.PNG',
      liveUrl: 'https://todo-list-jet-rho.vercel.app/',
      githubUrl: 'https://github.com/Antonio-Romes/todo-list',
      featured: true,
      category: 'frontend'
    },
    {
      id: '4',
      title: 'Jogo do Adivinhe',
      description: 'Jogo onde você tenta adivinhar o número secreto, com dicas se o palpite é maior ou menor.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'assets/img/jogo-adivinhe.PNG',
      liveUrl: 'https://jogo-do-adivinhe-o67uv54qo-antonio-romes-projects.vercel.app/',
      githubUrl: 'https://github.com/Antonio-Romes/Jogo_Do_Adivinhe',
      featured: false,
      category: 'frontend'
    }
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedFilter);
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }
}