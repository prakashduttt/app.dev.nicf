import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
class Register {
    constructor($) {
        this.name = $.name;
        this.email = $.email.trim().toLowerCase();
        this.password = $.password.trim();
        this.dateOfBirth = $.dateOfBirth;
        this.department = $.department;
        this.currentOffice = $.currentOffice;
    }
}
let ApplicantRegisterComponent = class ApplicantRegisterComponent {
    constructor(router, applicantRegisterService, dialog, snackBar) {
        this.router = router;
        this.applicantRegisterService = applicantRegisterService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.hide = true;
        this.minFromDate = new Date(1900, 0, 1);
        this.maxFromDate = new Date();
        this.form = new FormGroup({
            name: new FormControl('', {
                validators: [Validators.required],
                nonNullable: true,
            }),
            dateOfBirth: new FormControl('', {
                validators: [Validators.required],
            }),
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
                nonNullable: true,
            }),
            password: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(250),
                ],
                nonNullable: true,
            }),
            department: new FormControl('', {
                validators: Validators.required,
            }),
            currentOffice: new FormControl('', {
                validators: Validators.required,
            }),
        });
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 9000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    errorDialog(message) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '500px',
            data: {
                message,
            },
        });
        dialogRef.afterClosed();
    }
    onRegister() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = new Register(this.form.value);
        this.applicantRegisterService.applicantRegister(payload).subscribe({
            next: () => {
                this.openSnackBar('Congratulations! Your account has been successfully created. Please verify your email address to complete the login process.', 'Closed');
                this.router.navigateByUrl('/');
            },
            error: (error) => {
                if (error) {
                    this.errorDialog('Please enter a correct email or password.');
                }
            },
        });
    }
    get password() {
        return this.form.controls.password;
    }
};
ApplicantRegisterComponent = __decorate([
    Component({
        selector: 'app-applicant-register',
        templateUrl: './applicant-register.component.html',
        styleUrls: ['./applicant-register.component.scss'],
    })
], ApplicantRegisterComponent);
export { ApplicantRegisterComponent };
//# sourceMappingURL=applicant-register.component.js.map