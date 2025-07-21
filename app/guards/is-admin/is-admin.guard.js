import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let IsAdminGuard = class IsAdminGuard {
    constructor(router, coreService) {
        this.router = router;
        this.coreService = coreService;
    }
    canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _route, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _state) {
        if (this.coreService.user$.value?.role === 'admin') {
            return true;
        }
        return this.router.parseUrl('/');
    }
    canLoad(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _route, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _segments) {
        if (this.coreService.user$.value?.role === 'admin') {
            return true;
        }
        return this.router.parseUrl('/');
    }
};
IsAdminGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], IsAdminGuard);
export { IsAdminGuard };
//# sourceMappingURL=is-admin.guard.js.map