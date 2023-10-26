import { Brand } from "./brand"
import { Category } from "./category"

export interface Product {
    id:string,
    imageCover:string,
    price: number,
    category: Category  ,
    title:string,
    ratingsAverage:number,
    description?:string,
    images:string[],
    brand : Brand
}





// interface Category{
//     name : string
// }
