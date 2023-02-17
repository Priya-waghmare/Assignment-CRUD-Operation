import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { WomenComponent } from './women/women.component';
import { HomeComponent } from './home/home.component';
import { AddcatComponent } from './addcat/addcat.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    AddProductComponent,
    EditProductComponent,
    CategoriesComponent,
    WomenComponent,
    HomeComponent,
    AddcatComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
