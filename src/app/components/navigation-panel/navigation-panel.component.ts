import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navigation-panel',
  imports: [RouterLink, BreadcrumbsComponent, ThemeToggleComponent],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
})
export class NavigationPanelComponent {}
