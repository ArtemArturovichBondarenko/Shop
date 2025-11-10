import { Injectable, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

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
        if (data['title']) {
          this.title.setTitle(data['title']);
        }
        if (data['meta']) {
          data['meta'].forEach((tag: { name: string; content: string }) => {
            this.meta.updateTag(tag);
          });
        }
      });
  }
}
