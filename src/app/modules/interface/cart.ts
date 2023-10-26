
export interface Cart {
    numOfCartItems : number,
    data:Data,
}


interface Data{
    totalCartPrice:number,
    _id:string,
    products: Product[],
}


interface Product{
    count : number,
    price : number,
    product : InnerProduct
}

interface InnerProduct{
    title : string,
    imageCover : string,
    category :Category,
    id:string
}

interface Category{
    name: string
}