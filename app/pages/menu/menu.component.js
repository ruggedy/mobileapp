"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var page_1 = require('ui/page');
var ObservableModule = require('data/observable');
var angular_1 = require('nativescript-telerik-ui/sidedrawer/angular');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(page, _changeDetectionRef, fonticon) {
        _super.call(this);
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.fonticon = fonticon;
        this.drawerOpen = false;
    }
    MenuComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
        this.drawerOpen = true;
    };
    MenuComponent.prototype.closeDrawer = function () {
        this.drawer.closeDrawer();
        this.drawerOpen = false;
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], MenuComponent.prototype, "drawerComponent", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu',
            templateUrl: 'menu.html',
            styleUrls: ['menu-common.css', 'menu.css'],
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe]
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], MenuComponent);
    return MenuComponent;
}(ObservableModule.Observable));
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map