import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroSectionComponent {
  currentYear = new Date().getFullYear();
  experience = this.currentYear - 2012; // 12+ years from 2012

  downloadResume(): void {
    // Create a link and download resume
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Baldev_Makwana_Resume.pdf';
    link.click();
  }

  scrollToProjects(): void {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact(): void {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
