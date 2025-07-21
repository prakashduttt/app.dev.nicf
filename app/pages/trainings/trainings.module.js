import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TrainingViewComponent } from './training-view/training-view.component';
import { TrainingCreateComponent } from './training-create/training-create.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingService } from './training.service';
import { TrainingAssessmentComponent } from './training-assessment/training-assessment.component';
import { TrainingDataComponent } from './training-data/training-data.component';
import { TrainingViewdetailsComponent } from './training-data/training-viewdetails/training-viewdetails.component';
import { TrainingAddUserComponent } from './training-add-user/training-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
const routes = [
    { path: '', component: TrainingViewComponent },
    { path: 'create', component: TrainingCreateComponent },
    { path: 'details', component: TrainingDetailsComponent },
    { path: 'assessment', component: TrainingAssessmentComponent },
    { path: 'trainingdata', component: TrainingDataComponent },
    { path: 'trainingviewdata', component: TrainingViewdetailsComponent },
];
let TrainingsModule = class TrainingsModule {
};
TrainingsModule = __decorate([
    NgModule({
        declarations: [
            TrainingCreateComponent,
            TrainingViewComponent,
            TrainingDetailsComponent,
            TrainingAssessmentComponent,
            TrainingDataComponent,
            TrainingViewdetailsComponent,
            TrainingAddUserComponent,
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MatFormFieldModule,
            MatIconModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
            FormsModule,
            MatStepperModule,
            MatCardModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatRadioModule,
            MatDatepickerModule,
            MatProgressBarModule,
            MatExpansionModule,
            MatCheckboxModule,
            MatTableModule,
            TimepickerModule,
            MatDialogModule,
        ],
        providers: [TrainingService],
    })
], TrainingsModule);
export { TrainingsModule };
//# sourceMappingURL=trainings.module.js.map