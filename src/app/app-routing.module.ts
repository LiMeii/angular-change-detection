import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'changeDetection'
  },
  {
    path: 'changeDetection',
    loadChildren: './modules/change-detection.module#ChangeDetectionModule',
    data: { preload: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
