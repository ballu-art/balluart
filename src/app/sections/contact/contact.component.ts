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
  successMessage = '';

  socialLinks = [
    { name: 'Email', value: 'info.balluart@gmail.com', icon: 'email' },
    { name: 'Phone', value: '+91 84603 15245', icon: 'phone' },
    { name: 'LinkedIn', value: 'linkedin.com/in/ballu-art-0a5b22389', icon: 'linkedin' },
    // { name: 'GitHub', value: 'github.com/baldev', icon: 'github' }
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

    const { name, email, subject, message } = this.contactForm.getRawValue();
    const whatsappMessage = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      message
    ].join('\n');
    const whatsappUrl = `https://wa.me/918460315245?text=${encodeURIComponent(whatsappMessage)}`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      this.successMessage = 'WhatsApp opened with your message. Review it there and press Send.';
    }
  }
}
