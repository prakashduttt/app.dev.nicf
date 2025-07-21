import { TestBed } from '@angular/core/testing';
import { UnauthorizedGuard } from './unauthorized.guard';
describe('UnauthorizedGuard', () => {
    let guard;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(UnauthorizedGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
//# sourceMappingURL=unauthorized.guard.spec.js.map