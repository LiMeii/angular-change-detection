import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ChildAComponent } from "./child-a/child-a.component";
import { GrandChildComponent } from "./grand-child/grand-child.component";

const ChangeDetectionRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'childa' },
    { path: 'childa', component: ChildAComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ChangeDetectionRoutes)],
    declarations: [ChildAComponent, GrandChildComponent],
    exports: [RouterModule]
})


export class ChangeDetectionRoutingModule {

}