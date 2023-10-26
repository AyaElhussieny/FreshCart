import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TooltipModule } from 'primeng/tooltip';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SliderWrapperComponent } from './components/slider-wrapper/slider-wrapper.component';
import { TrimPipe } from './pipes/trim.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { MainCategoriesComponent } from './components/main-categories/main-categories.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpInterceptorInterceptor } from 'src/core/interceptors/http-interceptor.interceptor';
import { AccordionModule } from 'primeng/accordion';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ProductsOfCategoryComponent } from './components/products-of-category/products-of-category.component';
import { ProductsOfBrandComponent } from './components/products-of-brand/products-of-brand.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    NotfoundComponent,
    FeaturedProductComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliderWrapperComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    AllOrdersComponent,
    MainCategoriesComponent,
    FilterProductsPipe,
    LoaderComponent,
    FooterComponent,
    ForgetPasswordComponent,
    ProductsOfCategoryComponent,
    ProductsOfBrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    DataViewModule,
    RatingModule,
    TooltipModule,
    GalleriaModule,
    FormsModule,
    CarouselModule ,
    ToastrModule.forRoot(),
    AccordionModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    NgIf,
    MatSliderModule,
  

  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass :HttpInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
