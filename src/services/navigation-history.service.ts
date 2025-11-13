import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Breadcrumb } from '../app/shared/sharedInterfaces';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private _breadcrumbs = signal<Breadcrumb[]>([]);
  breadcrumbs = computed(() => this._breadcrumbs());

  constructor() {
    effect(() => {
      this.route.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => {
          console.log('hi');
          const crumbs = this.buildBreadcrumbs(this.activatedRoute.root);
          this._breadcrumbs.set(crumbs);
        });
    });
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const children = route.children;
    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const routeConfig = child.routeConfig;
      if (!routeConfig) continue;

      const routePath = routeConfig.path ?? '';
      const nextUrl = routePath ? `${url}/${routePath}` : url;

      const label = routeConfig.title;

      if (label) {
        breadcrumbs.push({
          label:
            typeof label === 'string'
              ? label.replace(/\s\|\sArt$/, '')
              : String(label),
          url: nextUrl,
        });
      }
      return this.buildBreadcrumbs(child, nextUrl, breadcrumbs);
    }

    return breadcrumbs;
  }
}
