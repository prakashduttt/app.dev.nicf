import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ApplicantRegisterService = class ApplicantRegisterService {
    constructor(http) {
        this.http = http;
    }
    applicantRegister(payload) {
        return this.http.post(environment.api + 'candidate/register', payload);
    }
};
ApplicantRegisterService = __decorate([
    Injectable()
], ApplicantRegisterService);
export { ApplicantRegisterService };
//# sourceMappingURL=applicant-register.service.js.map