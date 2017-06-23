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
var router_1 = require("@angular/router");
var app_service_1 = require("../app.service");
var LoginComponent = (function () {
    function LoginComponent(router, _service) {
        this.router = router;
        this._service = _service;
        this.data = {};
        this.employees = [];
        this.currentUser = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
    };
    LoginComponent.prototype.loginSubmit = function (value) {
        var _this = this;
        this.employees.map(function (item) {
            if (item.username === value.username && item.password === value.password) {
                _this.router.navigate(['leave']);
            }
            _this.currentUser = item.username;
            console.log(_this.currentUser);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/Login/app.login.component.html',
        providers: [app_service_1.EmployeedataService]
    }),
    __metadata("design:paramtypes", [router_1.Router, app_service_1.EmployeedataService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=app.login.component.js.map