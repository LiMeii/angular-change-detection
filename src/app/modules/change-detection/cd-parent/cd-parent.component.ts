import { Component } from "@angular/core";


@Component({
    templateUrl: './cd-parent.component.html'

})

export class cdParentComponent {

    data: any = { name: 'meii', address: 'ShangHai' };

    onClick() {
        this.data.address = 'China'
    }
}