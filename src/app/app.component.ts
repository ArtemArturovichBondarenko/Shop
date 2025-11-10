import { MetaService } from './../services/meta.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.initMetaTagsHandling();
  }
}
