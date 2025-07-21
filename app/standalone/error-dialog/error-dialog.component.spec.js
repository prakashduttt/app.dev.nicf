import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from './error-dialog.component';
describe('ErrorDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ],
            imports: [
                MatDialogModule,
                MatSnackBarModule,
                HttpClientTestingModule,
                MatButtonModule,
            ],
        });
        fixture = TestBed.createComponent(ErrorDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=error-dialog.component.spec.js.map