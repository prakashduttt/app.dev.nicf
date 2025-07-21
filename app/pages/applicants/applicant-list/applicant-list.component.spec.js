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
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantService } from '../applicant.service';
describe('ApplicantListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ApplicantListComponent],
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
                MatPaginatorModule,
            ],
            providers: [ApplicantService],
        });
        fixture = TestBed.createComponent(ApplicantListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=applicant-list.component.spec.js.map