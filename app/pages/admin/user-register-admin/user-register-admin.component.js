import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
let UserRegisterAdminComponent = class UserRegisterAdminComponent {
    constructor(adminService, dialog, authService, snackBar, router) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.form = new FormGroup({
            name: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3)],
            }),
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
            }),
            role: new FormControl('', {
                validators: [Validators.required],
            }),
        });
        this.horizontalPosition = 'end';
        this.verticalPosition = 'bottom';
        this.roles = [
            { viewValue: 'Admin', value: 'admin' },
            { viewValue: 'Trainer', value: 'nodal' },
        ];
        this.user = this.authService.user$.value;
    }
    goBack() {
        history.go(-1);
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
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    addUser() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = this.form.value;
        this.adminService.addUser(payload).subscribe({
            next: () => {
                this.openSnackBar('User Added successfully', 'Closed');
                setTimeout(() => {
                    this.router.navigate(['/admin/users']);
                }, 1000);
            },
            error: (error) => {
                this.errorDialog(error.error.message, error.statusText);
            },
        });
    }
};
UserRegisterAdminComponent = __decorate([
    Component({
        selector: 'app-user-register-admin',
        templateUrl: './user-register-admin.component.html',
        styleUrls: ['./user-register-admin.component.scss'],
    })
], UserRegisterAdminComponent);
export { UserRegisterAdminComponent };
//# sourceMappingURL=user-register-admin.component.js.map