import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthorizedGuard = class AuthorizedGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(_route, _state) {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    canActivateChild(_route, _state) {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthorizedGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthorizedGuard);
export { AuthorizedGuard };
//# sourceMappingURL=authorized.guard.js.map