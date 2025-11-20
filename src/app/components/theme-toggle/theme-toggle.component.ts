import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}
