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
var FooComponent = (function () {
    function FooComponent() {
        this.bricks = [
            { title: 'Brick 1' },
            { title: 'Brick 2' },
            { title: 'Brick 3' },
            { title: 'Brick 4' },
            { title: 'Brick 5' },
            { title: 'Brick 6' }
        ];
        this.foo = [
            { photo: 'app/img/edouard/image_2.png', text: 'hello' },
            { photo: 'app/img/edouard/image_3.png', text: 'hello' },
            { photo: 'app/img/edouard/image_4.png', text: 'hello' },
            { photo: 'app/img/edouard/image_5.png', text: 'hello' },
            { photo: 'app/img/edouard/image_6.png', text: 'hello' },
            { photo: 'app/img/edouard/image_7.png', text: 'hello' },
            { photo: 'app/img/edouard/image_8.png', text: 'hello' },
            { photo: 'app/img/edouard/image_9.png', text: 'hello' },
            { photo: 'app/img/edouard/image_10.png', text: 'hello' },
            { photo: 'app/img/edouard/image_11.png', text: 'hello' },
            { photo: 'app/img/edouard/image_2.png', text: 'hello' },
            { photo: 'app/img/edouard/image_3.png', text: 'hello' },
            { photo: 'app/img/edouard/image_4.png', text: 'hello' },
            { photo: 'app/img/edouard/image_5.png', text: 'hello' },
            { photo: 'app/img/edouard/image_6.png', text: 'hello' },
            { photo: 'app/img/edouard/image_7.png', text: 'hello' },
            { photo: 'app/img/edouard/image_8.png', text: 'hello' },
            { photo: 'app/img/edouard/image_9.png', text: 'hello' },
            { photo: 'app/img/edouard/image_10.png', text: 'hello' },
            { photo: 'app/img/edouard/image_11.png', text: 'hello' },
            { photo: 'app/img/edouard/image_2.png', text: 'hello' },
            { photo: 'app/img/edouard/image_3.png', text: 'hello' },
            { photo: 'app/img/edouard/image_4.png', text: 'hello' },
            { photo: 'app/img/edouard/image_5.png', text: 'hello' },
            { photo: 'app/img/edouard/image_6.png', text: 'hello' },
            { photo: 'app/img/edouard/image_7.png', text: 'hello' },
            { photo: 'app/img/edouard/image_8.png', text: 'hello' },
            { photo: 'app/img/edouard/image_9.png', text: 'hello' },
            { photo: 'app/img/edouard/image_10.png', text: 'hello' },
            { photo: 'app/img/edouard/image_11.png', text: 'hello' },
            { photo: 'app/img/edouard/image_2.png', text: 'hello' },
            { photo: 'app/img/edouard/image_3.png', text: 'hello' },
            { photo: 'app/img/edouard/image_4.png', text: 'hello' },
            { photo: 'app/img/edouard/image_5.png', text: 'hello' },
            { photo: 'app/img/edouard/image_6.png', text: 'hello' },
            { photo: 'app/img/edouard/image_7.png', text: 'hello' },
            { photo: 'app/img/edouard/image_8.png', text: 'hello' },
            { photo: 'app/img/edouard/image_9.png', text: 'hello' },
            { photo: 'app/img/edouard/image_10.png', text: 'hello' },
            { photo: 'app/img/edouard/image_11.png', text: 'hello' }
        ];
    }
    FooComponent.prototype.ngOnInit = function () {
    };
    FooComponent.prototype.viewLarge = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
    };
    FooComponent = __decorate([
        core_1.Component({
            selector: 'foo',
            templateUrl: "app/foo.component.html",
            styleUrls: ['app/foo.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FooComponent);
    return FooComponent;
}());
exports.FooComponent = FooComponent;
//# sourceMappingURL=foo.component.js.map