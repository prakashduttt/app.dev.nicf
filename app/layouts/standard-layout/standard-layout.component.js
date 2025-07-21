import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StandardLayoutComponent = class StandardLayoutComponent {
    toggle() {
        this.opened = !this.opened;
    }
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.opened = true;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 767px)'])
            .subscribe((result) => {
            if (result.matches) {
                this.opened = false;
            }
        });
    }
    hideSidebar() {
        this.breakpointObserver
            .observe(['(max-width: 767px)'])
            .subscribe((result) => {
            if (result.matches) {
                this.opened = false;
            }
        });
    }
    toggleMobile() {
        this.breakpointObserver
            .observe(['(max-width: 767px)'])
            .subscribe((result) => {
            if (result.matches) {
                this.opened = !this.opened;
            }
        });
    }
};
StandardLayoutComponent = __decorate([
    Component({
        selector: 'app-standard-layout',
        templateUrl: './standard-layout.component.html',
        styleUrls: ['./standard-layout.component.scss'],
    })
], StandardLayoutComponent);
export { StandardLayoutComponent };
//# sourceMappingURL=standard-layout.component.js.map