import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { FooComponent } from './foo.component';


const routes: Routes = [
  { path: '', redirectTo: '/oeuvre', pathMatch: 'full' },

  { path: 'oeuvre',  component: FooComponent },
  // { path: 'inscription',     component: FormComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'bear/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
