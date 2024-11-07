import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {EventListenerDirective} from '@directives/event-listener.directive';

@Component({
  selector: 'shd-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    EventListenerDirective
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  @Input() isOpen = false;

  closeMenu() {
    this.isOpen = false;
  }
}
