import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
    AppRoot,
    HomeComponent,
    LoadingComponent,
    ValuesComponent,
    ContactComponent
} from '../components/index';

import {
    ServerRequest,
    ArraySort,
    AuthService,
    CookieManager
} from '../services/index';

import {
    SafeHtmlPipe,
    UtcToLocalPipe,
    TruncatePipe
} from '../pipes/index';

import { appRoutes } from './routes';

import { AppSettings } from '../settings/appsettings'

@NgModule({
    declarations: [
        //Components
        AppRoot,
        HomeComponent,
        LoadingComponent,
        ValuesComponent,
        ContactComponent,
        //Pipes
        SafeHtmlPipe,
        UtcToLocalPipe,
        TruncatePipe
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      NgxChartsModule,
      RouterModule.forRoot(appRoutes, { useHash: true }),
      CookieModule.forRoot()
  ],
  providers: [
      AppSettings,
      ServerRequest,
      ArraySort,
      AuthService,
      CookieManager
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
