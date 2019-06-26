import { Component, Input, OnChanges, ChangeDetectorRef,ChangeDetectionStrategy, OnInit } from "@angular/core";


@Component({
    selector: "cd-child",
    templateUrl: './cd-child.component.html' ,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class cdChildComponent implements OnInit, OnChanges {

    @Input() data: any;

    constructor(private cd: ChangeDetectorRef) {

    }

    ngOnInit() {
        //this.cd.markForCheck();
    }

    ngOnChanges() {
        // won't trigger when user click submit button in AppComponent
        console.log('data has been changed: ' + this.data.name + ' ' + this.data.address);

    }

}