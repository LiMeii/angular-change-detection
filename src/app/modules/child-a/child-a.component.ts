import { Component } from "@angular/core";

@Component({
    templateUrl: './child-a.component.html'
})

export class ChildAComponent {
    msgFromGrandChild: any = '';

    getMsgFromGrandChild(value: any) {
        this.msgFromGrandChild = value;
    }

}