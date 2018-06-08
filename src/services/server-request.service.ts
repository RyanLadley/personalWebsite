import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptions, Request, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
import { AppSettings } from '../settings/appsettings';
import { CookieManager } from './cookie-manager.service';



@Injectable()
export class ServerRequest {

    constructor(private _cookieManager :CookieManager, private _http: Http, private _appSettings: AppSettings, private _route: ActivatedRoute, private _router: Router) {

    }

    get(url: string, payload?: any, parameters?: any) {
        return this._request(RequestMethod.Get, url, payload, parameters);
    }

    post(url: string, payload?: any, parameters?: any) {
        return this._request(RequestMethod.Post, url, payload, parameters);
    }

    delete(url: string, payload?: any, parameters?: any) {
        return this._request(RequestMethod.Delete, url, payload, parameters);
    }

    private _getHeaders() {
        let headers: Headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });

        let token = this._cookieManager.getAppToken();
        if (token) {
            headers.append('Authorization', 'JWT ' + token)
        }
        return headers
    }   

    private _request(httpMethod: RequestMethod, url: string, payload?: any, parameters?: any): Observable<any>{

        let requestOptions = new RequestOptions(Object.assign({
            method: httpMethod,
            url: this._appSettings.serverUrl + url,
            headers: this._getHeaders(),
            body: payload,
            params: parameters
        }));
        
        return this._http.request(new Request(requestOptions))
            .map(response => { return response.text() ? response.json() : {} })
            .catch((error) => { return this._handleError(error); })
    }

    private _handleError(error: Response) {
        //Status Code of 0 is "ERR_CONNECTION_REFUSED"
        if (error.status === 0) {
            this._router.navigate(['/error/' + 0], { skipLocationChange: true });
        }
        else if (error.status === 500) {
            this._router.navigate(['/error/' + 500], { skipLocationChange: true });
        }
        else if (error.status === 404) {
            this._router.navigateByUrl('/error/404', { skipLocationChange: true });
        }
        return Observable.throw(error.text() ? error.json() : {})
    }


}