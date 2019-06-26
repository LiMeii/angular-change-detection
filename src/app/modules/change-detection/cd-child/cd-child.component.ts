import { Component, Input, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, ApplicationRef } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators"


@Component({
    selector: "cd-child",
    templateUrl: './cd-child.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class cdChildComponent implements OnInit, OnChanges {

    @Input() data: any;

    counter: number = 1;

    count$: Observable<number>;

    constructor(private cd: ChangeDetectorRef, private ApplicationRef: ApplicationRef) {

    }

    ngOnInit() {

        //setInterval(() => this.counter++, 1000);
        //this.cd.markForCheck();
        // this.cd.detectChanges();
        // this.ApplicationRef.tick()

        this.count$ = interval(1000)
            .pipe(
                map((count: number) => ++count)
            );
    }

    ngOnChanges() {
        // won't trigger when user click submit button in AppComponent
        console.log('data has been changed: ' + this.data.name + ' ' + this.data.address);

    }

}