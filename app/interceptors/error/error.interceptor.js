import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    errorDialog(message, statusText) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '400px',
            data: {
                message,
            },
        });
        dialogRef.afterClosed();
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError((e) => {
            let message;
            let statusText;
            statusText = e.statusText.replace(/ /g, '_').toUpperCase();
            switch (e.status) {
                case 400:
                    message = e.error.message || 'You have send bad payload';
                    break;
                case 401:
                    message = e.error.message || 'Login first to access resources';
                    break;
                case 403:
                    message = e.error.message || 'Forbidden access resources';
                    break;
                case 404:
                    message = e.error.message || 'Page not found';
                    break;
                case 405:
                    message =
                        e.error.message ||
                            'Sorry report has been already submitted this month';
                    break;
                case 422:
                    message = e.error.message || 'Invalid body send';
                    break;
                case 500:
                    message = 'Server side error';
                    break;
                case 0:
                    if (navigator.onLine) {
                        message = 'Server is not running';
                        statusText = 'SERVER_NOT_RUNNING';
                        this.errorDialog(message, statusText);
                        this.router.navigateByUrl('/login');
                        sessionStorage.clear();
                    }
                    else {
                        statusText = 'OFFLINE';
                        message =
                            'No internet connection found. please check your network';
                        this.errorDialog(message, statusText);
                    }
                    break;
                default:
                    message = 'Unhandled status code received';
                    break;
            }
            return throwError(() => e);
        }));
    }
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
export const ERROR_INTERCEPTOR = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
//# sourceMappingURL=error.interceptor.js.map