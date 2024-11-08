import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '@components/ui/header/header.component';
import {FooterComponent} from '@components/ui/footer/footer.component';
import {HeroComponent} from '@components/home/hero/hero.component';

@Component({
  selector: 'shd-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <shd-header class="flex items-center" />
      <main class="flex-grow bg-light-secondary">
        <div class="container-responsive py-12">
          <shd-hero />
        </div>
      </main>
      <shd-footer />
    </div>
  `
})
export class AppComponent {
  title = 'styles house design';
}
