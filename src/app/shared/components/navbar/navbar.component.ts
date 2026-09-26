import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ScrollService } from '@core/services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isDark: any;

  constructor(
    protected themeService: ThemeService,
    private scrollService: ScrollService
  ) {
    this.isDark = this.themeService.isDark;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();
    this.scrollService.scrollToElement(`#${sectionId}`);
  }
}
