import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module) => {
        module.HomeModule;
      }),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('remoteapp2/homeModule').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
