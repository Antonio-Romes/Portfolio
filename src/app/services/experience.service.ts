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
  description: string;
  responsibilities: string[];
  technologies: Technology[];
  achievements: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  current: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: '1',
      year: '2024',
      title: 'Desenvolvedor Full Stack',
      company: 'Empresa Atual',
      companyUrl: '',
      location: 'São Paulo, SP',
      duration: '8 meses',
      description: 'Desenvolvimento de aplicações web modernas utilizando Angular e .NET Core, focando em soluções escaláveis e performance otimizada.',
      responsibilities: [
        'Desenvolvimento de aplicações web completas usando Angular e .NET Core',
        'Criação de APIs REST robustas e bem documentadas',
        'Implementação de interfaces responsivas e acessíveis',
        'Otimização de performance e melhores práticas de código'
      ],
      technologies: [
        { name: 'Angular', category: 'frontend', icon: 'assets/icons/angular.svg' },
        { name: '.NET Core', category: 'backend', icon: 'assets/icons/dotnet.svg' },
        { name: 'TypeScript', category: 'frontend', icon: 'assets/icons/typescript.svg' },
        { name: 'SQL Server', category: 'database', icon: 'assets/icons/sql.svg' }
      ],
      achievements: [
        'Implementação de arquitetura de componentes reutilizáveis',
        'Melhoria na performance das aplicações em 30%',
        'Desenvolvimento de sistema de autenticação seguro'
      ],
      type: 'full-time',
      current: true
    },
    {
      id: '2',
      year: '2023',
      title: 'Desenvolvedor Júnior',
      company: 'Tech Solutions',
      companyUrl: '',
      location: 'São Paulo, SP',
      duration: '1 ano',
      description: 'Criação de interfaces responsivas e desenvolvimento de APIs REST, trabalhando em equipe ágil com metodologias modernas.',
      responsibilities: [
        'Desenvolvimento de interfaces web responsivas',
        'Criação e manutenção de APIs REST',
        'Participação em reuniões de planejamento e retrospectivas',
        'Colaboração em projetos de equipe usando Git'
      ],
      technologies: [
        { name: 'JavaScript', category: 'frontend', icon: 'assets/icons/javascript.svg' },
        { name: 'HTML/CSS', category: 'frontend', icon: 'assets/icons/html.svg' },
        { name: 'C#', category: 'backend', icon: 'assets/icons/csharp.svg' },
        { name: 'Git', category: 'tools', icon: 'assets/icons/git.svg' }
      ],
      achievements: [
        'Desenvolvimento de 5+ projetos web funcionais',
        'Implementação de boas práticas de versionamento',
        'Colaboração efetiva em equipe de 4 desenvolvedores'
      ],
      type: 'full-time',
      current: false
    },
    {
      id: '3',
      year: '2022',
      title: 'Trainee Developer',
      company: 'StartUp Tech',
      companyUrl: '',
      location: 'São Paulo, SP',
      duration: '8 meses',
      description: 'Aprendizado prático em tecnologias web modernas, participando de projetos reais e recebendo mentoria técnica.',
      responsibilities: [
        'Aprendizado de tecnologias web modernas',
        'Participação em projetos de desenvolvimento',
        'Criação de protótipos e MVPs',
        'Documentação de código e processos'
      ],
      technologies: [
        { name: 'JavaScript', category: 'frontend', icon: 'assets/icons/javascript.svg' },
        { name: 'HTML/CSS', category: 'frontend', icon: 'assets/icons/html.svg' },
        { name: 'Bootstrap', category: 'frontend', icon: 'assets/icons/bootstrap.svg' },
        { name: 'MySQL', category: 'database', icon: 'assets/icons/mysql.svg' }
      ],
      achievements: [
        'Conclusão de programa trainee com aproveitamento de 95%',
        'Desenvolvimento de 3 projetos web funcionais',
        'Domínio de ferramentas de desenvolvimento modernas'
      ],
      type: 'full-time',
      current: false
    },
    {
      id: '4',
      year: '2021',
      title: 'Estagiário',
      company: 'Dev Company',
      companyUrl: '',
      location: 'São Paulo, SP',
      duration: '6 meses',
      description: 'Primeira experiência profissional em desenvolvimento, focando no aprendizado de fundamentos e boas práticas de programação.',
      responsibilities: [
        'Aprendizado de fundamentos de programação',
        'Auxílio em projetos de desenvolvimento web',
        'Criação de documentação técnica',
        'Participação em code reviews e reuniões de equipe'
      ],
      technologies: [
        { name: 'HTML/CSS', category: 'frontend', icon: 'assets/icons/html.svg' },
        { name: 'JavaScript', category: 'frontend', icon: 'assets/icons/javascript.svg' },
        { name: 'PHP', category: 'backend', icon: 'assets/icons/php.svg' },
        { name: 'MySQL', category: 'database', icon: 'assets/icons/mysql.svg' }
      ],
      achievements: [
        'Primeira experiência profissional bem-sucedida',
        'Aprendizado acelerado de tecnologias web',
        'Contribuição em 2 projetos da empresa'
      ],
      type: 'internship',
      current: false
    }
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getCurrentExperience(): Observable<Experience | null> {
    const current = this.experiences.find(exp => exp.current);
    return of(current || null);
  }

  getExperienceById(id: string): Observable<Experience | null> {
    const experience = this.experiences.find(exp => exp.id === id);
    return of(experience || null);
  }

  getExperiencesByType(type: Experience['type']): Observable<Experience[]> {
    const filtered = this.experiences.filter(exp => exp.type === type);
    return of(filtered);
  }
}