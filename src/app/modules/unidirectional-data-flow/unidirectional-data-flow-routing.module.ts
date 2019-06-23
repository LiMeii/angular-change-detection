import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ChildAComponent } from "./child-a/child-a.component";
import { GrandChildComponent } from "./grand-child/grand-child.component";

const unidirectionalRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'childa' },
    { path: 'childa', component: ChildAComponent }
];

@NgModule({
    imports: [RouterModule.forChild(unidirectionalRoutes)],
    declarations: [ChildAComponent, GrandChildComponent],
    exports: [RouterModule]
})


export class UnidirectionalDataFlowRoutingModule {

}