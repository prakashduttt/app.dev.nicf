import { __decorate, __param } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
let RejectApplicantsDialogComponent = class RejectApplicantsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = new FormGroup({
            message: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
        });
        this.decision = new EventEmitter();
        this.formValue = new EventEmitter();
    }
    ngOnInit() {
        this.title = this.data.title;
        this.actionName = this.data.actionName;
        this.buttonName = this.data.buttonName;
    }
    onCancel() {
        this.dialogRef.close();
        this.decision.emit(false);
    }
    onReject() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.dialogRef.close();
        this.decision.emit(true);
        this.formValue.emit(this.form.value);
    }
};
__decorate([
    Output()
], RejectApplicantsDialogComponent.prototype, "decision", void 0);
__decorate([
    Output()
], RejectApplicantsDialogComponent.prototype, "formValue", void 0);
RejectApplicantsDialogComponent = __decorate([
    Component({
        selector: 'app-reject-applicants-dialog',
        standalone: true,
        imports: [
            MatButtonModule,
            CommonModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatInputModule,
        ],
        templateUrl: './reject-applicants-dialog.component.html',
        styleUrls: ['./reject-applicants-dialog.component.scss'],
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], RejectApplicantsDialogComponent);
export { RejectApplicantsDialogComponent };
//# sourceMappingURL=reject-applicants-dialog.component.js.map