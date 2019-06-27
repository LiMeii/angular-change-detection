import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AComponent } from "./componentA";
import { BComponent } from "./componentB";
import { CComponent } from "./componentC"



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'acomponent' },
    { path: 'acomponent', component: AComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    declarations: [AComponent, BComponent, CComponent],
    exports: [RouterModule]
})

export class OnpushNgdocheckModule {

}