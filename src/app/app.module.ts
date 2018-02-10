/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {APP_BASE_HREF, DatePipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular2-chartjs';
import { YoutubePlayerModule} from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WdetectService} from './pages/dashboard/weather/wdetect.service';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
      RouterModule,
      YoutubePlayerModule,
    HttpModule,
    AppRoutingModule,
    ChartModule,


    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: /*[
    { provide: WdetectService, useValue: '/' },
  ],*/
    [WdetectService],

})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
