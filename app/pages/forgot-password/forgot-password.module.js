import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordService } from './forgot-password.service';
const routes = [{ path: '', component: ForgotPasswordComponent }];
let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = __decorate([
    NgModule({
        declarations: [ForgotPasswordComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MatFormFieldModule,
            MatIconModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
        ],
        providers: [ForgotPasswordService],
    })
], ForgotPasswordModule);
export { ForgotPasswordModule };
//# sourceMappingURL=forgot-password.module.js.map