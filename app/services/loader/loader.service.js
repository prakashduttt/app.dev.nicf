import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new Subject();
        this.start = new BehaviorSubject(new Date());
        this.last = new BehaviorSubject(new Date());
        this.Status = new BehaviorSubject(true);
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        setTimeout(() => {
            this.isLoading.next(false);
        }, 300);
    }
};
LoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LoaderService);
export { LoaderService };
//# sourceMappingURL=loader.service.js.map