"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_swiss_army_knife_1 = require("nativescript-swiss-army-knife/nativescript-swiss-army-knife");
var index_1 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>",
            viewProviders: [nativescript_swiss_army_knife_1.SwissArmyKnife, index_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map