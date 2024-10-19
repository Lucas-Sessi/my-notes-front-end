import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/modules/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/pages/layout/modules/layout.module').then(m => m.LayoutModule),
    canActivate: [loginGuard],
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
