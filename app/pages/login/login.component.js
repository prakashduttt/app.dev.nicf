import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
class Login {
    constructor($) {
        this.email = $.email.trim().toLowerCase();
        this.password = $.password.trim();
    }
}
let LoginComponent = class LoginComponent {
    constructor(router, loginService, coreService, dialog) {
        this.router = router;
        this.loginService = loginService;
        this.coreService = coreService;
        this.dialog = dialog;
        this.hide = true;
        this.form = new FormGroup({
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
    onLogin() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = new Login(this.form.value);
        this.loginService.login(payload).subscribe({
            next: ({ data }) => {
                sessionStorage.setItem('accessToken', data.accessToken);
                sessionStorage.setItem('refreshToken', data.refreshToken);
                this.coreService.whoAmI().subscribe({
                    next: () => {
                        void this.router.navigateByUrl('/');
                    },
                });
                this.router.navigateByUrl('/');
            },
            error: (error) => {
                if (error) {
                    if (error.status === 0) {
                        return;
                    }
                    this.errorDialog('Please enter a correct email or password.');
                }
            },
        });
    }
    get password() {
        return this.form.controls.password;
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map