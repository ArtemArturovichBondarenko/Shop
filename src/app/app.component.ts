import { MetaService } from './../services/meta.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private metaService = inject(MetaService);
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.metaService.initMetaTagsHandling();
  }
}
