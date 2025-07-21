import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isLoading;
    }
};
LoaderComponent = __decorate([
    Component({
        selector: 'app-loader',
        templateUrl: './loader.component.html',
        styleUrls: ['./loader.component.scss'],
    })
], LoaderComponent);
export { LoaderComponent };
//# sourceMappingURL=loader.component.js.map