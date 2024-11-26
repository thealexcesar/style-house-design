import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '@components/ui/header/header.component';
import {FooterComponent} from '@components/ui/footer/footer.component';
import {HeroComponent} from '@components/home/hero/hero.component';
import {ServicesComponent} from '@components/home/services/services.component';
import {ReasonsComponent} from '@components/home/reasons/reasons.component';
import {ProductsComponent} from '@components/home/products/products.component';

@Component({
  selector: 'shd-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    ReasonsComponent,
    ProductsComponent
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <shd-header class="flex items-center"/>
      <main class="flex-grow bg-light-secondary">
        <div class="container-responsive py-12 px-1">

          <section id="hero">
            <shd-hero/>
          </section>

          <section id="products">
            <shd-products />
          </section>

          <section id="services">
            <shd-services />
          </section>

          <section id="reasons">
            <shd-reasons />
          </section>

        </div>
      </main>
      <shd-footer/>
    </div>
  `
})
export class AppComponent {
  title = 'styles house design';
}
