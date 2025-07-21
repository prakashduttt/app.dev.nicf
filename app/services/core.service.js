import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
let CoreService = class CoreService {
    constructor(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.userStr = sessionStorage.getItem('user');
        this.user$ = new BehaviorSubject(this.userStr ? JSON.parse(this.userStr) : null);
    }
    onRefreshToken() {
        this.loaderService.show();
        return this.http
            .put(environment.api + 'accounts/refresh-token', {
            refreshToken: sessionStorage.getItem('refreshToken'),
        })
            .pipe(tap((data) => {
            sessionStorage.setItem('accessToken', data.accessToken);
            this.loaderService.hide();
        }));
    }
    whoAmI() {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('accessToken')}`);
        return this.http
            .get(environment.api + 'common/whoami', {
            headers,
        })
            .pipe(map((user) => {
            this.user$.next(user.message);
            sessionStorage.setItem('user', JSON.stringify(user.message));
            return user.message;
        }));
    }
};
CoreService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CoreService);
export { CoreService };
export class CustomValidatorsYt {
    static youtubeUrl(control) {
        const value = control.value;
        if (!value) {
            return null; // If no value, don't perform validation
        }
        // Regular expression for matching YouTube URLs
        const youtubePattern = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/;
        if (!youtubePattern.test(value)) {
            return { invalidYoutubeUrl: true }; // Return an error if the URL doesn't match the pattern
        }
        return null; // Return null if validation passes
    }
}
export const PASSWORD_PATTERN = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[&%?$*@#]).*$/;
export const PAGE_SIZE_OPTIONS = [5, 25, 75, 150, 250, 500, 1000];
export const PAGE_SIZE_CARD_OPTIONS = [8, 64, 150, 250, 500, 1000];
export const PAGE_SIZE_BIG_CARD_OPTIONS = [6, 24, 150, 250, 500, 1000];
export const PDFSRCURL = 'https://nicf-dev.s3.ap-south-1.amazonaws.com/';
//# sourceMappingURL=core.service.js.map