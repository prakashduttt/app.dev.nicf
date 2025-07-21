import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { finalize } from 'rxjs';
let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(request, next) {
        this.loaderService.show();
        return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
    }
};
LoaderInterceptor = __decorate([
    Injectable()
], LoaderInterceptor);
export { LoaderInterceptor };
export const LOADER_INTERCEPTOR = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
};
//# sourceMappingURL=loader.interceptor.js.map