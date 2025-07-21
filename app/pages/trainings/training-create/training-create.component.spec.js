import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TrainingCreateComponent } from './training-create.component';
import { TrainingService } from '../training.service';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
describe('TrainingCreateComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TrainingCreateComponent],
            imports: [
                CommonModule,
                RouterModule.forRoot([]),
                MatCardModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule,
                MatSnackBarModule,
                MatSelectModule,
                MatSlideToggleModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                MatDialogModule,
                MatStepperModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatRadioModule,
                MatIconModule,
                MatProgressBarModule,
                ReactiveFormsModule,
                TimepickerModule,
            ],
            providers: [TrainingService],
        });
        fixture = TestBed.createComponent(TrainingCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-create.component.spec.js.map