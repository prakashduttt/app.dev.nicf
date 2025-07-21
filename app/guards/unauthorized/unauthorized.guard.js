import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UnauthorizedGuard = class UnauthorizedGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(_route, _state) {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
};
UnauthorizedGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UnauthorizedGuard);
export { UnauthorizedGuard };
//# sourceMappingURL=unauthorized.guard.js.map