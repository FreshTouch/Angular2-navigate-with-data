import { NavigationExtras } from "@angular/router/src/router";
export declare const REFLECT_CLASS: any;
declare module "@angular/router" {
    class Router extends REFLECT_CLASS.ROUTER {
        private _sendingData;
        navigateByData(data: ReflectRouter.NavigatedData): Promise<boolean>;
        getNavigatedData(): any;
    }
}
export declare namespace ReflectRouter {
    interface NavigatedData {
        url: Array<any>;
        data: any;
        extras?: NavigationExtras;
    }
    function init(): void;
}
