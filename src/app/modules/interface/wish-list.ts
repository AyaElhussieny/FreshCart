import { Brand } from "src/core/interfaces/brand"
import { Category } from "src/core/interfaces/category"

export interface WishList {
    count :number
    data : Data []
}
  interface Data {
    id:string,
    imageCover :string,
    price :number,
    title : string,
    brand : Brand,
    category : Category
  }

 