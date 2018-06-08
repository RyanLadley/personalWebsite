import { Component, OnInit ,ViewChild, ElementRef, HostListener} from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'values',
    templateUrl: './values.template.html'
})
export class ValuesComponent implements OnInit {
	
	@ViewChild('valuesSection') 
	private component : ElementRef;

	displayBackground: boolean; 
    
    constructor(private _router: Router,) {
    }

    ngOnInit() {
    }


    @HostListener('window:scroll', ['$event'])
    determineBackgroundDisplay(){
    	if(!this.component)
    		return false;

	    let elemTop = this.component.nativeElement.getBoundingClientRect().top;
	    this.displayBackground =  (elemTop -20  <= window.innerHeight);
    }

}
