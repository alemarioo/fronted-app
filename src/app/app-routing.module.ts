import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
      }
    ]
  },
  { 
    path: '', 
    component: AdminComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
