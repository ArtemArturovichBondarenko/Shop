import { Component } from '@angular/core';
import { DiscountFormComponent } from '../../components/discount-form/discount-form.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-main-page',
  imports: [DiscountFormComponent, CategoriesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
