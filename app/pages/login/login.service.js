import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(payload) {
        return this.http.post(environment.api + 'common/login', payload);
    }
};
LoginService = __decorate([
    Injectable()
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map