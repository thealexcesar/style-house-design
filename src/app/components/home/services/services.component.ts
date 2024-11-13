import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'shd-services',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {

}
