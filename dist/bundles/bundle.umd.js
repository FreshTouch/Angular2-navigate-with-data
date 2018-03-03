(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/router'], factory) :
	(factory((global.bundle = global.bundle || {}),global.ng.router));
}(this, (function (exports,_angular_router) { 'use strict';

var REFLECT_CLASS = {
    ROUTER: Object.assign({}, _angular_router.Router)
};

(function (ReflectRouter) {
    function init() {
        _angular_router.Router.prototype.navigateByData = function (data) {
            this._sendingData = data.data;
            return this.navigate(data.url, data.extras);
        };
        _angular_router.Router.prototype.getNavigatedData = function () {
            var data = this._sendingData;
            if (Array.isArray(data))
                data = Object.assign([], data);
            else if (typeof data == "object")
                data = Object.assign({}, data);
            this._sendingData = null;
            return data;
        };
    }
    ReflectRouter.init = init;
})(exports.ReflectRouter || (exports.ReflectRouter = {}));
(function () { return exports.ReflectRouter.init(); })();

exports.REFLECT_CLASS = REFLECT_CLASS;

Object.defineProperty(exports, '__esModule', { value: true });

})));
