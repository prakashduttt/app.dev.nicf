import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ChangePasswordService } from './change-password.service';
describe('ChangePasswordService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChangePasswordService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ChangePasswordService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=change-password.service.spec.js.map