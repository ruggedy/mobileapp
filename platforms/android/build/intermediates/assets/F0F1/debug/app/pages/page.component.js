"use strict";
var core_1 = require('@angular/core');
var ObservableModule = require('data/observable');
var angular_1 = require('nativescript-telerik-ui/sidedrawer/angular');
var PageComponent = (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(changeDetectionRef, router, location) {
        _super.call(this);
        this.changeDetectionRef = changeDetectionRef;
        this.router = router;
        this.location = location;
    }
    PageComponent.prototype.ngOnInit = function () {
        this.drawerComponent.showOverNavigation = true;
    };
    PageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    };
    PageComponent.prototype.onDrawerOpening = function () {
        // drawer size fix
        var layoutParams = this.drawer.drawerContent.android.getLayoutParams();
        layoutParams.topMargin = 0;
        layoutParams.bottomMargin = 0;
        this.drawer.drawerContent.android.setLayoutParams(layoutParams);
    };
    PageComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    PageComponent.prototype.closeDrawer = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], PageComponent.prototype, "drawerComponent", void 0);
    return PageComponent;
}(ObservableModule.Observable));
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map