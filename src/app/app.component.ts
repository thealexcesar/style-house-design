import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'styles house design';
}
