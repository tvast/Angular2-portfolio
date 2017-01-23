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
var core_1 = require("@angular/core");
var oeuvre_1 = require("./oeuvre");
var oeuvre_service_1 = require("./oeuvre.service");
var router_1 = require("@angular/router");
var FormComponent = (function () {
    function FormComponent(router, oeuvreService) {
        this.router = router;
        this.oeuvreService = oeuvreService;
        this.oeuvres = [];
        this.active = true;
        this.oeuvre = new oeuvre_1.Oeuvre();
        this.submitted = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        /*		  $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });*/
    };
    FormComponent.prototype.onSubmit = function () { this.submitted = true; };
    FormComponent.prototype.saveOeuvre = function (oeuvre) {
        var commentOperation;
        this.oeuvreService.addBear(this.bear).subscribe();
        var link = ['/liste'];
        this.router.navigate(link);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'form',
        templateUrl: "app/form.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        oeuvre_service_1.OeuvreService])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map