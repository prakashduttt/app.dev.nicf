import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ForgotPasswordService = class ForgotPasswordService {
    constructor(http) {
        this.http = http;
    }
    forgotPassword(email) {
        return this.http.post(environment.api + 'common/forgot-password', {
            email,
            clientUrl: environment.clientUrl + 'reset-password',
        }, {
            observe: 'response',
        });
    }
};
ForgotPasswordService = __decorate([
    Injectable()
], ForgotPasswordService);
export { ForgotPasswordService };
//# sourceMappingURL=forgot-password.service.js.map