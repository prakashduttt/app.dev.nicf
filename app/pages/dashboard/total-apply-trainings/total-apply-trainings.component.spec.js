import { TestBed } from '@angular/core/testing';
import { TotalApplyTrainingsComponent } from './total-apply-trainings.component';
import { DashboardService } from '../dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('TotalApplyTrainingsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TotalApplyTrainingsComponent],
            imports: [
                HttpClientTestingModule,
                HttpClientModule,
                MatCardModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                MatDialogModule,
                MatPaginatorModule,
            ],
            providers: [DashboardService],
        });
        fixture = TestBed.createComponent(TotalApplyTrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-apply-trainings.component.spec.js.map