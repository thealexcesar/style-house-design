import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '@interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = '/assets/products.json';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
