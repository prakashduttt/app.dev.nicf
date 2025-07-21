import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PDFSRCURL } from 'src/app/services/core.service';
let PdfCardComponent = class PdfCardComponent {
    constructor() {
        this.showPdf = false;
        this.pdfSrc = PDFSRCURL;
    }
};
__decorate([
    Input()
], PdfCardComponent.prototype, "pdfCard", void 0);
PdfCardComponent = __decorate([
    Component({
        selector: 'app-pdf-card',
        templateUrl: './pdf-card.component.html',
        styleUrls: ['./pdf-card.component.scss'],
    })
], PdfCardComponent);
export { PdfCardComponent };
//# sourceMappingURL=pdf-card.component.js.map