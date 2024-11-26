import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'shd-footer',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

}
