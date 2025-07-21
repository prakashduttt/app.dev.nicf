import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ApplicantRegisterComponent } from './applicant-register.component';
import { ApplicantRegisterService } from './applicant-register.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
const routes = [{ path: '', component: ApplicantRegisterComponent }];
let ApplicantRegisterModule = class ApplicantRegisterModule {
};
ApplicantRegisterModule = __decorate([
    NgModule({
        declarations: [ApplicantRegisterComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MatFormFieldModule,
            MatIconModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
            MatDatepickerModule,
        ],
        providers: [ApplicantRegisterService],
    })
], ApplicantRegisterModule);
export { ApplicantRegisterModule };
//# sourceMappingURL=applicant-register.module.js.map