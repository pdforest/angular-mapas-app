import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mapas',
    loadChildren: () => import( './mapas/maps.module').then( m => m.MapsModule)
  },
  {
    path: 'alone',
    loadComponent: () => import('./alone/pages/alone-page/alone-page.component')
      .then( m => m.AlonePageComponent ),
  },
  {
    path: '**', redirectTo: 'mapas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
