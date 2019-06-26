import { Component } from "@angular/core";


@Component({
    templateUrl: './cd-parent.component.html'
})
export class cdParentComponent {

    data: any = {
        name: 'meii', address: 'ShangHai'
        ,
        contact: {
            email: 'XXX@gmail.com',
            phone: '1234567890'
        }
    };

    changeName() {
        // this.data.contact.email = 'update@gmail.com';
        // this.data.contact.phone = '00000000';
        // this.data.name = 'limeii';

        this.data = {
            name: 'meii', address: 'ShangHai'
            ,
            contact: {
                email: 'update@gmail.com',
                phone: '1234567890'
            }
        };
    }

}