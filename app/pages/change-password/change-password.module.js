import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordService } from './change-password.service';
const routes = [
    {
        path: '',
        component: ChangePasswordComponent,
    },
];
let ChangePasswordModule = class ChangePasswordModule {
};
ChangePasswordModule = __decorate([
    NgModule({
        declarations: [ChangePasswordComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MatFormFieldModule,
            MatIconModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule,
        ],
        providers: [ChangePasswordService],
    })
], ChangePasswordModule);
export { ChangePasswordModule };
//# sourceMappingURL=change-password.module.js.map