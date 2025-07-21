import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let TrainingService = class TrainingService {
    constructor(http) {
        this.http = http;
    }
    trainingById(formPageId) {
        return this.http.get(environment.api + `candidate/get-form?filter={"formId":"${formPageId}"}`);
    }
    lessonsById(formPageId, isPdf) {
        return this.http.get(environment.api + `lessons?filter={"formId":"${formPageId}"}`);
    }
    createTraining(payload) {
        return this.http.post(environment.api + 'trainings-forms', payload, {
            observe: 'response',
        });
    }
    assessmentsById(formPageId, isPre) {
        return this.http.get(environment.api +
            `assessments?filter={"formId":"${formPageId}", "isPreAssessment":"${isPre}"}`);
    }
    assessmentSend(payload) {
        return this.http.post(environment.api + 'user-assessments', payload, {
            observe: 'response',
        });
    }
    assessmentPDFUpload(payload, formId) {
        return this.http.put(environment.api + `lessons-pdf/${formId}`, payload, {
            observe: 'response',
        });
    }
    assessmentLessonsVideos(payload) {
        return this.http.post(environment.api + 'lessons', payload, {
            observe: 'response',
        });
    }
    assessmentQues(payload) {
        return this.http.post(environment.api + 'assessments', payload, {
            observe: 'response',
        });
    }
    trainingDeatils() {
        return this.http.get(environment.api + 'training-user-details');
    }
    addUserTraining(payload) {
        return this.http.post(environment.api + 'add-participants', payload, {
            observe: 'response',
        });
    }
    exportToExcel() {
        return this.http.get(environment.api + 'download-training-user-details', {
            responseType: 'blob',
        });
    }
};
TrainingService = __decorate([
    Injectable()
], TrainingService);
export { TrainingService };
//# sourceMappingURL=training.service.js.map