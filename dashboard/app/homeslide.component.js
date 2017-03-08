"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeSlideComponent = (function () {
    function HomeSlideComponent() {
    }
    HomeSlideComponent.prototype.ngOnInit = function () {
        Barba.Pjax.start();
    };
    return HomeSlideComponent;
}());
HomeSlideComponent = __decorate([
    core_1.Component({
        selector: 'homecomponent',
        template: "\n\n    <div id=\"barba-wrapper\" aria-live=\"polite\">\n      \n    <div class=\"barba-container\" data-namespace=\"grid\" style=\"visibility: visible;\">\n        <a class=\"intro-thumb\" href=\"http://barbajs.org/demo/grid/1.html\">\n          <div class=\"full\" style=\"background-image: url(app/img/edouard/image_3.png);\"></div>\n        </a>\n        <a class=\"intro-thumb\" href=\"http://barbajs.org/demo/grid/2.html\">\n          <div class=\"full\" style=\"background-image: url(app/img/edouard/image_10.png);\"></div>\n        </a>\n        <a class=\"intro-thumb\" href=\"http://barbajs.org/demo/grid/3.html\">\n          <div class=\"full\" style=\"background-image: url(app/img/edouard/image_8.png);\"></div>\n        </a>\n        <a class=\"intro-thumb\" href=\"http://barbajs.org/demo/grid/4.html\">\n          <div class=\"full\" style=\"background-image: url(app/img/edouard/image_9.png);\"></div>\n        </a>\n      </div></div>\n\n\n      ",
        styleUrls: ['app/home.component.css']
    })
], HomeSlideComponent);
exports.HomeSlideComponent = HomeSlideComponent;
//# sourceMappingURL=homeslide.component.js.map