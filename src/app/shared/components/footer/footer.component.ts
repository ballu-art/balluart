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

  socialLinks: { name: string; url: string; image: string }[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/baldev.makwana.3', image: 'assets/images/social-facebook.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ballu-art-0a5b22389', image: 'assets/images/social-linkedin.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/baldevmakwana1293', image: 'assets/images/social-instagram.svg' },
    { name: 'Freelancer', url: 'https://www.freelancer.com/u/Baldev01', image: 'assets/images/social-freelancer.svg' },
    { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01c914f0b97f0a4389?mp_source=share', image: 'assets/images/social-upwork.svg' }
  ];

  quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];
}
