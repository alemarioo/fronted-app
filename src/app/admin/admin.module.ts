import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from '../pages/perfil/perfil.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { ActivityComponent } from '../pages/activity/activity.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    PerfilComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    IconsComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
