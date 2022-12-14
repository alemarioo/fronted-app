import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from '../pages/icons/icons.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PerfilComponent } from '../pages/perfil/perfil.component';
import { ActivityComponent } from '../pages/activity/activity.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { SalesComponent } from '../pages/sales/sales.component';

const routes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'project/:id',
    component: ProjectsComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: '**',
    redirectTo: 'perfil'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
