import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    listTraining(pageNumber, pageSize) {
        return this.http.get(environment.api + `trainings-forms?page=${pageNumber}&limit=${pageSize}`);
    }
    topCardCount() {
        return this.http.get(environment.api + `trainings-dashboard`);
    }
    listMyTraining(pageNumber, pageSize) {
        return this.http.get(environment.api +
            `candidate/get-form?filter={"status":"approved"}&page=${pageNumber}&limit=${pageSize}`);
    }
    listTotalTraining(pageNumber, pageSize, isActive, userId) {
        if (isActive) {
            return this.http.get(environment.api +
                `trainings-dashboard-total?filter={"isActive": ${isActive},"adminId":"${userId}"}&page=${pageNumber}&limit=${pageSize}`);
        }
        else {
            return this.http.get(environment.api +
                `trainings-dashboard-total?page=${pageNumber}&limit=${pageSize}`);
        }
    }
    trainingActive(payload, formPageId) {
        return this.http.patch(environment.api + `trainings-forms/${formPageId}`, payload, {
            observe: 'response',
        });
    }
    listVideos(pageNumber, pageSize) {
        return this.http.get(environment.api +
            `lessons?filter={"isFree":"false","isVideo":"true"}&page=${pageNumber}&limit=${pageSize}`);
    }
    listPdfS(pageNumber, pageSize) {
        return this.http.get(environment.api +
            `lessons?filter={"isFree":"false","isPdf":"true"}&page=${pageNumber}&limit=${pageSize}`);
    }
    listWebExTrainings(pageNumber, pageSize, userId) {
        return this.http.get(environment.api +
            `trainings-dashboard-total?filter={"trainingMode":"online","adminId":"${userId}"}&page=${pageNumber}&limit=${pageSize}`);
    }
    searchTrainings() {
        return this.http.get(environment.api + `trainings-search`);
    }
    searchTrainingById(formPageId) {
        return this.http.get(environment.api + `trainings-forms/${formPageId}`);
    }
};
DashboardService = __decorate([
    Injectable()
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map