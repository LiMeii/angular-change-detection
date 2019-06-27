
import { Component } from "@angular/core";

@Component({
    template: `<h1>I am {{data.name}} and I live in {{data.address}}</h1>

               <cd-child [data]="data"></cd-child>
   
               <button (click)="changeInfo()">Change Info</button>`
})

export class CDParentComponent {

    data: any = {
        name: 'meii',
        address: 'ShangHai',
        contact: {
            email: 'XXX@gmail.com',
            phone: '1234567890'
        }
    };

    changeInfo() {
        this.data.contact.email = 'update@gmail.com';
        this.data.contact.phone = '00000000';
        this.data.name = 'limeii';

        // this.data = {
        //     name: 'meii', address: 'ShangHai'
        //     ,
        //     contact: {
        //         email: 'update@gmail.com',
        //         phone: '1234567890'
        //     }
        // };
    }

}







