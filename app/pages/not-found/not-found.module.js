import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './not-found.component';
const routes = [
    {
        path: '',
        component: NotFoundComponent,
    },
];
let NotFoundModule = class NotFoundModule {
};
NotFoundModule = __decorate([
    NgModule({
        declarations: [NotFoundComponent],
        imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
    })
], NotFoundModule);
export { NotFoundModule };
//# sourceMappingURL=not-found.module.js.map