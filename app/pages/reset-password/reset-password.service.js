import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ResetPasswordService = class ResetPasswordService {
    constructor(http) {
        this.http = http;
    }
    resetPassword(nextPassword, sessionToken) {
        return this.http.patch(environment.api + 'common/reset-password', {
            nextPassword,
            sessionToken,
        });
    }
};
ResetPasswordService = __decorate([
    Injectable()
], ResetPasswordService);
export { ResetPasswordService };
//# sourceMappingURL=reset-password.service.js.map