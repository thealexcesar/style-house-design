import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavbarComponent} from '@components/ui/navbar/navbar.component';
import {EventListenerDirective} from '@directives/event-listener.directive';

@Component({
  selector: 'shd-header',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    EventListenerDirective
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
