import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordService } from './change-password.service';
describe('ChangePasswordComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChangePasswordComponent],
            imports: [
                RouterModule.forRoot([]),
                HttpClientTestingModule,
                ReactiveFormsModule,
                MatSnackBarModule,
                MatDialogModule,
            ],
            providers: [ChangePasswordService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
        fixture = TestBed.createComponent(ChangePasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=change-password.component.spec.js.map