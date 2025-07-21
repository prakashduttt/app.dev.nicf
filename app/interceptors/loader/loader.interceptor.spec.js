import { TestBed } from '@angular/core/testing';
import { LoaderInterceptor } from './loader.interceptor';
describe('LoaderInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [LoaderInterceptor],
    }));
    it('should be created', () => {
        const interceptor = TestBed.inject(LoaderInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=loader.interceptor.spec.js.map