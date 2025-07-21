import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ApplicantService = class ApplicantService {
    constructor(http) {
        this.http = http;
    }
    viewApplicants(pageNumber, pageSize, trainingId) {
        return this.http.get(environment.api +
            `user-forms/${trainingId}?page=${pageNumber}&limit=${pageSize}`);
    }
    applicantsAccept(payload) {
        return this.http.put(environment.api + 'user-forms', payload, {
            observe: 'response',
        });
    }
    applicantList(pageNumber, pageSize, applicantId, trainingId) {
        return this.http.get(environment.api +
            `candidate/${applicantId}/forms/${trainingId}?page=${pageNumber}&limit=${pageSize}`);
    }
    applicantApply(payload) {
        return this.http.put(environment.api + 'candidate/update-record', payload, {
            observe: 'response',
        });
    }
    finalApplicantApply(payload) {
        return this.http.post(environment.api + 'user-forms', payload, {
            observe: 'response',
        });
    }
    generateCertificate(candidateId, applicantId) {
        return this.http.put(environment.api + `user-forms-certificate/${applicantId}`, [candidateId]);
    }
};
ApplicantService = __decorate([
    Injectable()
], ApplicantService);
export { ApplicantService };
//# sourceMappingURL=applicant.service.js.map