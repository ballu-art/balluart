import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value;
  }
}
