import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  submitted = false;
  submitting = false;
  successMessage = '';

  socialLinks = [
    { name: 'Email', value: 'baldev@example.com', icon: 'email' },
    { name: 'Phone', value: '+1 (555) 123-4567', icon: 'phone' },
    { name: 'LinkedIn', value: 'linkedin.com/in/baldev', icon: 'linkedin' },
    { name: 'GitHub', value: 'github.com/baldev', icon: 'github' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.submitting = true;
    // Simulate form submission
    setTimeout(() => {
      this.submitting = false;
      this.successMessage = 'Thank you! Your message has been sent successfully.';
      this.contactForm.reset();
      this.submitted = false;
      
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }, 1500);
  }
}
