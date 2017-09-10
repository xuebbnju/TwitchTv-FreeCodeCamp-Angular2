import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule} from "@angular/http";
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import {GetDataService} from './getdata.service'
@NgModule({
  declarations: [
    AppComponent,
     HoverDirective
  ],
  imports: [
    BrowserModule,
     JsonpModule,
     HttpModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
