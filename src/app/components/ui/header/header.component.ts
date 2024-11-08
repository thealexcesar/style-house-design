import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavbarComponent} from '@components/ui/navbar/navbar.component';
import {EventListenerDirective} from '@directives/event-listener.directive';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageComponent} from '@components/ui/language/language.component';

@Component({
  selector: 'shd-header',
  standalone: true,
    imports: [
        RouterLink,
        NavbarComponent,
        EventListenerDirective,
        TranslatePipe,
        LanguageComponent,
        LanguageComponent
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
