import { TestBed } from '@angular/core/testing';
import { PdfCardComponent } from './pdf-card.component';
import { SizeConversionPipe } from 'src/app/pipes/size-conversion/size-conversion.pipe';
describe('PdfCardComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PdfCardComponent, SizeConversionPipe],
            imports: [],
        });
        fixture = TestBed.createComponent(PdfCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pdf-card.component.spec.js.map