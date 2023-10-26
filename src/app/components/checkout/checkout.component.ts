import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Output } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartId: string ='';

  shipingAddress : FormGroup = new FormGroup({
    details :new FormControl ("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    phone :new FormControl ("",[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
    city :new FormControl ("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),

  })

  constructor(private _cartService:CartService , private _activatedRoute:ActivatedRoute){
   
    this._activatedRoute.paramMap.subscribe((res:any)=>{
        this.cartId = res.params.cartId;
      }
    )

  }

  handelOnline(){
    this._cartService.generateOnlinePayment(this.cartId ,this.shipingAddress.value).subscribe({
      next:(res)=>{
        if(res.status == "success"){
          window.location.href = res.session.url;
          
        }
        
      }
    })
  }
}
