import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
  // {
  //   path: 'mfe1',
  //   loadChildren: () => import('remoteapp1/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'mfe2',
  //   loadChildren: () =>
  //     import('remoteapp2/homeModule').then((module) => module.HomeModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
