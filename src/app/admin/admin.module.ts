import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from '../pages/perfil/perfil.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    PerfilComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
