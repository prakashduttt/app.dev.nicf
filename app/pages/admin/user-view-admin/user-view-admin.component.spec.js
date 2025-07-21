import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UserViewAdminComponent } from './user-view-admin.component';
import { AdminService } from '../admin.service';
describe('UserViewAdminComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserViewAdminComponent],
            imports: [
                CommonModule,
                RouterModule.forRoot([]),
                MatCardModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatButtonModule,
                MatSelectModule,
                MatPaginatorModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                MatTableModule,
                MatDialogModule,
            ],
            providers: [AdminService],
        });
        fixture = TestBed.createComponent(UserViewAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-view-admin.component.spec.js.map