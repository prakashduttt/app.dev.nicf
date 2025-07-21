import { TestBed } from '@angular/core/testing';
import { TrainingViewdetailsComponent } from './training-viewdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TrainingService } from '../../training.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
describe('TrainingViewdetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TrainingViewdetailsComponent],
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                MatCardModule,
                RouterModule,
                RouterTestingModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                FormsModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatOptionModule,
                MatTableModule,
                HttpClientModule,
                MatButtonModule,
                MatDialogModule,
            ],
            providers: [TrainingService],
        });
        fixture = TestBed.createComponent(TrainingViewdetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-viewdetails.component.spec.js.map