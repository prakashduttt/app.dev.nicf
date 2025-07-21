import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IsAdminGuard } from './is-admin.guard';
describe('IsAdminGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        guard = TestBed.inject(IsAdminGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=is-admin.guard.spec.js.map