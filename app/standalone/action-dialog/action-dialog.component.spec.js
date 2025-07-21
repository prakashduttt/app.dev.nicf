import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActionDialogComponent } from './action-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { DialogModule } from '@angular/cdk/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ActionDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ActionDialogComponent],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ],
            imports: [
                MatDialogModule,
                MatSnackBarModule,
                HttpClientTestingModule,
                MatButtonModule,
                MatRadioModule,
                DialogModule,
                MatFormFieldModule,
                MatDatepickerModule,
                MatNativeDateModule,
                ReactiveFormsModule,
                MatCardModule,
                FormsModule,
                MatInputModule,
                BrowserAnimationsModule,
            ],
        });
        fixture = TestBed.createComponent(ActionDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=action-dialog.component.spec.js.map