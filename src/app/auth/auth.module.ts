import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AuthComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
