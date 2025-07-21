import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
    }
    addUser(payload) {
        return this.http.post(environment.api + `accounts/register`, payload);
    }
    listUser(pageNumber, pageSize) {
        return this.http.get(environment.api + `accounts/admins?page=${pageNumber}&limit=${pageSize}`);
    }
};
AdminService = __decorate([
    Injectable()
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map