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
import { ApplicantProfileComponent } from './applicant-profile.component';
import { ApplicantService } from '../applicant.service';
describe('ApplicantProfileComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ApplicantProfileComponent],
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
            ],
            providers: [ApplicantService],
        });
        fixture = TestBed.createComponent(ApplicantProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=applicant-profile.component.spec.js.map