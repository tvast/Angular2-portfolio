import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { FooComponent } from './foo.component';
import { BioComponent } from './bio.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/oeuvre', pathMatch: 'full' },

  { path: 'oeuvre',  component: FooComponent },
  { path: 'bio',     component: BioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'secretpath', component: AdminComponent },
  // { path: 'bear/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
