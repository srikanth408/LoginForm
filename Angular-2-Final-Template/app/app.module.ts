import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule}    from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';
import {routingComponents} from './app.routingmodule';
import {routerModuleComponent} from './app.routingmodule';


@NgModule({
  imports:      [ BrowserModule,FormsModule,routerModuleComponent,HttpModule],
  declarations: [ AppComponent,routingComponents],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
