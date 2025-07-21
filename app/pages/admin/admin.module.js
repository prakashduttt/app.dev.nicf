import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserRegisterAdminComponent } from './user-register-admin/user-register-admin.component';
import { UserViewAdminComponent } from './user-view-admin/user-view-admin.component';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
const routes = [
    { path: '', component: AdminComponent },
    {
        path: 'users',
        children: [
            {
                path: '',
                component: UserViewAdminComponent,
            },
            {
                path: 'register',
                component: UserRegisterAdminComponent,
            },
        ],
    },
];
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    NgModule({
        declarations: [
            UserRegisterAdminComponent,
            UserViewAdminComponent,
            AdminComponent,
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            MatCardModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatChipsModule,
            MatDatepickerModule,
            MatNativeDateModule,
        ],
        providers: [AdminService],
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map