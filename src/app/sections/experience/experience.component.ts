import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceSectionComponent {
  experiences = [
    {
      company: 'Tech Solutions Corp',
      position: 'Senior .NET Software Architect',
      duration: '2021 - Present',
      achievements: [
        'Designed and implemented microservices architecture serving 100K+ users',
        'Led team of 12+ engineers in full-stack development',
        'Reduced system latency by 40% through optimization',
        'Mentored 8+ junior developers'
      ]
    },
    {
      company: 'Enterprise Systems Inc',
      position: 'Solutions Architect',
      duration: '2018 - 2021',
      achievements: [
        'Architected enterprise ERP system for 50+ clients',
        'Managed $2M+ project implementations',
        'Built secure, scalable cloud solutions on Azure',
        'Established coding standards and best practices'
      ]
    },
    {
      company: 'Digital Innovations Ltd',
      position: 'Senior Software Engineer',
      duration: '2015 - 2018',
      achievements: [
        'Built microservices platform with 99.9% uptime',
        'Implemented event-driven architecture',
        'Led migration from monolith to microservices',
        'Mentored team and conducted technical interviews'
      ]
    },
    {
      company: 'StartUp Ventures',
      position: 'Full Stack Developer',
      duration: '2012 - 2015',
      achievements: [
        'Developed full-stack web applications',
        'Implemented responsive UI with Angular',
        'Designed database schemas and APIs',
        'Participated in all phases of SDLC'
      ]
    }
  ];
}
