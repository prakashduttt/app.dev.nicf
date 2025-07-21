import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';
describe('LoaderService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoaderService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=loader.service.spec.js.map