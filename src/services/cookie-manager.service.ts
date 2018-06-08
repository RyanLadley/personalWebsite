import { Injectable } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { AppSettings } from "../settings/appsettings";

@Injectable()
export class CookieManager {

    private _appTokenKey: string = "Token";

    constructor(private _cookies: CookieService, private _appsettings: AppSettings) {
    }

    //App Token Is specific to this application. This is sent with every reqest to the app server
    setAppToken(token: any) {
        var now = new Date();
        now.setHours(now.getHours() + 12)
        let options: CookieOptions = {
            expires: now
        };

        this._cookies.put(this._appTokenKey, token, options);
    }
    
    removeAppToken() {
        this._cookies.remove(this._appTokenKey);
    }
    
    getAppToken() : string {
        return this._cookies.get(this._appTokenKey);
    }    

    removeAll() {
        this._cookies.removeAll();
    }
}