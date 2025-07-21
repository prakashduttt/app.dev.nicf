import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PAGE_SIZE_CARD_OPTIONS } from 'src/app/services/core.service';
let TotalVideosComponent = class TotalVideosComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.length = 500;
        this.pageSize = PAGE_SIZE_CARD_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = [8, 16, 24, 32, 40];
        this.showFirstLastButtons = false;
        this.noDataFound = false;
        this.isDataTable = false;
    }
    ngOnInit() {
        this.getVideos(this.pageIndex, this.pageSize);
    }
    getVideos(pageIndex, pageSize) {
        this.dashboardService.listVideos(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (!result) {
                    this.noDataFound = true;
                    this.isDataTable = false;
                }
                this.videos = result.data;
                this.length = result.pagination.total;
                this.isDataTable = true;
                this.noDataFound = false;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.getVideos(this.pageIndex, this.pageSize);
    }
};
TotalVideosComponent = __decorate([
    Component({
        selector: 'app-total-videos',
        templateUrl: './total-videos.component.html',
        styleUrls: ['./total-videos.component.scss'],
    })
], TotalVideosComponent);
export { TotalVideosComponent };
//# sourceMappingURL=total-videos.component.js.map