import { TestBed } from '@angular/core/testing';
import { TotalVideosComponent } from './total-videos.component';
import { DashboardService } from '../dashboard.service';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('TotalVideosComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TotalVideosComponent],
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
        fixture = TestBed.createComponent(TotalVideosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-videos.component.spec.js.map