import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {environment} from '@environments/environment';

@Component({
  selector: 'shd-hero',
  standalone: true,
  imports: [
    TranslatePipe,
    MatIcon,
    FaIconComponent,
  ],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {

  phoneNumber = environment.phoneNumber;

  protected readonly  faWhatsapp = faWhatsapp;
  sendMessage() {
    console.log('hello')
  }
}
