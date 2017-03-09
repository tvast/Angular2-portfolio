"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var foo_component_1 = require("./foo.component");
var bio_component_1 = require("./bio.component");
var contact_component_1 = require("./contact.component");
var admin_component_1 = require("./admin.component");
var login_component_1 = require("./login.component");
var home_component_1 = require("./home.component");
var homeslide_component_1 = require("./homeslide.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'oeuvre', component: foo_component_1.FooComponent },
    { path: 'bio', component: bio_component_1.BioComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'secretpath', component: admin_component_1.AdminComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'homeslide', component: homeslide_component_1.HomeSlideComponent }
    // { path: 'bear/:id', component: BearDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map