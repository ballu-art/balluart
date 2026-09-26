import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '@core/services';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  constructor(protected scrollService: ScrollService) {}

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  get scrollProgress(): number {
    return this.scrollService.scrollProgress();
  }
}
