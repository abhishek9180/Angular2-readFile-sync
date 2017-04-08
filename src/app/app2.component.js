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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_data_service_1 = require("./app.data.service");
var AppComponent1 = (function () {
    function AppComponent1(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.name = 'Component2';
        var self = this;
        self.dataService.getData().subscribe(function (response) { return _this.data = response; }, function (error) { return _this.errorMessage = error; });
    }
    AppComponent1.prototype.get = function () {
        console.log(this.data.name);
    };
    return AppComponent1;
}());
AppComponent1 = __decorate([
    core_1.Component({
        selector: 'my-app1',
        template: "<h1>Hello {{name}}</h1>\n\t<button (click)=\"get()\">Click</button>\n  "
    }),
    __metadata("design:paramtypes", [app_data_service_1.DataService])
], AppComponent1);
exports.AppComponent1 = AppComponent1;
//# sourceMappingURL=app2.component.js.map