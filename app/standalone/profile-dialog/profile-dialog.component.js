import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ProfileDialogComponent = class ProfileDialogComponent {
    constructor(dialogRef, data1) {
        this.dialogRef = dialogRef;
        this.data1 = data1;
    }
    ngOnInit() {
        this.data = this.data1;
    }
    onCancel() {
        this.dialogRef.close();
    }
};
ProfileDialogComponent = __decorate([
    Component({
        selector: 'app-profile-dialog',
        templateUrl: './profile-dialog.component.html',
        styleUrls: ['./profile-dialog.component.scss'],
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], ProfileDialogComponent);
export { ProfileDialogComponent };
//# sourceMappingURL=profile-dialog.component.js.map