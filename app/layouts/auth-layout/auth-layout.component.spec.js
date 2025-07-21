import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
describe('AuthLayoutComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthLayoutComponent],
            imports: [RouterModule],
        });
        fixture = TestBed.createComponent(AuthLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auth-layout.component.spec.js.map