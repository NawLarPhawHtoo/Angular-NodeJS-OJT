import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] |any;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Activated route data in Component :::', this.activateRoute.data);

    this.activateRoute.data.subscribe((response:any)=>{
      console.log('PRODUCt FETCHING ',response);
      this.products=response.products;
      console.log('PRODUCT FETCHED');
    });
  }

}
