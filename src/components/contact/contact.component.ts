import { Component, OnInit ,} from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'contact',
    templateUrl: './contact.template.html'
})
export class ContactComponent implements OnInit {
	
    
    constructor(private _router: Router,) {
    }

    ngOnInit() {
    }


}
