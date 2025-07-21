import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthorizedGuard } from './guards/authorized/authorized.guard';
import { UnauthorizedGuard } from './guards/unauthorized/unauthorized.guard';
import { IsAdminGuard } from './guards/is-admin/is-admin.guard';
const routes = [
    {
        path: '',
        component: StandardLayoutComponent,
        canActivate: [AuthorizedGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then((d) => d.DashboardModule),
            },
            {
                path: 'applicants',
                loadChildren: () => import('./pages/applicants/applicants.module').then((a) => a.ApplicantsModule),
            },
            {
                path: 'trainings',
                loadChildren: () => import('./pages/trainings/trainings.module').then((t) => t.TrainingsModule),
            },
            {
                path: 'change-password',
                loadChildren: () => import('./pages/change-password/change-password.module').then((c) => c.ChangePasswordModule),
            },
            {
                path: 'admin',
                canLoad: [IsAdminGuard],
                canActivate: [IsAdminGuard],
                loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
            },
        ],
    },
    {
        path: '',
        component: AuthLayoutComponent,
        canActivate: [UnauthorizedGuard],
        children: [
            {
                path: 'login',
                loadChildren: () => import('./pages/login/login.module').then((l) => l.LoginModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () => import('./pages/forgot-password/forgot-password.module').then((f) => f.ForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () => import('./pages/reset-password/reset-password.module').then((r) => r.ResetPasswordModule),
            },
            {
                path: 'applicant-register',
                loadChildren: () => import('./pages/applicant-register/applicant-register.module').then((a) => a.ApplicantRegisterModule),
            },
        ],
    },
    {
        path: 'not-found',
        loadChildren: () => import('./pages/not-found/not-found.module').then((n) => n.NotFoundModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'not-found',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map