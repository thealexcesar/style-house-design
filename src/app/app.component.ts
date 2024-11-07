import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '@components/ui/header/header.component';
import {FooterComponent} from '@components/ui/footer/footer.component';

@Component({
  selector: 'shd-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <shd-header class="bg-light"/>
      <main class="flex-grow bg-light-secondary">
        <div class="container-responsive py-12 overflow-hidden">
          <!-- TODO: add components inner main -->
        </div>
      </main>
      <shd-footer />
    </div>
  `
})
export class AppComponent {
  title = 'styles house design';
}
