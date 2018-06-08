import { Injectable, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs/Subject';
import { CookieManager } from '../services/cookie-manager.service';
import { ServerRequest } from './server-request.service';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService{
    loginUpdated: Subject<boolean> = new Subject<boolean>();

    isLoggedIn: boolean;

    constructor(private _cookieManager: CookieManager, private _router: Router, private _route: ActivatedRoute, private _server: ServerRequest) {
        
    }

    login(loginForm): any {
        return new Promise(resolve => {
            this._server.post("auth", loginForm).subscribe(
                response => {
                    console.log(response)
                    resolve(this.setAppToken(response));
                },
                error => { resolve(error) }
            )
        });
    }

    setAppToken(token: any) {
        this.isLoggedIn = true;
        this._cookieManager.setAppToken(token.access_token);
        if (this._router.url === "/login") {
            let returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
            this._router.navigate([returnUrl]);
        }

        this.loginUpdated.next(true);
        return null;
    }




    logoutUser(message: any = null) {
        this._cookieManager.removeAll();
        this.isLoggedIn = false;
        this.loginUpdated.next(false);

        if (this._router.url !== "/login") {
            this._router.navigate(["/login"]);
            return message;
        }
        else
            return message
    }


    //If the user is not logged in, log them out (basically just redirects them to the login page)
    validateLoginStatus() {
        let token = this._cookieManager.getAppToken();
        
        if (token == undefined) {
            this.logoutUser();
        }
        else {
            this.isLoggedIn = true;
        }
    }
}