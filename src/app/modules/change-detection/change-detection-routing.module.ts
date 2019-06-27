import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CDParentComponent } from "./cd-parent/cd-parent.component";
import { CDChildComponent } from "./cd-child/cd-child.component";

const ChangeDetectionRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cdParent' },
    { path: 'cdParent', component: CDParentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ChangeDetectionRoutes), CommonModule],
    declarations: [CDParentComponent, CDChildComponent],
    exports: [RouterModule]
})


export class ChangeDetectionRoutingModule {

}