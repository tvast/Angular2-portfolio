"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <nav class=\"white\" role=\"navigation\">\n        <div class=\"nav-wrapper container\">\n          <a id=\"logo-container\" href=\"#\" class=\"brand-logo\">EW</a>\n\n          <ul class=\"menu right hide-on-med-and-down\">\n          <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a></li>\n            <li><a routerLink=\"/bio\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Bio</a></li>\n            <li><a routerLink=\"/bio\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Presse</a></li>\n            <li><a routerLink=\"/contact\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Contact</a></li>\n              \n          </ul>\n\n          <ul id=\"nav-mobile\" class=\"side-nav\">\n         <li><a routerLink=\"/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a></li>\n            <li><a routerLink=\"/bio\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i> Bio</a></li>\n            <li><a routerLink=\"/bio\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Presse</a></li>\n            <li><a routerLink=\"/contact\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Contact</a></li>\n          </ul>\n          <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n        </div>\n      </nav>\n      <router-outlet></router-outlet>\n\n      <footer class=\"page-footer black\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Edouard Wolton</h5>\n          <p class=\"grey-text text-lighten-4\">\n         Pr\u00E9sentation du travail d'Edouard Wolton</p>\n\n\n        </div>\n        <div class=\"col l3 s12\">\n          <h5 class=\"white-text\">Menu</h5>\n          <ul> \n            <li><a class=\"white-text\" href=\"#!\">Presse</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Bio</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Contact</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Oeuvre</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Actualit\u00E9s</a></li>\n            <li><a class=\"white-text\" href=\"#!\">UK</a></li>\n          </ul>\n        </div>\n        <div class=\"col l3 s12\">\n          <h5 class=\"white-text\">R\u00E9seaux sociaux</h5>\n          <ul>\n            <li><a class=\"white-text\" href=\"#!\">Facebook</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Twitter</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Pinterest</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Vimeo</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      Made by <a class=\"white-text text-lighten-3\" href=\"http://theophilevast.fr\">Th\u00E9ophile Vast in his \n<i class=\"fa fa-rocket\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n  </footer>\n\n      ",
        styleUrls: ['app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map