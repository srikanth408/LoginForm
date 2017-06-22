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
var app_header_1 = require("./app.header");
var app_login_component_1 = require("./app.login.component");
var app_applyleave_component_1 = require("./app.applyleave.component");
var routes = [
    { path: 'register', component: app_header_1.AppHeader },
    { path: 'login', component: app_login_component_1.LoginComponent },
    { path: 'home', component: app_applyleave_component_1.ApplyLeaveComponent }
];
var routerModuleComponent = (function () {
    function routerModuleComponent() {
    }
    return routerModuleComponent;
}());
routerModuleComponent = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], routerModuleComponent);
exports.routerModuleComponent = routerModuleComponent;
exports.routingComponents = [app_header_1.AppHeader, app_login_component_1.LoginComponent, app_applyleave_component_1.ApplyLeaveComponent];
//# sourceMappingURL=app.routingmodule.js.map