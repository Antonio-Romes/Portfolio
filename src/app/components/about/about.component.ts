import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/Antonio-Romes.pdf';
    link.download = 'Antonio-Romes-CV.pdf';
    link.click();
  }

  skills = [
    { name: 'C#', level: 85, icon: 'assets/icons/csharp.svg' },
    { name: 'Java', level: 80, icon: 'assets/icons/java.svg' },
    { name: 'JavaScript', level: 90, icon: 'assets/icons/javascript.svg' },
    { name: 'Angular', level: 95, icon: 'assets/icons/angular.svg' },
    { name: 'SQL', level: 85, icon: 'assets/icons/sql.svg' },
    { name: '.NET', level: 85, icon: 'assets/icons/dotnet.svg' }
  ];
}