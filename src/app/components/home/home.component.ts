import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  typingText = '';
  fullText = 'Desenvolvedor Full Stack';
  roles = [
    'Desenvolvedor Full Stack',
    'Especialista em Angular',
    'Desenvolvedor C# .NET',
    'Entusiasta de Java'
  ];
  currentRoleIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 150;
  deletingSpeed = 75;
  pauseBetweenRoles = 2000;
  
  private typingInterval: any;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTypingAnimation() {
    this.typingInterval = setInterval(() => {
      const currentRole = this.roles[this.currentRoleIndex];
      
      if (!this.isDeleting) {
        // Typing
        this.typingText = currentRole.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
        
        if (this.currentCharIndex === currentRole.length) {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            this.isDeleting = true;
          }, this.pauseBetweenRoles);
        }
      } else {
        // Deleting
        this.typingText = currentRole.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        
        if (this.currentCharIndex === 0) {
          // Finished deleting, move to next role
          this.isDeleting = false;
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        }
      }
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  scrollToAbout() {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV() {
    // Link to CV file
    const link = document.createElement('a');
    link.href = 'assets/pdf/Antonio-Romes.pdf';
    link.download = 'Antonio-Romes-CV.pdf';
    link.click();
  }
}