import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AUTHORIZATION_INTERCEPTOR } from './interceptors/authorization/authorization.interceptor';
import { LOADER_INTERCEPTOR } from './interceptors/loader/loader.interceptor';
import { ERROR_INTERCEPTOR } from './interceptors/error/error.interceptor';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ActionDialogComponent } from './standalone/action-dialog/action-dialog.component';
import { DashboardService } from './pages/dashboard/dashboard.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfileDialogComponent } from './standalone/profile-dialog/profile-dialog.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AuthLayoutComponent,
            StandardLayoutComponent,
            FooterComponent,
            HeaderComponent,
            SidebarComponent,
            LoaderComponent,
            ActionDialogComponent,
            ProfileDialogComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            RouterModule,
            HttpClientModule,
            ReactiveFormsModule,
            MatSidenavModule,
            FormsModule,
            MatSnackBarModule,
            MatProgressSpinnerModule,
            MatListModule,
            MatMenuModule,
            MatToolbarModule,
            MatButtonModule,
            MatDialogModule,
            MatExpansionModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatIconModule,
            MatSnackBarModule,
            MatInputModule,
            MatButtonModule,
            FormsModule,
            MatStepperModule,
            MatCardModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatRadioModule,
            MatDatepickerModule,
            MatProgressBarModule,
            MatExpansionModule,
            MatCheckboxModule,
            MatTableModule,
            TimepickerModule,
            FormsModule,
            MatTooltipModule,
        ],
        providers: [
            AUTHORIZATION_INTERCEPTOR,
            LOADER_INTERCEPTOR,
            ERROR_INTERCEPTOR,
            DashboardService,
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map