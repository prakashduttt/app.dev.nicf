import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthorizationInterceptor } from './authorization.interceptor';
describe('AuthorizationInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [AuthorizationInterceptor],
        imports: [HttpClientTestingModule],
    }));
    it('should be created', () => {
        const interceptor = TestBed.inject(AuthorizationInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=authorization.interceptor.spec.js.map