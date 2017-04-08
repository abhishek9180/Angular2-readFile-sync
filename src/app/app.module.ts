import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AppComponent1 }  from './app2.component';
import { DataService } from './app.data.service';
import { Data } from './app.data';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, AppComponent1 ],
  bootstrap:    [ AppComponent ],
  providers: [ DataService ]
})
export class AppModule { }
