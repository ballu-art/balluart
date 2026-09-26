import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsSectionComponent {
  certifications = [
    {
      title: 'Microsoft Azure Solutions Architect',
      issuer: 'Microsoft',
      date: '2023',
      credential: 'AZ-305'
    },
    {
      title: 'Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'AZ-204'
    },
    {
      title: 'Kubernetes Application Developer',
      issuer: 'Linux Foundation',
      date: '2022',
      credential: 'CKAD'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2021',
      credential: 'CLF-C01'
    },
    {
      title: '.NET Core MVC Specialist',
      issuer: 'Microsoft',
      date: '2021',
      credential: 'AZ-200'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker',
      date: '2020',
      credential: 'DCA'
    }
  ];
}
