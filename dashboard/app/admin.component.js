"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { FileUploader } from 'ng2-bootstrap/ng2-bootstrap';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
// webpack html imports
// let template = require('./simple-demo.html');
// const URL = '/api/';
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'foo',
        templateUrl: "app/admin.component.html",
        styleUrls: ['app/admin.component.css']
    })
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map