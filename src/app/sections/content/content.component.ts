import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentSectionComponent {
  contentLinks = [
    {
      title: '.NET Microservices Architecture',
      description: 'Building scalable systems with event-driven patterns',
      category: 'Architecture',
      date: '2024'
    },
    {
      title: 'Advanced Kafka Patterns',
      description: 'Real-time event streaming best practices',
      category: 'Messaging',
      date: '2024'
    },
    {
      title: 'RabbitMQ Deep Dive',
      description: 'Message queue optimization and scaling',
      category: 'Messaging',
      date: '2023'
    },
    {
      title: 'Azure Cloud Architecture',
      description: 'Enterprise solutions on Azure',
      category: 'Cloud',
      date: '2023'
    },
    {
      title: 'System Design for Scale',
      description: 'Designing systems that grow',
      category: 'System Design',
      date: '2023'
    },
    {
      title: 'Clean Code .NET',
      description: 'Writing maintainable enterprise code',
      category: 'Best Practices',
      date: '2022'
    }
  ];

  categories = ['All', ...new Set(this.contentLinks.map(c => c.category))];
  selectedCategory = 'All';

  filteredContent() {
    if (this.selectedCategory === 'All') {
      return this.contentLinks;
    }
    return this.contentLinks.filter(c => c.category === this.selectedCategory);
  }
}
