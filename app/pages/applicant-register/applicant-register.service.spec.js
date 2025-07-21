import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicantRegisterService } from './applicant-register.service';
describe('ApplicantRegisterService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApplicantRegisterService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ApplicantRegisterService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=applicant-register.service.spec.js.map