import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppSettings {
    serverUrl: string = environment.serverUrl;
}