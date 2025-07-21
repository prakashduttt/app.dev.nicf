import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ForgotPasswordService } from './forgot-password.service';
describe('ForgotPasswordService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ForgotPasswordService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ForgotPasswordService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=forgot-password.service.spec.js.map