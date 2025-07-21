import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
import { ActionDialogComponent } from 'src/app/standalone/action-dialog/action-dialog.component';
import { RejectApplicantsDialogComponent } from 'src/app/standalone/reject-applicants-dialog/reject-applicants-dialog.component';
let ApplicantListComponent = class ApplicantListComponent {
    constructor(applicantService, dialog, activatedRoute, snackBar) {
        this.applicantService = applicantService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.length = 500;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.showFirstLastButtons = false;
        this.bulkApplicantPayload = {
            formId: '',
            userId: [],
            status: '',
        };
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
        this.applicantId = this.activatedRoute.snapshot.queryParams['applicantId'];
        this.trainingId = this.activatedRoute.snapshot.queryParams['trainingId'];
        this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
        this.applicantList(this.pageIndex, this.pageSize, this.applicantId, this.trainingId);
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
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
    goBack() {
        history.go(-1);
    }
    getApplicants(pageIndex, pageSize, trainingId) {
        this.applicantService
            .viewApplicants(pageIndex, pageSize, trainingId)
            .subscribe({
            next: (result) => {
                (this.listApplicants = result.data[0].users),
                    (this.applicants = result.data);
                this.length = result.pagination.total;
                this.applicantList(this.pageIndex, this.pageSize, this.applicantId, this.trainingId);
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    applicantList(pageIndex, pageSize, applicantId, trainingId) {
        this.applicantService
            .applicantList(pageIndex, pageSize, applicantId, trainingId)
            .subscribe({
            next: (result) => {
                this.applicantDetails = result.data[0];
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    onViewDetails(applicantId) {
        this.applicantList(this.pageIndex, this.pageSize, applicantId, this.trainingId);
    }
    onAccept(applicantId) {
        this.bulkApplicantPayload.userId = [];
        this.bulkApplicantPayload.formId = this.trainingId;
        this.bulkApplicantPayload.status = 'approved';
        this.bulkApplicantPayload.userId.push(applicantId);
        const dialogRef = this.dialog.open(ActionDialogComponent, {
            width: '350px',
            data: {
                title: 'Applicants Accept',
                actionName: 'Do you want to Accept these Applicants.',
                buttonName: 'Accept',
            },
        });
        dialogRef.componentInstance.decision.subscribe({
            next: (flag) => {
                if (!flag)
                    return;
                this.applicantService
                    .applicantsAccept(this.bulkApplicantPayload)
                    .subscribe({
                    next: () => {
                        this.openSnackBar('Applicants Accepted', 'Closed');
                        this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
                        this.applicantList(this.pageIndex, this.pageSize, this.applicantId, this.trainingId);
                    },
                    error: (error) => {
                        this.errorDialog(error.error.message, error.statusText);
                    },
                });
            },
        });
    }
    onReject(applicantId) {
        const dialogRef = this.dialog.open(RejectApplicantsDialogComponent, {
            width: '450px',
            data: {
                title: 'Add remarks for each rejected applicant',
                actionName: 'Remarks could include reasons for rejection',
                buttonName: 'Reject',
            },
        });
        dialogRef.componentInstance.decision.subscribe({
            next: (flag) => {
                if (!flag)
                    return;
            },
        });
        dialogRef.componentInstance.formValue.subscribe({
            next: (value) => {
                if (value) {
                    this.bulkApplicantPayload.userId = [];
                    this.bulkApplicantPayload.formId = this.trainingId;
                    this.bulkApplicantPayload.status = 'rejected';
                    this.bulkApplicantPayload.remarks = value.message;
                    this.bulkApplicantPayload.userId.push(applicantId),
                        this.applicantService
                            .applicantsAccept(this.bulkApplicantPayload)
                            .subscribe({
                            next: () => {
                                this.openSnackBar('Applicants Rejected', 'Closed');
                                this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
                                this.applicantList(this.pageIndex, this.pageSize, this.applicantId, this.trainingId);
                            },
                            error: (error) => {
                                this.errorDialog(error.error.message, error.statusText);
                            },
                        });
                }
            },
        });
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
    }
};
ApplicantListComponent = __decorate([
    Component({
        selector: 'app-applicant-list',
        templateUrl: './applicant-list.component.html',
        styleUrls: ['./applicant-list.component.scss'],
    })
], ApplicantListComponent);
export { ApplicantListComponent };
//# sourceMappingURL=applicant-list.component.js.map