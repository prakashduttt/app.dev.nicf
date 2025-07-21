import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
let AuthorizationInterceptor = class AuthorizationInterceptor {
    constructor(coreService, router) {
        this.coreService = coreService;
        this.router = router;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                'X-Frame-Options': 'deny, sameorigin, allow-from <https://app.nicf.netoyed.com.au//>',
            },
        });
        return next.handle(request).pipe(catchError((e) => {
            if (e.status === 401 && sessionStorage.getItem('accessToken')) {
                return this.coreService.onRefreshToken().pipe(switchMap(() => {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                        },
                    });
                    return next.handle(request);
                }), catchError((refreshTokenError) => {
                    return throwError(() => {
                        if (refreshTokenError) {
                            sessionStorage.clear();
                            this.router.navigateByUrl('/login');
                        }
                    });
                }));
            }
            else {
                return throwError(() => e);
            }
        }));
    }
};
AuthorizationInterceptor = __decorate([
    Injectable()
], AuthorizationInterceptor);
export { AuthorizationInterceptor };
export const AUTHORIZATION_INTERCEPTOR = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true,
};
//# sourceMappingURL=authorization.interceptor.js.map