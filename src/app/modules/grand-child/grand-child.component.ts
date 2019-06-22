import { Component, Output, EventEmitter, OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from "@angular/core";



@Component({
    selector: "app-grand-child",
    templateUrl: "./grand-child.component.html"
})

export class GrandChildComponent implements  OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
    @Output() sendMsgToParent: EventEmitter<any> = new EventEmitter<any>();

    msg = "hello, change this to parent component"


    ngOnInit() {
        this.sendMsgToParent.emit(this.msg);
    }

    ngDoCheck(){
        //this.sendMsgToParent.emit(this.msg);
    }

    ngAfterViewInit(){
       // this.sendMsgToParent.emit(this.msg);
    }

    ngAfterViewChecked(){
       //this.sendMsgToParent.emit(this.msg);
    }

    ngAfterContentInit(){
       //this.sendMsgToParent.emit(this.msg);
    }

    ngAfterContentChecked(){
        //this.sendMsgToParent.emit(this.msg);
    }
}