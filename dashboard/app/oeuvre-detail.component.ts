import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MasonryModule } from 'angular2-masonry';

import { Oeuvre }        from './oeuvre';
import { OeuvreService } from './oeuvre.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'app/oeuvre.component.html',
  styleUrls: [ 'app/foo.css' ]
})
export class OeuvreComponent implements OnInit {
  oeuvres: Oeuvre[] = [];
  $ : any;

  constructor(
    private router: Router,
    private oeuvreService: OeuvreService) {
    }

    ngOnInit(): void {
      this.oeuvreService.getAllPic().subscribe(oeuvres => this.oeuvres = oeuvres);
    }

    gotoDetail(oeuvre: Oeuvre): void {
      let link = ['/beardetail', oeuvre.id];
      this.router.navigate(link);
    }
  }
