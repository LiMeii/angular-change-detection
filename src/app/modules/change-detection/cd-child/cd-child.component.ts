

import { Component, Input, OnChanges, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ApplicationRef } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators"

@Component({
    selector: "cd-child",
    template: `<h3>here is email in the child:{{data.contact.email}}</h3>
                <!--  <h3>here is counter in the child:{{count$ | async}}</h3> -->
                <h3>here is the counter triggered manually in the child:{{counter}}</h3> 
               <div style="margin-bottom:10px;">
                    <button (click)="changeCounter()">change child counter</button>
                </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CDChildComponent implements OnInit, OnChanges {

    @Input() data: any;

    counter: number = 1;
    count$: Observable<number>;

    constructor(private cd: ChangeDetectorRef, private applicationRef: ApplicationRef) { }

    ngOnInit() {
        //setInterval(() => this.counter++, 1000);

        // this.count$ = interval(1000)
        //     .pipe(
        //         map((count: number) => ++count)
        //     );

        setInterval(() => {
            this.counter = this.counter + 20;
            // this.cd.detectChanges();
            //this.cd.markForCheck();
            this.applicationRef.tick();
        }, 1000);
    }

    changeCounter() {
        this.counter++;
    }

    ngOnChanges() {
        console.log('data has been changed: ' + this.data.name + ' ' + this.data.address);
    }

}
