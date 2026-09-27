import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsSectionComponent {
  projects = [
    {
      title: 'Enterprise ERP Platform',
      description: 'Full-stack enterprise resource planning system serving 50+ companies',
      technologies: ['.NET 8', 'Angular', 'Azure', 'SQL Server'],
      featured: true,
      image: '/assets/images/Projects/ERP.png'
    },
    {
      title: 'Multi-Tenant SaaS Application',
      description: 'Cloud-native SaaS platform with advanced tenant isolation and security',
      technologies: ['ASP.NET Core', 'React', 'Kubernetes', 'PostgreSQL'],
      featured: true,
      image: '/assets/images/Projects/E-Commerce.png'
    },
    {
      title: 'IoT Monitoring System',
      description: 'Real-time IoT device monitoring and analytics platform',
      technologies: ['.NET', 'SignalR', 'MongoDB', 'Azure IoT Hub'],
      featured: false,
      image: '/assets/images/Projects/IOT.png'
    },
    {
      title: 'E-Commerce Microservices',
      description: 'Event-driven microservices architecture for high-volume e-commerce',
      technologies: ['.NET', 'Kafka', 'Docker', 'Kubernetes'],
      featured: true,
      image: '/assets/images/Projects/E-Commerce.png'
    },
    {
      title: 'HRMS Platform',
      description: 'Comprehensive HR management system with workflow automation',
      technologies: ['ASP.NET Core', 'Angular', 'Azure', 'SQL Server'],
      featured: false,
      image: '/assets/images/Projects/HRMS.png'
    },
    {
      title: 'Manufacturing ERP',
      description: 'Industry-specific ERP solution for manufacturing operations',
      technologies: ['.NET 8', 'WPF', 'SQL Server', 'Azure'],
      featured: false,
      image: '/assets/images/Projects/ERP.png'
    }
  ];

  selectedTech = 'All';

  getTechs(): string[] {
    const allTechs = new Set<string>();
    this.projects.forEach(p => p.technologies.forEach(t => allTechs.add(t)));
    return ['All', ...Array.from(allTechs).sort()];
  }

  filteredProjects() {
    if (this.selectedTech === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.technologies.includes(this.selectedTech));
  }
}
