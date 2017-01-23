import { Component } from '@angular/core';
import { Oeuvre }    from './oeuvre';
import { OeuvreService } from './oeuvre.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
	selector: 'form',
	templateUrl: `app/form.component.html`,
	/*styleUrls: ['app/form.component.css']*/
})
export class FormComponent {
	oeuvres: Oeuvre[] = [];
	active = true;

	oeuvre = new Oeuvre();
	submitted = false;
	$: any;
	jQuery : any;

	constructor(
		private router: Router,
		private oeuvreService: OeuvreService) {
	}
	ngOnInit() {
/*		  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });*/
		
	}
	onSubmit() { this.submitted = true; }

	saveOeuvre(oeuvre: Oeuvre) : void {
		let commentOperation:Observable<Oeuvre[]>;
		this.oeuvreService.addBear(this.bear).subscribe(

			);
		let link = ['/liste'];
		this.router.navigate(link);

	}
}