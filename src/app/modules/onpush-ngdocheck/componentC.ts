import { Component, OnChanges, DoCheck, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'app-componentc',
    template: `<h5>this is component C</h5>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CComponent implements OnChanges, DoCheck {

    ngOnChanges() {
        console.log('ngOnChanges triggered in component C');
    }

    ngDoCheck() {
        console.log('ngDoCheck triggered in component C');
    }

}