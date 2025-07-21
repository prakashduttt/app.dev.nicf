import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ChangePasswordService = class ChangePasswordService {
    constructor(http) {
        this.http = http;
    }
    changePassword(oldPassword, newPassword) {
        return this.http.put(environment.api + 'common/change-password', {
            oldPassword,
            newPassword,
        });
    }
};
ChangePasswordService = __decorate([
    Injectable()
], ChangePasswordService);
export { ChangePasswordService };
//# sourceMappingURL=change-password.service.js.map