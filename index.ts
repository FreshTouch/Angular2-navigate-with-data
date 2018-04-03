import {Router} from "@angular/router";
import {NavigationExtras} from "@angular/router/src/router";

export const REFLECT_CLASS: any = {
    ROUTER: Object.assign({}, Router)
};

declare module "@angular/router" {

    export class Router extends REFLECT_CLASS.ROUTER {

        private _sendingData: any;

        public navigateByData( data: ReflectRouter.NavigatedData ) : Promise<boolean>;
        public getNavigatedData(): any;
    }
}

export namespace ReflectRouter {

    export interface NavigatedData {
        url: Array<any>,
        data: any,
        extras?: NavigationExtras
    }

    export function init() : void
    {
        Router.prototype._sendingData = null;

        Router.prototype.navigateByData = function ( data: NavigatedData ) : Promise<boolean> {
            
            if (data.data)
                this._sendingData = data.data;
            
            return this.navigate(data.url, data.extras);
        };

        Router.prototype.getNavigatedData = function () : any {

            let data: any = this._sendingData;

            if (Array.isArray(data))
                data = Object.assign([], data);
            else if (data && typeof data == "object")
                data = Object.assign({}, data);

            this._sendingData = null;

            return data;
        };
    }
}

(() : void => ReflectRouter.init())();
