"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav class=\"white\" role=\"navigation\">\n        <div class=\"nav-wrapper container\">\n          <a id=\"logo-container\" href=\"#\" class=\"brand-logo\">EW</a>\n          <ul class=\"menu right hide-on-med-and-down\">\n            <li><a routerLink=\"/bio\">Bio</a></li>\n            <li><a routerLink=\"/contact\">Contact</a></li>\n              <li><a routerLink=\"/login\"> <i class=\"material-icons\">vpn_key</i></a></li>\n          </ul>\n\n          <ul id=\"nav-mobile\" class=\"side-nav\">\n          <li><a routerLink=\"/bio\">Bio</a></li>\n          <li><a routerLink=\"/contact\">Contact</a></li>\n          <li><a routerLink=\"/secretpath\">Admin</a></li>\n          </ul>\n          <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n        </div>\n      </nav>\n      <router-outlet></router-outlet>\n\n      <div class=\"container\">\n      <div class=\"pull-left\">\n          <p><em><small><a href=\"#\" target=\"_wiki\" title=\"Wiki...\"><strong>Edouard Wolton<sup>artiste</sup></strong></a>\n           <a href=\"#\" target=\"_MANIFEST\" title=\"Voir d\u00E9tails...\">(version)</a>\n          par <a href=\"#\" target=\"#\" title=\"author\">Th\u00E9ophile Vast</a>\n          @ VAST 2016</small></em></p>\n      </div>\n      </div>\n      ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map