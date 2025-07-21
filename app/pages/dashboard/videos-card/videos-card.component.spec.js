import { TestBed } from '@angular/core/testing';
import { VideosCardComponent } from './videos-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
describe('VideosCardComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [VideosCardComponent],
            imports: [MatDialogModule, MatIconModule],
        });
        fixture = TestBed.createComponent(VideosCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=videos-card.component.spec.js.map