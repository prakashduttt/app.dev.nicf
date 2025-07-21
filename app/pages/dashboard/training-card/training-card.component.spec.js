import { TestBed } from '@angular/core/testing';
import { TrainingCardComponent } from './training-card.component';
describe('TrainingCardComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TrainingCardComponent],
        });
        fixture = TestBed.createComponent(TrainingCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=training-card.component.spec.js.map