import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { FooComponent } from './foo.component';

import { MasonryModule } from 'angular2-masonry';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  MasonryModule
   ],
  declarations: [ AppComponent,
                  FooComponent

                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
