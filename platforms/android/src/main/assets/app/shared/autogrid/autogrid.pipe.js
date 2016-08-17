"use strict";
var core_1 = require("@angular/core");
var AutogridPipe = (function () {
    function AutogridPipe() {
    }
    AutogridPipe.prototype.transform = function (length, spec) {
        var itemSpec = [];
        for (var i = 0; i < length; i++) {
            itemSpec.push(spec);
        }
        return itemSpec.join(",");
    };
    AutogridPipe = __decorate([
        core_1.Pipe({
            name: 'autogrid'
        }), 
        __metadata('design:paramtypes', [])
    ], AutogridPipe);
    return AutogridPipe;
}());
exports.AutogridPipe = AutogridPipe;
//# sourceMappingURL=autogrid.pipe.js.map