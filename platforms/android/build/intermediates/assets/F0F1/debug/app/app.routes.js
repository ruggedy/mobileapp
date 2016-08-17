"use strict";
var router_1 = require("nativescript-angular/router");
var pages_1 = require("./pages");
var pages_2 = require("./pages");
var pages_3 = require('./pages');
exports.routes = [
    { path: "", component: pages_1.LoginComponent },
    { path: 'home', component: pages_3.RestaurantListComponent },
    { path: "menu", component: pages_2.MenuComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map