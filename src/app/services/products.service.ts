import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllWsiProducts(): Observable<any> {
    //return this.http.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json');
    return this.http.get('assets/products.json');
  }
}
