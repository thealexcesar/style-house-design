import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ProductsService} from '@services/products.service';
import {NgClass, NgForOf, NgStyle} from '@angular/common';
import {Product} from '@interfaces/Product';

@Component({
  selector: 'shd-products',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedIndex = 0;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((products: Product[]) => (this.products = products));
  }
}
