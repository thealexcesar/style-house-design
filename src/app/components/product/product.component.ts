import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shd-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    console.log('componente product renderizado')
  }
}
