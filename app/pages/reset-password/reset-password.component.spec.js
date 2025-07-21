import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ResetPasswordService } from './reset-password.service';
import { ResetPasswordComponent } from './reset-password.component';
describe('ResetPasswordComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ResetPasswordComponent],
            imports: [
                RouterModule.forRoot([]),
                BrowserAnimationsModule,
                HttpClientTestingModule,
                ReactiveFormsModule,
                MatSnackBarModule,
                MatDialogModule,
                MatFormFieldModule,
                MatInputModule,
            ],
            providers: [ResetPasswordService],
        });
        fixture = TestBed.createComponent(ResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reset-password.component.spec.js.map