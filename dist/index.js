import { Router } from "@angular/router";
export var REFLECT_CLASS = {
    ROUTER: Object.assign({}, Router)
};
export var ReflectRouter;
(function (ReflectRouter) {
    function init() {
        Router.prototype.navigateByData = function (data) {
            this._sendingData = data.data;
            return this.navigate(data.url, data.extras);
        };
        Router.prototype.getNavigatedData = function () {
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
})(ReflectRouter || (ReflectRouter = {}));
(function () { return ReflectRouter.init(); })();
//# sourceMappingURL=index.js.map