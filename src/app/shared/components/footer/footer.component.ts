import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/baldev.makwana.3', icon: 'fab fa-facebook-f' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/baldevmakwana1293', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', url: 'https://www.instagram.com/baldevmakwana1293', icon: 'fab fa-instagram' },
    { name: 'Freelancer', url: 'https://www.freelancer.com/u/Baldev01', icon: 'fas fa-briefcase' },
    { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01c914f0b97f0a4389?mp_source=share', icon: 'fab fa-upwork' }
  ];

  quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];
}
