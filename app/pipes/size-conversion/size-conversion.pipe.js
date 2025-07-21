import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SizeConversionPipe = class SizeConversionPipe {
    transform(bytes) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
};
SizeConversionPipe = __decorate([
    Pipe({
        name: 'sizeConversion',
    })
], SizeConversionPipe);
export { SizeConversionPipe };
//# sourceMappingURL=size-conversion.pipe.js.map