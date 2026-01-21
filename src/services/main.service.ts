import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../app/shared/sharedInterfaces';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class MainService {
  private api = environment.apiBase;
  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<Category[]>(`${this.api}/categories/all`);
  }
}
