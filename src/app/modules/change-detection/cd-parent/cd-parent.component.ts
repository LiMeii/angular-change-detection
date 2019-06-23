import { Component } from "@angular/core";


@Component({
    template: `<h1>I am <span [textContent]="data.name"></span> </h1>
               <button (click)="changeName()">Change name</button> `
})
export class cdParentComponent {

    data: any = { name: 'meii', address: 'ShangHai' };

    changeName() {
        this.data.name = 'limeii';
    }

}