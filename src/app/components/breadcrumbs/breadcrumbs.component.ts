import { Component, inject, SimpleChanges } from '@angular/core';
import { BreadcrumbsService } from '../../../services/navigation-history.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  private breadcrumbsService = inject(BreadcrumbsService);
  breadcrumbs = this.breadcrumbsService.breadcrumbs;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('changes', changes);
  }
}
