import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationPanelComponent } from '../navigation-panel/navigation-panel.component';
import { RouterOutlet } from '@angular/router';
import { DiscountFormComponent } from '../discount-form/discount-form.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavigationPanelComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
