import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
let TrainingAssessmentComponent = class TrainingAssessmentComponent {
    constructor(trainingService, dialog, activatedRoute, fb, coreService, router, snackBar) {
        this.trainingService = trainingService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.coreService = coreService;
        this.router = router;
        this.snackBar = snackBar;
        this.isPreAss = false;
        this.formSubmitted = false;
        this.isCheckboxAffirm = false;
    }
    ngOnInit() {
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
            },
        });
        this.trainingId = this.activatedRoute.snapshot.queryParams['trainingId'];
        this.isPreAss = this.activatedRoute.snapshot.queryParams['isPreAss'];
        this.trainingTitle = this.activatedRoute.snapshot.queryParams['title'];
        if (this.trainingId) {
            this.listAssessment(this.trainingId, this.isPreAss);
        }
        this.form = this.fb.group([]);
        this.minutes = 10;
        this.seconds = 0;
        this.startTimer();
        this.timeIsUp = false;
    }
    errorDialog(message, statusText) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '400px',
            data: {
                message,
                statusText,
            },
        });
        dialogRef.afterClosed();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 9000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }
    startTimer() {
        const interval = setInterval(() => {
            if (this.seconds === 0) {
                if (this.minutes === 0) {
                    clearInterval(interval);
                    this.timeIsUp = true;
                }
                else {
                    this.minutes--;
                    this.seconds = 59;
                }
            }
            else {
                this.seconds--;
            }
        }, 1000);
    }
    listAssessment(formId, isPre) {
        this.trainingService.assessmentsById(formId, isPre).subscribe({
            next: (result) => {
                this.allAssessments = result.data;
                if (this.allAssessments) {
                    this.allAssessments.forEach((assessment, index) => {
                        this.form.addControl(`question_${index}`, this.fb.control('', Validators.required));
                    });
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    onAssessments() {
        if (!this.checkboxAffirm.checked) {
            this.isCheckboxAffirm = true;
        }
        else {
            this.isCheckboxAffirm = false;
            this.formSubmitted = true;
            if (this.form.invalid) {
                this.errorDialog('Please fill out required fields.', '');
                return;
            }
            else {
                const payload = {
                    formId: this.trainingId,
                    isPreAssessment: this.isPreAss,
                    assessment: [],
                };
                for (const key of Object.keys(this.form.value)) {
                    payload.assessment.push(this.form.value[key]);
                }
                this.trainingService.assessmentSend(payload).subscribe({
                    next: (response) => {
                        if (response.status === 201) {
                            this.openSnackBar('Assessment Submitted', 'Close');
                            this.router.navigate(['/']);
                        }
                    },
                    error: (error) => {
                        this.errorDialog(error.error.message, '');
                    },
                });
            }
        }
    }
};
__decorate([
    ViewChild('checkboxAffirm')
], TrainingAssessmentComponent.prototype, "checkboxAffirm", void 0);
TrainingAssessmentComponent = __decorate([
    Component({
        selector: 'app-training-assessment',
        templateUrl: './training-assessment.component.html',
        styleUrls: ['./training-assessment.component.scss'],
    })
], TrainingAssessmentComponent);
export { TrainingAssessmentComponent };
//# sourceMappingURL=training-assessment.component.js.map