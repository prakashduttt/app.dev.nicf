import { TestBed } from '@angular/core/testing';
import { TrainingViewComponent } from './training-view.component';
describe('TrainingViewComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TrainingViewComponent],
        });
        fixture = TestBed.createComponent(TrainingViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-view.component.spec.js.map