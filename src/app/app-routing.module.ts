import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { BillComponent } from './bill/bill.component';
import { BrandsComponent } from './home/brands/brands.component';

const routes: Routes = [
  {path: ' ', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'bill', component:BillComponent},
  {path: 'brands', component:BrandsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
