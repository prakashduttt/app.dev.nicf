import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from './dashboard.service';
describe('DashboardService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DashboardService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(DashboardService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=dashboard.service.spec.js.map