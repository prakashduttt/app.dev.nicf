import { __decorate, __param } from "tslib";
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
let ErrorDialogComponent = class ErrorDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.decision = new EventEmitter();
    }
    ngOnInit() {
        this.message = this.data.message;
    }
    onCancel() {
        this.dialogRef.close();
        this.decision.emit(false);
    }
};
__decorate([
    Output()
], ErrorDialogComponent.prototype, "decision", void 0);
ErrorDialogComponent = __decorate([
    Component({
        selector: 'app-error-dialog',
        standalone: true,
        imports: [CommonModule, MatButtonModule],
        templateUrl: './error-dialog.component.html',
        styleUrls: ['./error-dialog.component.scss'],
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], ErrorDialogComponent);
export { ErrorDialogComponent };
//# sourceMappingURL=error-dialog.component.js.map