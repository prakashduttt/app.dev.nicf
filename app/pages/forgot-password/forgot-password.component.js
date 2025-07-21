import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, forgotPasswordService, dialog) {
        this.router = router;
        this.forgotPasswordService = forgotPasswordService;
        this.dialog = dialog;
        this.hide = true;
        this.form = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
                nonNullable: true,
            }),
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
    onForgotPassword() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.forgotPasswordService
            .forgotPassword(this.form.controls.email.value)
            .subscribe({
            next: (response) => {
                if (response.status === 204) {
                    this.errorDialog('Please check your e-mail and click on the provided link.');
                    this.router.navigateByUrl('/');
                }
            },
            error: (error) => {
                if (error) {
                    this.errorDialog('Please enter a valid email.');
                }
            },
        });
    }
};
ForgotPasswordComponent = __decorate([
    Component({
        selector: 'app-forgot-password',
        templateUrl: './forgot-password.component.html',
        styleUrls: ['./forgot-password.component.scss'],
    })
], ForgotPasswordComponent);
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map