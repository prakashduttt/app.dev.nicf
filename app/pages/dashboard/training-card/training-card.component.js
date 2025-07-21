import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TrainingCardComponent = class TrainingCardComponent {
    constructor() { }
    getRemainingDays(targetDateString) {
        const targetDate = new Date(targetDateString);
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return remainingDays;
    }
};
__decorate([
    Input()
], TrainingCardComponent.prototype, "training", void 0);
__decorate([
    Input()
], TrainingCardComponent.prototype, "user", void 0);
__decorate([
    Input()
], TrainingCardComponent.prototype, "buttonType", void 0);
TrainingCardComponent = __decorate([
    Component({
        selector: 'app-training-card',
        templateUrl: './training-card.component.html',
        styleUrls: ['./training-card.component.scss'],
    })
], TrainingCardComponent);
export { TrainingCardComponent };
//# sourceMappingURL=training-card.component.js.map