import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { ActionDialogComponent } from 'src/app/standalone/action-dialog/action-dialog.component';
let ApplicantProfileComponent = class ApplicantProfileComponent {
    constructor(applicantService, activatedRoute, dialog, snackBar, router) {
        this.applicantService = applicantService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.dataVisual = [
            'Data Visualisation',
            'Data Cleaning',
            'Critical Thinking',
            'Machine learning',
        ];
        this.areaOfInterest = [
            'Science',
            'Finance',
            'Business',
            'Criminal Justice',
        ];
        this.trainings = ['LinkedIn', 'Facebook', 'Google', 'Newsletter'];
        this.qualifications = ['UG', 'PG', 'MATRIC', 'HS'];
        this.isLinear = false;
        this.form = new FormGroup({
            dateOfBirth: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            mobileNo: new FormControl('', {
                validators: [Validators.required, Validators.pattern('^[0-9]{10}$')],
                nonNullable: true,
            }),
            designation: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            qualification: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            department: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            currentOffice: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            ministryName: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            expertiseArea: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            interestTrainingArea: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            anotherInterestTrainingArea: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
        });
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
        // Set minimum date to today
        this.minDate = new Date();
        // Set minimum and maximum years
        const minYear = 1947; // Adjust as needed
        const maxYear = 2006; // Adjust as needed
        this.minDate = new Date(minYear, 0, 1); // January 1st of minYear
        this.maxDate = new Date(maxYear, 11, 31); // December 31st of maxYear
    }
    ngOnInit() {
        this.trainingId = this.activatedRoute.snapshot.queryParams['trainingId'];
        this.title = this.activatedRoute.snapshot.queryParams['title'];
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 9000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    errorDialog(message) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '500px',
            data: {
                message,
            },
        });
        dialogRef.afterClosed();
    }
    alertDialog(trainingId) {
        const dialogRef = this.dialog.open(ActionDialogComponent, {
            width: '260px',
            data: {
                title: 'Final Apply',
                actionName: 'Do you want to Apply?',
                buttonName: 'Apply',
            },
        });
        dialogRef.componentInstance.decision.subscribe({
            next: (flag) => {
                if (!flag)
                    return;
                this.applicantService
                    .finalApplicantApply({ formId: trainingId })
                    .subscribe({
                    next: () => {
                        this.openSnackBar('Final Apply Successfully', 'Closed');
                        this.router.navigateByUrl('/');
                    },
                    error: (error) => {
                        this.errorDialog(error.error.message);
                    },
                });
            },
        });
    }
    onTrainingApply() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.errorDialog('Please fill out all required fields.');
            return;
        }
        const payload = {
            mobileNo: this.form.get('mobileNo')?.value,
            dateOfBirth: new Date(this.form.get('dateOfBirth')?.value),
            department: this.form.get('department')?.value,
            currentOffice: this.form.get('currentOffice')?.value,
            ministryName: this.form.get('ministryName')?.value,
            qualification: this.form.get('qualification')?.value,
            designation: this.form.get('designation')?.value,
            expertiseArea: this.form.get('expertiseArea')?.value,
            interestTrainingArea: this.form.get('interestTrainingArea')
                ?.value,
            formId: this.trainingId,
        };
        this.applicantService.applicantApply(payload).subscribe({
            next: (next) => {
                this.openSnackBar('Apply Successfully', 'Closed');
                this.router.navigateByUrl('/');
                if (next.status === 204) {
                    this.alertDialog(this.trainingId);
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
};
ApplicantProfileComponent = __decorate([
    Component({
        selector: 'app-applicant-profile',
        templateUrl: './applicant-profile.component.html',
        styleUrls: ['./applicant-profile.component.scss'],
    })
], ApplicantProfileComponent);
export { ApplicantProfileComponent };
//# sourceMappingURL=applicant-profile.component.js.map