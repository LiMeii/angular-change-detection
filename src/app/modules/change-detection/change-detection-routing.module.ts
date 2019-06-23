import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { cdParentComponent } from "./cd-parent/cd-parent.component";
import { cdChildComponent } from "./cd-child/cd-child.component";

const ChangeDetectionRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cdParent' },
    { path: 'cdParent', component: cdParentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ChangeDetectionRoutes)],
    declarations: [cdParentComponent, cdChildComponent],
    exports: [RouterModule]
})


export class ChangeDetectionRoutingModule {

}