import { Component } from '@angular/core';
// import { FileUploader } from 'ng2-bootstrap/ng2-bootstrap';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

// webpack html imports
// let template = require('./simple-demo.html');

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'foo',
  templateUrl: `app/admin.component.html`,
  styleUrls: ['app/admin.component.css']
})
export class AdminComponent {
  ngOnInit() {
  }
  // public uploader:FileUploader = new FileUploader({url: URL});
  // public hasBaseDropZoneOver:boolean = false;
  // public hasAnotherDropZoneOver:boolean = false;
  //
  // public fileOverBase(e:any):void {
  //   this.hasBaseDropZoneOver = e;
  // }
  //
  // public fileOverAnother(e:any):void {
  //   this.hasAnotherDropZoneOver = e;
  // }
}
