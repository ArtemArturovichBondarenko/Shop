import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        title: 'Main',
        data: {
          meta: [
            { name: 'discription', content: 'home page site' },
            { name: 'robots', content: 'index, follow' },
          ],
        },
        loadComponent: () =>
          import('./pages/main-page/main-page.component').then(
            (m) => m.MainPageComponent
          ),
      },
      {
        path: 'categories',
        title: 'Сategories',
        data: {
          meta: [
            { name: 'discription', content: 'goods category ' },
            { name: 'robots', content: 'index, follow' },
          ],
        },
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
      },
    ],
  },
];
