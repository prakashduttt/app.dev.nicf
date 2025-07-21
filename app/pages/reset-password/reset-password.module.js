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
import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordService } from './reset-password.service';
const routes = [{ path: '', component: ResetPasswordComponent }];
let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = __decorate([
    NgModule({
        declarations: [ResetPasswordComponent],
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
        providers: [ResetPasswordService],
    })
], ResetPasswordModule);
export { ResetPasswordModule };
//# sourceMappingURL=reset-password.module.js.map