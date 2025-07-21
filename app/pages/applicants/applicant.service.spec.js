import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicantService } from './applicant.service';
describe('ApplicantService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApplicantService],
        });
        service = TestBed.inject(ApplicantService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=applicant.service.spec.js.map