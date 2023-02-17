import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddcatComponent } from './addcat/addcat.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [

  {path:'add-prod',component:AddProductComponent},
  {path:'edit-prod/:id',component:EditProductComponent},
  {path:'prlist/:cat',component:ProdListComponent},
  {path:'cat-list',component:CategoriesComponent},
  {path:'wtable',component:WomenComponent},
  {path:'home',component:HomeComponent},
  {path:'addcat',component:AddcatComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
