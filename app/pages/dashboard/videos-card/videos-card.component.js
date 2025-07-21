import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
let VideosCardComponent = class VideosCardComponent {
    constructor(sanitizer, dialog) {
        this.sanitizer = sanitizer;
        this.dialog = dialog;
    }
    openVideoDialog(videoLink) {
        this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(videoLink);
        this.dialogRef = this.dialog.open(this.videoDialog, {
            width: '778px',
            height: '438px',
        });
    }
    closeDialog() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }
};
__decorate([
    Input()
], VideosCardComponent.prototype, "video", void 0);
__decorate([
    ViewChild('videoDialog')
], VideosCardComponent.prototype, "videoDialog", void 0);
VideosCardComponent = __decorate([
    Component({
        selector: 'app-videos-card',
        templateUrl: './videos-card.component.html',
        styleUrls: ['./videos-card.component.scss'],
    })
], VideosCardComponent);
export { VideosCardComponent };
//# sourceMappingURL=videos-card.component.js.map