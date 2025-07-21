import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
const routes = [{ path: '', component: LoginComponent }];
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MatFormFieldModule,
            MatIconModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
            MatCheckboxModule,
        ],
        providers: [LoginService],
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map