"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[969],{969:(W,d,c)=>{c.r(d),c.d(d,{WishListModule:()=>C});var r=c(6814),h=c(6325),t=c(9468),u=c(5368),p=c(7422),m=c(2425);function g(s,o){1&s&&(t.TgZ(0,"p",6),t._uU(1,"Empaty Products of Wish List "),t.qZA())}function f(s,o){if(1&s&&(t.TgZ(0,"div")(1,"h2",7),t._uU(2,"My Wish List"),t.qZA(),t.TgZ(3,"h4"),t._uU(4," Total Items : "),t.TgZ(5,"span"),t._uU(6),t.qZA()()()),2&s){const i=t.oxw(2);t.xp6(6),t.Oqu(i.wishListDetails.count)}}function _(s,o){if(1&s){const i=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"div",11)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"h4",12),t._uU(7),t.qZA(),t.TgZ(8,"div",13)(9,"p",14),t._uU(10),t.qZA(),t.TgZ(11,"button",15),t.NdJ("click",function(){const a=t.CHM(i).$implicit,l=t.oxw(2);return t.KtG(l.deleteFavProduct(a.id))}),t._UZ(12,"i",16),t._uU(13," Remove "),t.qZA()()(),t.TgZ(14,"div",9)(15,"button",17),t.NdJ("click",function(){const a=t.CHM(i).$implicit,l=t.oxw(2);return t.KtG(l.addToCart(a.id))}),t._UZ(16,"i",18),t._uU(17," Add to Cart"),t.qZA()()()}if(2&s){const i=o.$implicit;t.xp6(2),t.Q6J("src",i.imageCover,t.LSH),t.xp6(3),t.Oqu(i.title),t.xp6(2),t.Oqu(i.category.name),t.xp6(3),t.hij("",i.price," EGP")}}function v(s,o){if(1&s&&(t.TgZ(0,"div",2),t.YNc(1,g,2,0,"p",3),t.YNc(2,f,7,1,"div",4),t.YNc(3,_,18,4,"div",5),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",!(null!=i.wishListDetails&&i.wishListDetails.count)),t.xp6(1),t.Q6J("ngIf",null==i.wishListDetails?null:i.wishListDetails.count),t.xp6(1),t.Q6J("ngForOf",i.wishListDetails.data)}}const L=[{path:"",component:(()=>{var s;class o{constructor(e,n,a){this._wishListService=e,this._cartService=n,this._toastr=a,this.wishListDetails={},this.wishListUpdate=[]}ngOnInit(){this.getWishList()}getWishList(){this._wishListService.getWishList().subscribe({next:e=>{this.wishListDetails=e,console.log(this.wishListDetails)}})}deleteFavProduct(e){this._wishListService.removeProduct(e).subscribe({next:n=>{this._wishListService.numOfWishListItems.next(n.data.length),this.wishListUpdate=n.data,this._toastr.success(n.message),this.getWishList()},error:n=>{console.log(n)}})}addToCart(e){this._cartService.addProductToCart(e).subscribe({next:n=>{this._cartService.numOfCartItems.next(n.numOfCartItems),this._toastr.success(n.message)}})}}return(s=o).\u0275fac=function(e){return new(e||s)(t.Y36(u.i),t.Y36(p.N),t.Y36(m._W))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-wish-list"]],decls:2,vars:1,consts:[[1,"container","py-5"],["class","bg-light p-5 rounded-3",4,"ngIf"],[1,"bg-light","p-5","rounded-3"],["class","alert alert-danger fs-1 mx-auto p-5 text-danger text-center",4,"ngIf"],[4,"ngIf"],["class","row align-items-center border-bottom mb-4 pb-4",4,"ngFor","ngForOf"],[1,"alert","alert-danger","fs-1","mx-auto","p-5","text-danger","text-center"],[1,"mb-3"],[1,"row","align-items-center","border-bottom","mb-4","pb-4"],[1,"col-md-2"],["alt","",1,"w-100",3,"src"],[1,"col-md-8"],[1,"mb-4"],[1,"d-flex","align-items-center"],[1,"mb-0"],[1,"btn","ms-5","text-danger",3,"click"],[1,"fa-sharp","fa-solid","fa-trash"],["id","btnAdd",1,"w-75","m-auto","d-block","btn","btn-success","py-2","mb-4",3,"click"],[1,"fa","fa-shopping-cart"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,v,4,3,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",null==n.wishListDetails?null:n.wishListDetails.data))},dependencies:[r.sg,r.O5],styles:["*[_ngcontent-%COMP%]{font-family:Josefin Sans,sans-serif}h2[_ngcontent-%COMP%], span[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:#0aad0a}button[_ngcontent-%COMP%]{font-family:Josefin Sans,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}"]}),o})()}];let x=(()=>{var s;class o{}return(s=o).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.Bz.forChild(L),h.Bz]}),o})(),C=(()=>{var s;class o{}return(s=o).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[r.ez,x]}),o})()}}]);