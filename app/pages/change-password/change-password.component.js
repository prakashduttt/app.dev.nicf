import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { confirmPassword } from 'src/app/validators/confirm-password.validator';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { PASSWORD_PATTERN } from 'src/app/services/core.service';
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(changeService, snackBar, dialog, router) {
        this.changeService = changeService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.form = new FormGroup({
            currentPassword: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(100),
                    Validators.pattern(PASSWORD_PATTERN),
                ],
                nonNullable: false,
            }),
            nextPassword: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(100),
                    Validators.pattern(PASSWORD_PATTERN),
                ],
                nonNullable: false,
            }),
            confirmPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(100),
                Validators.pattern(PASSWORD_PATTERN),
                confirmPassword,
            ]),
        }, { validators: this.validateAreEqual });
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
        this.successBox = false;
        this.remainingTime = 5;
        this.currentPasswordVisible = false;
        this.currentNewPasswordVisible = false;
        this.currentConNewPasswordVisible = false;
        this.isUpperCaseValid = false;
        this.isLowerCaseValid = false;
        this.isSpecialCharValid = false;
        this.isNumericValid = false;
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
    validateAreEqual(c) {
        return c.value.nextPassword === c.value.confirmPassword
            ? null
            : { notSame: true };
    }
    onChangePassword() {
        if (this.form.invalid ||
            this.form.controls.currentPassword.value === null ||
            this.form.controls.nextPassword.value === null) {
            this.form.markAllAsTouched();
            return;
        }
        if (this.form.controls.currentPassword.value ===
            this.form.controls.nextPassword.value) {
            this.errorDialog('Old password and new password should not be same', '');
            return;
        }
        this.changeService
            .changePassword(this.form.controls.currentPassword.value, this.form.controls.nextPassword.value)
            .subscribe({
            next: () => {
                this.form.reset();
                this.openSnackBar('Password updated successfully', 'Closed');
                this.router.navigateByUrl('/login');
                sessionStorage.clear();
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
    get currentPassword() {
        return this.form.controls.currentPassword;
    }
    get nextPassword() {
        return this.form.controls.nextPassword;
    }
    get confirmPassword() {
        return this.form.controls.confirmPassword;
    }
    togglePasswordVisibility(field) {
        if (field === 'currentPassword') {
            this.currentPasswordVisible = !this.currentPasswordVisible;
        }
    }
    toggleNewPasswordVisibility(field) {
        if (field === 'nextPassword') {
            this.currentNewPasswordVisible = !this.currentNewPasswordVisible;
        }
    }
    toggleConNewPasswordVisibility(field) {
        if (field === 'confirmPassword') {
            this.currentConNewPasswordVisible = !this.currentConNewPasswordVisible;
        }
    }
    containsUppercase(control) {
        const value = control.target.value;
        // Check for uppercase letters
        const uppercaseRegex = /[A-Z]/;
        this.isUpperCaseValid = uppercaseRegex.test(value);
        // Check for lowercase letters
        const lowercaseRegex = /[a-z]/;
        this.isLowerCaseValid = lowercaseRegex.test(value);
        // Check for special characters
        const specialCharRegex = /[!@#$%^&*]/;
        this.isSpecialCharValid = specialCharRegex.test(value);
        // Check for numbers
        const numericRegex = /[0-9]/;
        this.isNumericValid = numericRegex.test(value);
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.scss'],
    })
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map