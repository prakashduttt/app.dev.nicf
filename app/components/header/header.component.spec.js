import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { CoreService } from 'src/app/services/core.service';
import { of } from 'rxjs/internal/observable/of';
import { MatTooltipModule } from '@angular/material/tooltip';
describe('HeaderComponent', () => {
    let component;
    let fixture;
    class MockCoreService {
        constructor() {
            this.user$ = of({ name: 'Test User', role: 'Test Role' });
        }
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [{ provide: CoreService, useClass: MockCoreService }],
            imports: [
                MatDialogModule,
                MatMenuModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatToolbarModule,
                MatTooltipModule,
            ],
        });
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header.component.spec.js.map