import { TestBed } from '@angular/core/testing';
import { TotalPdfsComponent } from './total-pdfs.component';
import { DashboardService } from '../dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('TotalPdfsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TotalPdfsComponent],
            imports: [
                HttpClientTestingModule,
                HttpClientModule,
                MatCardModule,
                BrowserAnimationsModule,
                MatDialogModule,
                MatPaginatorModule,
            ],
            providers: [DashboardService],
        });
        fixture = TestBed.createComponent(TotalPdfsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-pdfs.component.spec.js.map