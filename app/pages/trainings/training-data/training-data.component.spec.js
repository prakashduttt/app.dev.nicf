import { TestBed } from '@angular/core/testing';
import { TrainingDataComponent } from './training-data.component';
import { TrainingService } from '../training.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('TrainingDataComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TrainingDataComponent],
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                MatCardModule,
                MatFormFieldModule,
                FormsModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatOptionModule,
                MatTableModule,
                HttpClientModule,
                MatInputModule,
                MatSelectModule,
                BrowserAnimationsModule,
            ],
            providers: [TrainingService],
        });
        fixture = TestBed.createComponent(TrainingDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-data.component.spec.js.map