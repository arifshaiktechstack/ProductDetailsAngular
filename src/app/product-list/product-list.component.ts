import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { WsiProduct } from '../interfaces/Product';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class ProductListComponent implements OnInit {
  products: WsiProduct[];
  currentProduct: WsiProduct;
  display = 'none';
  current = 0;
  constructor(private productService: ProductsService) {
    this.products = new Array<WsiProduct>();
  }

  ngOnInit() {
    setInterval(() => {
      if (this.currentProduct && this.currentProduct.images)  {
        this.current = ++this.current % this.currentProduct.images.length;
      }
    }, 2000);
    this.productService.getAllWsiProducts().subscribe(response => {

        response.groups.forEach(element => {
           let product: WsiProduct = new WsiProduct();
           product.id = element.id;
           product.name = element.name;
           product.images = element.images;
           product.heroImage = element.hero;
           product.thumbnailImage = element.thubmnail;
           product.sellingPriceMin = element.priceRange.selling.low;
           product.sellingPriceMax = element.priceRange.selling.high;
           product.link = element.links;
           product.messages = element.messages;
           console.log('product is ', product);
           this.products.push(product);
        });
      },
      err => {
        console.log('Error occured', err);
      }
      );
  }

  openModal(product: WsiProduct) {
    this.currentProduct = product;
    this.display = 'block';


 }
 onCloseHandled() {
  this.display = 'none';
}

}
