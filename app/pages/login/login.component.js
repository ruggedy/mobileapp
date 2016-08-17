"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var page_1 = require("ui/page");
var color_1 = require("color");
var nativescript_swiss_army_knife_1 = require('nativescript-swiss-army-knife/nativescript-swiss-army-knife');
var index_1 = require('../../shared/index');
var LoginComponent = (function () {
    function LoginComponent(_router, page, _userService) {
        this._router = _router;
        this.page = page;
        this._userService = _userService;
        this.isLoggedIn = true;
        this.user = new index_1.User();
    }
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggedIn = !this.isLoggedIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggedIn ? new color_1.Color("White") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.login = function () {
        console.log(this.user.email);
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address");
            return;
        }
        this._userService.signin(this.user);
        this._router.navigate(['/menu']);
    };
    LoginComponent.prototype.signUp = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address");
            return;
        }
        this._userService.signup(this.user);
        this._router.navigate(["/home"]);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = new color_1.Color("green");
        this.width = nativescript_swiss_army_knife_1.SwissArmyKnife.getScreenHeight().landscape;
        this.height = nativescript_swiss_army_knife_1.SwissArmyKnife.getScreenHeight().portrait;
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-login",
            templateUrl: "login.html",
            styleUrls: ["login-common.css", "login.css"],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, index_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map