import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetaService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  initMetaTagsHandling() {
    this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        // if (data['title']) {
        //   this.title.setTitle(data['title']);
        // }
        if (data['meta']) {
          data['meta'].forEach((tag: { name: string; content: string }) => {
            this.meta.updateTag(tag);
          });
        }
      });
  }
}
