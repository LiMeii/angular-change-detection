import { Component, OnChanges, DoCheck, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'app-componentb',
    template: `<h3>this is component b</h3>
              <!-- <app-componentc></app-componentc> -->`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BComponent implements OnChanges, DoCheck {

    ngOnChanges() {
        console.log('ngOnChanges triggered in component B');
    }

    ngDoCheck() {
        console.log('ngDoCheck triggered in component B');
    }

}