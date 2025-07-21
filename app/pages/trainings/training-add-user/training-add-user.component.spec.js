import { TestBed } from '@angular/core/testing';
import { TrainingAddUserComponent } from './training-add-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrainingService } from '../training.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
describe('TrainingAddUserComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TrainingAddUserComponent],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatIconModule,
                MatDialogModule,
            ],
            providers: [
                TrainingService,
                {
                    provide: MatDialogRef,
                    useValue: {},
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {},
                },
                { provide: MatSnackBar, useValue: { open: jasmine.createSpy('open') } },
            ],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TrainingAddUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-add-user.component.spec.js.map