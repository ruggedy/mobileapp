"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var app_component_1 = require("./app.component");
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var app_routes_1 = require("./app.routes");
var utils_1 = require('./utils');
var router_1 = require('@angular/router');
var router_2 = require('nativescript-angular/router');
utils_1.setStatusBarColors();
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [angular_1.SIDEDRAWER_PROVIDERS, angular_2.LISTVIEW_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS,
    router_1.RouterOutletMap,
    router_2.NS_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(nativescript_ng2_fonticon_1.TNSFontIconService, {
        useFactory: function () {
            return new nativescript_ng2_fonticon_1.TNSFontIconService({
                'fa': 'font-awesome.css'
            });
        }
    })
]);
//# sourceMappingURL=main.js.map