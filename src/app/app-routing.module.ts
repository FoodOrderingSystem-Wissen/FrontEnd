import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path:"", component:LoginPageComponent},
  {path:"customer", component:LoginPageComponent},
  {path:"merchant", component:MerchantLoginComponent},
  {path:"items", component:ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
