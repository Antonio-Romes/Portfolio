import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  icon: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: Technology[];
  achievements: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  current: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: '1',
      year: '2024',
      title: 'Desenvolvedor Full Stack',
      company: 'D.F Moura Informática LTDA',
      companyUrl: '',
      location: 'Araraquara, SP',
      duration: '',
      period: '',
      description:
        'Responsável pelo desenvolvimento e modernização de sistemas, incluindo a conversão de páginas para Angular, criação de rotas em APIs com VB.NET e implementação de novas funcionalidades. Contribuição ativa na correção de erros, no versionamento de código e na colaboração com equipes ágeis.',
      responsibilities: [
        'Conversão de páginas para Angular',
        'Criação de rotas em APIs com VB.NET',
        'Correção de erros em sistemas existentes',
        'Controle de versionamento utilizando Git',
        'Participação em reuniões de acompanhamento (Scrum)',
      ],
      technologies: [
        { name: 'Angular', category: 'frontend', icon: 'assets/icons/angular.svg' },
        { name: 'TypeScript', category: 'frontend', icon: 'assets/icons/typescript.svg' },
        { name: 'JavaScript', category: 'frontend', icon: 'assets/icons/javascript.svg' },
        { name: 'Bootstrap', category: 'frontend', icon: 'assets/icons/bootstrap.svg' },
        {
          name: 'Angular Material',
          category: 'frontend',
          icon: 'assets/icons/angularmaterial.svg',
        },
        { name: 'VB.net', category: 'backend', icon: 'assets/icons/vbnet.svg' },
        { name: 'API REST', category: 'backend', icon: 'assets/icons/rest-api.svg' },
        { name: 'SQL Server', category: 'database', icon: 'assets/icons/sql.svg' },
        { name: 'Git', category: 'database', icon: 'assets/icons/git.svg' },
      ],
      achievements: [
        'Implementação de arquitetura de componentes reutilizáveis',
        'Melhoria na performance das aplicações em 30%',
        'Desenvolvimento de sistema de autenticação seguro',
      ],
      type: 'full-time',
      current: true,
    },
    {
      id: '2',
      year: '2023',
      title: 'Desenvolvedor Web Júnior',
      company: 'Win-Win',
      companyUrl: '',
      location: 'Araraquara, SP',
      duration: '1 ano',
      period: '',
      description:
        'Atuação na sustentação de sistemas web e aplicativos, garantindo correções, melhorias e evolução de funcionalidades de acordo com as necessidades dos clientes. Trabalho em equipe utilizando metodologias ágeis e boas práticas de versionamento e entrega contínua.',
      responsibilities: [
        'Sustentação e evolução de sistemas web e aplicativos',
        'Correção de problemas e implementação de melhorias',
        'Participação em reuniões de alinhamento com PO e clientes',
        'Colaboração em equipes ágeis (Scrum e Kanban)',
        'Controle de versionamento e integração contínua (Git)',
        'Disponibilização de versões em RC, homologação e produção',
        'Análise e resolução de incidentes com foco em qualidade',
      ],
      technologies: [
        { name: 'HTML5', category: 'frontend', icon: 'assets/icons/html.svg' },
        { name: 'CSS3', category: 'frontend', icon: 'assets/icons/css3.svg' },
        { name: 'JavaScript', category: 'frontend', icon: 'assets/icons/javascript.svg' },
        { name: 'Jquery', category: 'frontend', icon: 'assets/icons/jquery.svg' },
        { name: 'Bootstrap', category: 'frontend', icon: 'assets/icons/bootstrap.svg' },
        { name: 'C#', category: 'backend', icon: 'assets/icons/csharp.svg' },
        { name: 'SQL Server', category: 'database', icon: 'assets/icons/sql.svg' },
        { name: 'Git', category: 'tools', icon: 'assets/icons/git.svg' },
      ],
      achievements: [
        'Desenvolvimento de 5+ projetos web funcionais',
        'Implementação de boas práticas de versionamento',
        'Colaboração efetiva em equipe de 4 desenvolvedores',
      ],
      type: 'full-time',
      current: false,
    },
    {
      id: '3',
      year: '2015',
      title: 'Estágio de Analise e desenvolvimento',
      company: 'Techs',
      companyUrl: '',
      location: 'Araraquara, SP',
      duration: '8 meses',
      period: '',
      description:
        'Experiência no desenvolvimento e evolução de sistemas web, incluindo a correção de erros, implementação de melhorias e desenvolvimento de novas funcionalidades. Atuação em equipes ágeis com foco em qualidade e entregas consistentes.',
      responsibilities: [
        'Alteração e manutenção de páginas web',
        'Correção de erros em sistemas',
        'Adição e modificação de funcionalidades',
        'Criação e alteração de scripts de banco de dados',
        'Participação em reuniões de acompanhamento (Scrum)',
      ],
      technologies: [
        { name: 'HTML5', category: 'frontend', icon: 'assets/icons/html.svg' },
        { name: 'CSS3', category: 'frontend', icon: 'assets/icons/css3.svg' },
        { name: 'JavaScript', category: 'frontend', icon: 'assets/icons/javascript.svg' },
        { name: 'C#', category: 'backend', icon: 'assets/icons/csharp.svg' },
        { name: 'SQL Server', category: 'database', icon: 'assets/icons/sql.svg' },
        { name: 'Git', category: 'tools', icon: 'assets/icons/git.svg' },
      ],
      achievements: [
        'Conclusão de programa trainee com aproveitamento de 95%',
        'Desenvolvimento de 3 projetos web funcionais',
        'Domínio de ferramentas de desenvolvimento modernas',
      ],
      type: 'full-time',
      current: false,
    },
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getCurrentExperience(): Observable<Experience | null> {
    const current = this.experiences.find((exp) => exp.current);
    return of(current || null);
  }

  getExperienceById(id: string): Observable<Experience | null> {
    const experience = this.experiences.find((exp) => exp.id === id);
    return of(experience || null);
  }

  getExperiencesByType(type: Experience['type']): Observable<Experience[]> {
    const filtered = this.experiences.filter((exp) => exp.type === type);
    return of(filtered);
  }
}
