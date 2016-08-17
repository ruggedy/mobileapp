"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var page_1 = require('ui/page');
var ObservableModule = require('data/observable');
var angular_1 = require('nativescript-telerik-ui/sidedrawer/angular');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var RestaurantListComponent = (function (_super) {
    __extends(RestaurantListComponent, _super);
    function RestaurantListComponent(page, _changeDetectionRef, fonticon) {
        _super.call(this);
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.drawerOpen = false;
    }
    RestaurantListComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    RestaurantListComponent.prototype.ngOnInit = function () {
    };
    RestaurantListComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
        this.drawerOpen = true;
    };
    RestaurantListComponent.prototype.closeDrawer = function () {
        this.drawer.closeDrawer();
        this.drawerOpen = false;
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], RestaurantListComponent.prototype, "drawerComponent", void 0);
    RestaurantListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rest-list',
            templateUrl: 'restaurantList.html',
            styleUrls: ['restaurantList-common.css', 'restaurantList.css'],
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe]
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], RestaurantListComponent);
    return RestaurantListComponent;
}(ObservableModule.Observable));
exports.RestaurantListComponent = RestaurantListComponent;
//# sourceMappingURL=restaurantList.component.js.map