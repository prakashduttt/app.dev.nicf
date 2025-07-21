import { TestBed } from '@angular/core/testing';
import { ProfileDialogComponent } from './profile-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
describe('ProfileDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileDialogComponent],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ],
            imports: [MatDialogModule],
        });
        fixture = TestBed.createComponent(ProfileDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-dialog.component.spec.js.map