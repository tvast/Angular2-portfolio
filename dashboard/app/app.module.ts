import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { FooComponent } from './foo.component';
import { BioComponent } from './bio.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';


import { MasonryModule } from 'angular2-masonry';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  MasonryModule
   ],
  declarations: [ AppComponent,
                  FooComponent,
                  ContactComponent,
                  BioComponent,
                  AdminComponent

                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
