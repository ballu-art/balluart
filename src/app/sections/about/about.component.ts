import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutSectionComponent {
  highlights = [
    { label: 'Years of Experience', value: '12+' },
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Enterprise Clients', value: '20+' },
    { label: 'Teams Led', value: '10+' }
  ];

  expertise = [
    'Enterprise Architecture',
    'Microservices Design',
    'Cloud Solutions',
    'System Design',
    'Database Architecture',
    'DevOps & Infrastructure',
    'Team Leadership',
    'Technical Strategy'
  ];
}
