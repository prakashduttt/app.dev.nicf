import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { PASSWORD_PATTERN } from 'src/app/services/core.service';
import { confirmPassword } from 'src/app/validators/confirm-password.validator';
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(resetService, snackBar, activatedRoute, router, dialog) {
        this.resetService = resetService;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
        this.form = new FormGroup({
            password: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(250),
                    Validators.pattern(PASSWORD_PATTERN),
                ],
                nonNullable: false,
            }),
            confirmPassword: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(250),
                    Validators.pattern(PASSWORD_PATTERN),
                    confirmPassword,
                ],
                nonNullable: false,
            }),
        }, { validators: this.validateAreEqual });
        this.sessionToken = null;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
        this.sessionToken =
            this.activatedRoute.snapshot.queryParamMap.get('sessionToken');
    }
    ngOnInit() {
        if (!this.sessionToken) {
            void this.router.navigateByUrl('/forgot-password');
            this.openSnackBar('Session token is not available', 'Closed');
        }
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
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 9000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    validateAreEqual(c) {
        return c.value.password === c.value.confirmPassword
            ? null
            : { notSame: true };
    }
    onResetPassword() {
        if (this.form.invalid ||
            this.form.controls.password.value === null ||
            this.sessionToken === null) {
            this.form.markAllAsTouched();
            return;
        }
        this.resetService
            .resetPassword(this.form.controls.password.value, this.sessionToken)
            .subscribe({
            next: () => {
                this.openSnackBar('Password updated successfully', 'Closed');
                void this.router.navigateByUrl('/login');
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    onPasswordChange() {
        this.form.get('confirmPassword')?.reset();
    }
    get password() {
        return this.form.controls.password;
    }
    get confirmPassword() {
        return this.form.controls.confirmPassword;
    }
};
ResetPasswordComponent = __decorate([
    Component({
        selector: 'app-reset-password',
        templateUrl: './reset-password.component.html',
        styleUrls: ['./reset-password.component.scss'],
    })
], ResetPasswordComponent);
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map