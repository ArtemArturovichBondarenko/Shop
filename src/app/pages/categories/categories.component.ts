import { Observable } from 'rxjs';
import { Category } from '../../shared/sharedInterfaces';
import { MainService } from './../../../services/main.service';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [AsyncPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  readonly mainService = inject(MainService);
  categories$!: Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ = this.mainService.getCategories();
  }
}
