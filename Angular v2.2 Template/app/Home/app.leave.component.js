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
var LeaveComponent = (function () {
    function LeaveComponent(routes, _service) {
        this.routes = routes;
        this._service = _service;
        this.leaveHistory = [];
        this.employees = [];
    }
    LeaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; });
    };
    LeaveComponent.prototype.logout = function () {
        this.routes.navigate(['login']);
    };
    LeaveComponent.prototype.OnSubmit = function (value) {
        this.leaveHistory.push(value);
    };
    return LeaveComponent;
}());
LeaveComponent = __decorate([
    core_1.Component({
        selector: 'leave',
        templateUrl: 'app/Home/app.leave.component.html',
        providers: [app_service_1.EmployeedataService]
    }),
    __metadata("design:paramtypes", [router_1.Router, app_service_1.EmployeedataService])
], LeaveComponent);
exports.LeaveComponent = LeaveComponent;
//# sourceMappingURL=app.leave.component.js.map