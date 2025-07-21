import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordService } from './forgot-password.service';
import { ForgotPasswordComponent } from './forgot-password.component';
describe('ForgotPasswordComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ForgotPasswordComponent],
            imports: [
                HttpClientTestingModule,
                RouterModule.forRoot([]),
                ReactiveFormsModule,
                MatSnackBarModule,
                MatDialogModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
            ],
            providers: [ForgotPasswordService],
        });
        fixture = TestBed.createComponent(ForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forgot-password.component.spec.js.map