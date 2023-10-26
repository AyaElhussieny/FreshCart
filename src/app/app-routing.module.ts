import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { logoutGuard } from 'src/core/guards/logout.guard';
import { loginGuard } from 'src/core/guards/login.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { MainCategoriesComponent } from './components/main-categories/main-categories.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ProductsOfCategoryComponent } from './components/products-of-category/products-of-category.component';
import { ProductsOfBrandComponent } from './components/products-of-brand/products-of-brand.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},



  {path:"Home",canActivate:[loginGuard],component:HomeComponent,title:"Home"},
  {path:"Products",canActivate:[loginGuard],component:ProductsComponent,title:"Products"},
  {path:"Brands",canActivate:[loginGuard],component:BrandsComponent,title:"Brands"},
  {path:"Categories",canActivate:[loginGuard],component:MainCategoriesComponent,title:"Categories"},
  {path:"Checkout/:cartId",canActivate:[loginGuard],component:CheckoutComponent,title:"Checkout"},
  {path:"allorders",canActivate:[loginGuard],component:AllOrdersComponent,title:"All Orders"},

  {path:"ProductDetails/:id",canActivate:[loginGuard],component:ProductDetailsComponent,title:"ProductDetails"},

  {path:"ProductOfCategory/:catId",canActivate:[loginGuard],component:ProductsOfCategoryComponent,title:"ProductOfCategory"},
  {path:"ProductOfBrand/:brandId",canActivate:[loginGuard],component:ProductsOfBrandComponent,title:"ProductOfBrand"},




  {path:"Signup",canActivate:[logoutGuard],component:SignupComponent,title:"Signup"},
  {path:"ForgetPassword",canActivate:[logoutGuard],component:ForgetPasswordComponent,title:"Forget Password"},

  {path:"Login",canActivate:[logoutGuard],component:LoginComponent,title:"Login"},

  
  { path: 'Cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),title:"Cart" },
  { path: 'Wish-list', loadChildren: () => import('./modules/wish-list/wish-list.module').then(m => m.WishListModule) },








  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
