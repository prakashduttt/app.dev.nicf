import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ApplicantRegisterComponent } from './applicant-register.component';
import { ApplicantRegisterService } from './applicant-register.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
describe('ApplicantRegisterComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ApplicantRegisterComponent],
            providers: [ApplicantRegisterService],
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                MatDialogModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                BrowserAnimationsModule,
                MatSnackBarModule,
                MatDatepickerModule,
                MatNativeDateModule,
            ],
        });
        fixture = TestBed.createComponent(ApplicantRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=applicant-register.component.spec.js.map