"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var index_1 = require('../index');
require('rxjs/Rx');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.signin = function (user) {
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(index_1.Config.apiUrl + 'user/signin', JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: header })
            .map(function (response) { return response.json(); })
            .do(function (data) { return index_1.Config.token = data.obj; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    UserService.prototype.signup = function (user) {
        return console.log(user.email);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map