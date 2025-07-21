import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResetPasswordService } from './reset-password.service';
describe('ResetPasswordService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ResetPasswordService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ResetPasswordService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=reset-password.service.spec.js.map