import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
let UserViewAdminComponent = class UserViewAdminComponent {
    constructor(adminService, dialog) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.displayedColumns = [
            'id',
            'name',
            'email',
            'role',
            'isActive',
            'createdAt',
            'updatedAt',
        ];
        this.length = 0;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = PAGE_SIZE_OPTIONS;
        this.isDataTable = false;
        this.noDataFound = false;
    }
    ngOnInit() {
        this.getUsers(this.pageIndex, this.pageSize);
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
    getUsers(pageIndex, pageSize) {
        this.adminService.listUser(pageIndex, pageSize).subscribe({
            next: (result) => {
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
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.adminService.listUser(event.pageIndex, event.pageSize).subscribe({
            next: ({ data }) => {
                this.dataSource = new MatTableDataSource(data);
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], UserViewAdminComponent.prototype, "paginator", void 0);
UserViewAdminComponent = __decorate([
    Component({
        selector: 'app-user-view-admin',
        templateUrl: './user-view-admin.component.html',
        styleUrls: ['./user-view-admin.component.scss'],
    })
], UserViewAdminComponent);
export { UserViewAdminComponent };
//# sourceMappingURL=user-view-admin.component.js.map