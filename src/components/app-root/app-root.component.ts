import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from "../../services/index";

@Component({
    selector: 'app-root',
    templateUrl: './app-root.template.html'
})
export class AppRoot implements OnInit {

    isLoginPage: boolean;
    loginCompleted: boolean;
    accessCheckInprogress: boolean;
	checkAccessLock: boolean;
    constructor(private _router: Router,private _authService: AuthService) {
    }

    ngOnInit() {
        this._router.events.subscribe(event => {
        	this.isLoginPage = /\/login\?*/.test(this._router.url);
            //this.checkAccess();
        });
    }

    checkAccess() {  
	    if(!this.checkAccessLock){  
		    	this.checkAccessLock= true;            
		    	setTimeout( () => {
		        if (!this.isLoginPage)  {
		        	this._authService.validateLoginStatus()
		        }
		    	this.checkAccessLock= false;
		    })
		}
	}
}
