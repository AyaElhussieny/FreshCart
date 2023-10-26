import { Product } from 'src/core/interfaces/product';
import { CartItem } from './cart-item';
// import { CartItem } from './cart-item';
export interface Order {

    cartItems : CartItem [],
    id:number,
    totalOrderPrice :number,
    createdAt :string,
    user : User 
    shippingAddress : Shipping
}

interface User{
    name :string,
    email :string,
    phone : number
}
interface Shipping{
  phone :number ,
  city : string,
  details : string
}