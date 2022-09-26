import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  products:Product[] | undefined;
  productService;
  title = 'product-service-example';

  constructor(){
    this.productService=new ProductService();
  }

  getProducts(){
    this.products=this.productService.getProducts();
  }
}
