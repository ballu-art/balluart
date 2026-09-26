import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {
    this.initializeAnalytics();
  }

  private initializeAnalytics(): void {
    // Google Analytics initialization
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-XXXXXXXXXX', {
        page_path: window.location.pathname
      });
    }
  }

  trackPageView(pageName: string): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: pageName,
        page_path: window.location.pathname
      });
    }
  }

  trackEvent(eventName: string, eventData?: any): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventData);
    }
  }

  trackButtonClick(buttonName: string): void {
    this.trackEvent('button_click', {
      button_name: buttonName
    });
  }

  trackFormSubmit(formName: string): void {
    this.trackEvent('form_submit', {
      form_name: formName
    });
  }
}

declare let gtag: Function;
