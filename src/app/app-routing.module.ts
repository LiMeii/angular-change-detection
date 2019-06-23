import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'unidirectionalDataFlow'
  },
  {
    path: 'unidirectionalDataFlow',
    loadChildren: './modules/unidirectional-data-flow/unidirectional-data-flow.module#UnidirectionalDataFlowModule',
    data: { preload: true }
  },
  {
    path: 'changedetection',
    loadChildren: './modules/change-detection/change-detection.module#ChangeDetectionModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
