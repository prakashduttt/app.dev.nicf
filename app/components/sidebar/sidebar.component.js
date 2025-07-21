import { __decorate } from "tslib";
import { Component, EventEmitter, Output, } from '@angular/core';
let SidebarComponent = class SidebarComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.menuToggled = new EventEmitter();
        this.activeIndex = 0;
        this.panelOpenState = true;
        this.disableAnimation = true;
        this.isAdmin = false;
        this.isNodal = false;
    }
    ngOnInit() {
        this.coreService.user$.subscribe((user) => {
            this.user = user;
            this.isAdmin = this.user?.role === 'admin';
            this.isNodal = this.user?.role === 'nodal';
        });
    }
    ngAfterViewInit() {
        setTimeout(() => (this.disableAnimation = false));
    }
};
__decorate([
    Output()
], SidebarComponent.prototype, "menuToggled", void 0);
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss'],
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map