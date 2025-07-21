import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { ActionDialogComponent } from 'src/app/standalone/action-dialog/action-dialog.component';
import { ProfileDialogComponent } from 'src/app/standalone/profile-dialog/profile-dialog.component';
let HeaderComponent = class HeaderComponent {
    constructor(router, dialog, coreService) {
        this.router = router;
        this.dialog = dialog;
        this.coreService = coreService;
        this.menuToggled = new EventEmitter();
        this.user = {};
    }
    ngOnInit() {
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
            },
        });
    }
    alertDialog() {
        const dialogRef = this.dialog.open(ActionDialogComponent, {
            width: '260px',
            data: {
                title: 'Logout',
                actionName: 'Do you want to Logout?',
                buttonName: 'Logout',
            },
        });
        dialogRef.componentInstance.decision.subscribe({
            next: (flag) => {
                if (!flag)
                    return;
                sessionStorage.clear();
                sessionStorage.clear();
                this.router.navigate(['/login']);
            },
        });
    }
    profileDialog() {
        const dialogRef = this.dialog.open(ProfileDialogComponent, {
            width: '400px',
            data: this.user,
        });
        /*     dialogRef.componentInstance.decision.subscribe({
          next: (flag: boolean) => {
            if (!flag) return;
            sessionStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/login']);
          },
        }); */
    }
};
__decorate([
    Output()
], HeaderComponent.prototype, "menuToggled", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map