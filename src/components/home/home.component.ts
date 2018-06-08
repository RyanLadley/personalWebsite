import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'home',
    templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

    underlineTitle: boolean;
    constructor(private _router: Router,) {
    }

    ngOnInit() {
        this.underlineTitle = false
        setTimeout(() => {
            this.underlineTitle = true;
        }, 5000);
    }

    ngAfterViewInit(){

    }

}
