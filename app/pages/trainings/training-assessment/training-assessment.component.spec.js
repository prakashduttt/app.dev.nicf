import { TestBed } from '@angular/core/testing';
import { TrainingAssessmentComponent } from './training-assessment.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { TrainingService } from '../training.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
describe('TrainingAssessmentComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TrainingAssessmentComponent],
            imports: [
                CommonModule,
                RouterModule.forRoot([]),
                MatCardModule,
                MatButtonModule,
                MatSnackBarModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                MatDialogModule,
                MatNativeDateModule,
                MatRadioModule,
                MatIconModule,
                ReactiveFormsModule,
            ],
            providers: [TrainingService],
        });
        fixture = TestBed.createComponent(TrainingAssessmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-assessment.component.spec.js.map