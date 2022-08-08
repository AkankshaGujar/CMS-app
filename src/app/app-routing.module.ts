import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages/pages.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
 
  {
    path:'DCX CMS',
    component:HomeComponent
  },
  {
    path:'Dashboard',
    component:DashboardComponent
  },
  {
    path:'Categories',
    component:CategoriesComponent
  },
  {
    path:'Pages',
    component:PagesComponent
  },
  {
    path:'User',
    component:UserComponent
  },
  {
    path:'Login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
