import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { ActionDialogComponent } from 'src/app/standalone/action-dialog/action-dialog.component';
let TotalTrainingComponent = class TotalTrainingComponent {
    constructor(dashboardService, dialog, activatedRoute, snackBar, coreService, loaderService) {
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.coreService = coreService;
        this.loaderService = loaderService;
        this.displayedColumns = [
            'id',
            'name',
            'trainingMode',
            'isActive',
            'startDate',
            'lastDate',
            'viewApplicants',
            'modify',
        ];
        this.length = 0;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = PAGE_SIZE_OPTIONS;
        this.isDataTable = false;
        this.noDataFound = false;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
        this.isActive = this.activatedRoute.snapshot.queryParams['isActive'];
        this.title = this.activatedRoute.snapshot.queryParams['title'];
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
                this.totalTrainings(this.pageIndex, this.pageSize, this.isActive, this.user._id);
            },
        });
    }
    errorDialog(message) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '400px',
            data: {
                message,
            },
        });
        dialogRef.afterClosed();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 9000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    alertDialog(trainingId, isActive) {
        const dialogRef = this.dialog.open(ActionDialogComponent, {
            width: '310px',
            data: {
                title: 'Modify Status and Date',
                actionName: 'Do you want to change Status?',
                buttonName: 'Apply',
            },
        });
        dialogRef.componentInstance.decision.subscribe({
            next: (flag) => {
                if (!flag)
                    return;
                let payload = {
                    startDate: this.loaderService.start.value,
                    lastDate: this.loaderService.last.value,
                    isActive: this.loaderService.Status.value,
                };
                this.dashboardService.trainingActive(payload, trainingId).subscribe({
                    next: () => {
                        this.openSnackBar('Training Details changed Successfully', 'Closed');
                        this.totalTrainings(0, 0, this.isActive, this.user._id);
                    },
                    error: (error) => {
                        this.errorDialog(error.error.message);
                    },
                });
            },
        });
    }
    totalTrainings(pageIndex, pageSize, isActive, userId) {
        this.dashboardService
            .listTotalTraining(pageIndex, pageSize, isActive, userId)
            .subscribe({
            next: (result) => {
                if (!result) {
                    this.noDataFound = true;
                }
                this.dataSource = new MatTableDataSource(result.data);
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
                this.errorDialog(error.error.message);
            },
        });
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.dashboardService
            .listTotalTraining(event.pageIndex, event.pageSize, this.isActive, this.user._id)
            .subscribe({
            next: ({ data }) => {
                this.dataSource = new MatTableDataSource(data);
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], TotalTrainingComponent.prototype, "paginator", void 0);
TotalTrainingComponent = __decorate([
    Component({
        selector: 'app-total-training',
        templateUrl: './total-training.component.html',
        styleUrls: ['./total-training.component.scss'],
    })
], TotalTrainingComponent);
export { TotalTrainingComponent };
//# sourceMappingURL=total-training.component.js.map