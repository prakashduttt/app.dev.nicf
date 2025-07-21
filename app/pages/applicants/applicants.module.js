import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { ApplicantService } from './applicant.service';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
const routes = [
    { path: '', component: ApplicantViewComponent },
    { path: 'list', component: ApplicantListComponent },
    { path: 'profile', component: ApplicantProfileComponent },
];
let ApplicantsModule = class ApplicantsModule {
};
ApplicantsModule = __decorate([
    NgModule({
        declarations: [
            ApplicantViewComponent,
            ApplicantListComponent,
            ApplicantProfileComponent,
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            MatCardModule,
            MatButtonModule,
            MatCheckboxModule,
            MatTableModule,
            MatIconModule,
            MatPaginatorModule,
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            MatSnackBarModule,
            FormsModule,
            MatStepperModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatChipsModule,
        ],
        providers: [ApplicantService],
    })
], ApplicantsModule);
export { ApplicantsModule };
//# sourceMappingURL=applicants.module.js.map