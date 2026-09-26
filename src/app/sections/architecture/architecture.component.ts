import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureSectionComponent {
  architectures = [
    {
      title: 'Microservices Architecture',
      description: 'Scalable, independently deployable services with clear boundaries and communication patterns',
      benefits: ['Scalability', 'Independence', 'Resilience', 'Flexibility']
    },
    {
      title: 'Event Driven Architecture',
      description: 'Loosely coupled systems communicating through events for real-time responsiveness',
      benefits: ['Real-time', 'Decoupling', 'Scalability', 'Responsiveness']
    },
    {
      title: 'Domain Driven Design',
      description: 'Business-centric architecture reflecting complex business logic and domain models',
      benefits: ['Domain Focus', 'Clarity', 'Maintainability', 'Flexibility']
    },
    {
      title: 'Clean Architecture',
      description: 'Layered approach with clear separation of concerns and independent frameworks',
      benefits: ['Testability', 'Maintainability', 'Framework Independence', 'Scalability']
    }
  ];
}
