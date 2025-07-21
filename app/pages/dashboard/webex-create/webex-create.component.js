import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
let WebexCreateComponent = class WebexCreateComponent {
    constructor(dashboardService, dialog, snackBar, coreService) {
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.coreService = coreService;
        this.displayedColumns = [
            'id',
            'name',
            'isActive',
            'webExStartDate',
            'webExEndDate',
            'viewLink',
            'createLink',
        ];
        this.length = 0;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = PAGE_SIZE_OPTIONS;
        this.isDataTable = false;
        this.noDataFound = false;
        this.webExLink = `${environment.api}webex/authorize?formId=`;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
                this.totalWebExTrainings(this.pageIndex, this.pageSize, this.user._id);
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
    totalWebExTrainings(pageIndex, pageSize, userId) {
        this.dashboardService
            .listWebExTrainings(pageIndex, pageSize, userId)
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
            .listWebExTrainings(event.pageIndex, event.pageSize, this.user._id)
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
], WebexCreateComponent.prototype, "paginator", void 0);
WebexCreateComponent = __decorate([
    Component({
        selector: 'app-webex-create',
        templateUrl: './webex-create.component.html',
        styleUrls: ['./webex-create.component.scss'],
    })
], WebexCreateComponent);
export { WebexCreateComponent };
//# sourceMappingURL=webex-create.component.js.map