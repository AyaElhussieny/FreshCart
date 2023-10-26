import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { TrimcartPipe } from './pipe/trimCart.pipe';
import { FilterProductsPipe } from './pipe/filter-products.pipe';


@NgModule({
  declarations: [
    CartComponent,
    TrimcartPipe,
    FilterProductsPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
