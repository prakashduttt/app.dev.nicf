import { TestBed } from '@angular/core/testing';
import { SearchTrainingsComponent } from './search-trainings.component';
import { DashboardService } from '../dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('SearchTrainingsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchTrainingsComponent],
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                BrowserAnimationsModule,
            ],
            providers: [DashboardService],
        });
        fixture = TestBed.createComponent(SearchTrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-trainings.component.spec.js.map