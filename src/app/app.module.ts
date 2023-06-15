import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { BillComponent } from './bill/bill.component';
import { BrandsComponent } from './home/brands/brands.component';
import { CollectionsComponent } from './home/collections/collections.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AboutusComponent,
    ContactusComponent,
    BillComponent,
    BrandsComponent,
    CollectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
