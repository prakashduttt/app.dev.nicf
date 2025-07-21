import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorInterceptor } from './error.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
describe('ErrorInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [MatSnackBarModule, MatDialogModule],
        providers: [ErrorInterceptor],
    }));
    it('should be created', () => {
        const interceptor = TestBed.inject(ErrorInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=error.interceptor.spec.js.map