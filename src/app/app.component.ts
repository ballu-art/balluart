import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ScrollService } from '@core/services';
import { HeroSectionComponent } from './sections/hero/hero.component';
import { AboutSectionComponent } from './sections/about/about.component';
import { SkillsSectionComponent } from './sections/skills/skills.component';
import { ArchitectureSectionComponent } from './sections/architecture/architecture.component';
import { ProjectsSectionComponent } from './sections/projects/projects.component';
import { ExperienceSectionComponent } from './sections/experience/experience.component';
import { CertificationsSectionComponent } from './sections/certifications/certifications.component';
import { ContentSectionComponent } from './sections/content/content.component';
import { TestimonialsSectionComponent } from './sections/testimonials/testimonials.component';
import { ContactSectionComponent } from './sections/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ArchitectureSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    CertificationsSectionComponent,
    ContentSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected themeService: ThemeService;
  private scrollService: ScrollService;
  isDark: any;

  constructor(
    themeService: ThemeService,
    scrollService: ScrollService
  ) {
    this.themeService = themeService;
    this.scrollService = scrollService;
    this.isDark = this.themeService.isDark;
  }

  ngOnInit(): void {
    // Initialize theme from localStorage
  }
}
