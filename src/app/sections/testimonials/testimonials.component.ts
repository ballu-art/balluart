import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsSectionComponent {
  testimonials = [
    {
      name: 'John Smith',
      position: 'CTO',
      company: 'TechCorp',
      text: 'An outstanding architect who transformed our infrastructure. Highly recommended for enterprise solutions.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Engineering Manager',
      company: 'DataSystems',
      text: 'Exceptional technical expertise and great communication. Delivered results beyond expectations.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      position: 'CEO',
      company: 'StartupXYZ',
      text: 'Professional, reliable, and incredibly knowledgeable. A true architect who delivers quality.',
      rating: 5
    }
  ];
}
