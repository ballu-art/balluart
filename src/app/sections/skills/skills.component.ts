import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsSectionComponent {
  skillCategories = [
    {
      name: 'Backend',
      skills: [
        { name: '.NET 8', level: 95 },
        { name: 'ASP.NET Core', level: 95 },
        { name: 'Web API', level: 90 },
        { name: 'Microservices', level: 90 },
        { name: 'Clean Architecture', level: 90 },
        { name: 'DDD', level: 85 }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular 21', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'RxJS', level: 85 },
        { name: 'Signals', level: 85 },
        { name: 'NgRx', level: 80 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'SQL Server', level: 95 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 85 },
        { name: 'Entity Framework', level: 95 },
        { name: 'Dapper', level: 90 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 95 },
        { name: 'Azure DevOps', level: 90 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Terraform', level: 85 },
        { name: 'CI/CD', level: 90 }
      ]
    }
  ];

  selectedCategory = 0;

  selectCategory(index: number): void {
    this.selectedCategory = index;
  }
}
