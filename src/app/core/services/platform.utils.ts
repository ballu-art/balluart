// Platform-specific utilities
export class PlatformUtils {
  static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  static isSSR(): boolean {
    return !this.isBrowser();
  }

  static isMobile(): boolean {
    if (!this.isBrowser()) {
      return false;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  static supportsWebP(): boolean {
    if (!this.isBrowser()) {
      return false;
    }
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
  }

  static prefersReducedMotion(): boolean {
    if (!this.isBrowser()) {
      return false;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  static getPrefersColorScheme(): 'light' | 'dark' {
    if (!this.isBrowser()) {
      return 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  static copyToClipboard(text: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      return new Promise((resolve, reject) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.prepend(textArea);
        try {
          document.execCommand('copy');
          resolve();
        } catch (error) {
          reject(error);
        } finally {
          textArea.remove();
        }
      });
    }
  }
}
