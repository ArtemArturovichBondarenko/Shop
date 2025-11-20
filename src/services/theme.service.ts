import {
  Injectable,
  signal,
  effect,
  Renderer2,
  RendererFactory2,
  inject,
} from '@angular/core';
import { Theme } from '../app/shared/sharedInterfaces';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>(this.loadInitialTheme());

  private renderer: Renderer2;
  private htmlEl = document.documentElement;
  rendererFactory = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // 🔥 застосування теми при кожній зміні signal
    effect(() => {
      const t = this.theme();
      const realTheme = this.resolveTheme(t);

      this.renderer.setAttribute(this.htmlEl, 'data-theme', realTheme);

      // якщо system → не зберігаємо
      if (t !== 'system') {
        localStorage.setItem('theme', t);
      } else {
        localStorage.removeItem('theme');
      }
    });

    // 🔥 слухаємо зміну системної теми
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', () => {
      this.theme.set(this.resolveTheme(this.theme())); // триггерить effect → оновлює тему
    });
  }

  toggleTheme() {
    const mode = this.theme();
    // Якщо активний system → toggle працює за effective темою
    const effective = this.resolveTheme(mode);

    const next = effective === 'light' ? 'dark' : 'light';
    this.theme.set(next);
  }

  resolveTheme(t: Theme): 'light' | 'dark' {
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private loadInitialTheme(): Theme {
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved ?? 'system';
  }
}
