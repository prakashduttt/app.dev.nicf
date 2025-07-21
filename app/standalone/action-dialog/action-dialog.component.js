import { __decorate, __param } from "tslib";
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ActionDialogComponent = class ActionDialogComponent {
    constructor(dialogRef, data, dashboardService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dashboardService = dashboardService;
        this.decision = new EventEmitter();
        this.minFromDate = new Date(1900, 0, 1);
        this.maxFromDate = new Date();
        this.minToDate = new Date(1900, 0, 1);
        this.maxToDate = new Date();
        this.selectedStatus = 'Active';
        this.showActive = false;
    }
    ngOnInit() {
        this.title = this.data.title;
        this.actionName = this.data.actionName;
        this.buttonName = this.data.buttonName;
        if (this.title === 'Modify Status and Date') {
            this.showActive = true;
        }
        else {
            this.showActive = false;
        }
    }
    onCancel() {
        this.dialogRef.close();
        this.decision.emit(false);
    }
    onDelete() {
        this.dialogRef.close();
        this.dashboardService.start.next(this.fromDate);
        this.dashboardService.last.next(this.toDate);
        if (this.selectedStatus === 'InActive') {
            this.dashboardService.Status.next(false);
        }
        else {
            this.dashboardService.Status.next(true);
        }
        this.decision.emit(true);
    }
    fromChange(event) {
        this.fromDate = event.value;
        console.log(this.selectedStatus);
    }
    toChange(event) {
        this.toDate = event.value;
    }
    onStatusChange(event) {
        this.selectedStatus = event.value;
    }
};
__decorate([
    Output()
], ActionDialogComponent.prototype, "decision", void 0);
ActionDialogComponent = __decorate([
    Component({
        selector: 'app-action-dialog',
        templateUrl: './action-dialog.component.html',
        styleUrls: ['./action-dialog.component.scss'],
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], ActionDialogComponent);
export { ActionDialogComponent };
//# sourceMappingURL=action-dialog.component.js.map