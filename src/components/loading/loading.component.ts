import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServerRequest } from '../../services/index';

@Component({
    selector: 'loading',
    template: '<div style="height:200px;"><i class="fa fa-spinner fa-spin fa-5x fa-fw center" style="line-height: 180px;"></i></div>'
})
export class LoadingComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }

}
