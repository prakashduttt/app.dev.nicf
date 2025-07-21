import { __decorate } from "tslib";
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
import { ActionDialogComponent } from 'src/app/standalone/action-dialog/action-dialog.component';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { RejectApplicantsDialogComponent } from 'src/app/standalone/reject-applicants-dialog/reject-applicants-dialog.component';
let ApplicantViewComponent = class ApplicantViewComponent {
    constructor(applicantService, dialog, activatedRoute, snackBar) {
        this.applicantService = applicantService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'select',
            'name',
            'viewDetails',
            'status',
            'Certificate',
        ];
        this.length = 0;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = PAGE_SIZE_OPTIONS;
        this.isDataTable = false;
        this.noDataFound = false;
        this.selection = new SelectionModel(true, []);
        this.rows = [];
        this.bulkApplicantPayload = {
            formId: '',
            userId: [],
            status: '',
        };
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
        this.isAcceptReject = false;
    }
    ngOnInit() {
        this.trainingId = this.activatedRoute.snapshot.queryParams['trainingId'];
        this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
    }
    goBack() {
        history.go(-1);
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
    getApplicants(pageIndex, pageSize, trainingId) {
        this.applicantService
            .viewApplicants(pageIndex, pageSize, trainingId)
            .subscribe({
            next: (result) => {
                if (!result) {
                    this.noDataFound = true;
                }
                this.dataSource = new MatTableDataSource(result.data[0].users);
                this.applicants = result.data;
                if (result.data.length == 0) {
                    this.isDataTable = false;
                    this.noDataFound = true;
                }
                else {
                    this.dataSource.paginator = this.paginator;
                    this.length = result.pagination.total;
                    this.isDataTable = true;
                    this.dataSource.paginator.firstPage();
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.applicantService
            .viewApplicants(event.pageIndex, event.pageSize, this.trainingId)
            .subscribe({
            next: ({ data }) => {
                this.dataSource = new MatTableDataSource(data[0].users);
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === 0 ? false : numSelected === numRows;
    }
    masterToggle() {
        this.isAcceptReject = !this.isAcceptReject;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((element) => {
                this.selection.select(element.candidateId);
            });
    }
    rowToggle(element) {
        this.selection.toggle(element.candidateId);
        if (this.selection.selected.length <= 0) {
            this.isAcceptReject = false;
        }
        else {
            this.isAcceptReject = true;
        }
    }
    onClose() {
        this.isAcceptReject = false;
        this.selection.clear();
    }
    onAccept() {
        this.bulkApplicantPayload.userId = [];
        this.bulkApplicantPayload.formId = this.trainingId;
        this.bulkApplicantPayload.status = 'approved';
        this.selection.selected.forEach((userId) => this.bulkApplicantPayload.userId.push(userId.toString()));
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
                        this.selection.clear();
                        this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
                        this.isAcceptReject = false;
                    },
                    error: (error) => {
                        this.errorDialog(error.error.message, error.statusText);
                    },
                });
            },
        });
    }
    onReject() {
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
                    this.selection.selected.forEach((userId) => this.bulkApplicantPayload.userId.push(userId.toString()));
                    this.applicantService
                        .applicantsAccept(this.bulkApplicantPayload)
                        .subscribe({
                        next: () => {
                            this.openSnackBar('Applicants Rejected', 'Closed');
                            this.selection.clear();
                            this.getApplicants(this.pageIndex, this.pageSize, this.trainingId);
                            this.isAcceptReject = false;
                        },
                        error: (error) => {
                            this.errorDialog(error.error.message, error.statusText);
                        },
                    });
                }
            },
        });
    }
    generateCertificate(candidateId, trainingId) {
        this.applicantService
            .generateCertificate(candidateId, trainingId)
            .subscribe((res) => {
            this.openSnackBar('Genretaed Succesfully', 'Closed');
        }, (error) => {
            this.errorDialog('Certificate is Not Generated Suceesfully', 'Error');
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], ApplicantViewComponent.prototype, "paginator", void 0);
ApplicantViewComponent = __decorate([
    Component({
        selector: 'app-applicant-view',
        templateUrl: './applicant-view.component.html',
        styleUrls: ['./applicant-view.component.scss'],
    })
], ApplicantViewComponent);
export { ApplicantViewComponent };
//# sourceMappingURL=applicant-view.component.js.map