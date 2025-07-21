import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PAGE_SIZE_BIG_CARD_OPTIONS, } from 'src/app/services/core.service';
let TotalApplyTrainingsComponent = class TotalApplyTrainingsComponent {
    constructor(dashboardService, coreService) {
        this.dashboardService = dashboardService;
        this.coreService = coreService;
        this.noDataFound = false;
        this.isDataTable = false;
        this.length = 500;
        this.pageSize = PAGE_SIZE_BIG_CARD_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = [8, 16, 24, 32, 40];
        this.showFirstLastButtons = false;
        this.buttonType = [
            {
                title: 'Apply',
                link: '/applicants/profile',
            },
        ];
    }
    ngOnInit() {
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
                if (user?.role === 'candidate') {
                    this.getTrainings(this.pageIndex, this.pageSize);
                }
            },
        });
    }
    getTrainings(pageIndex, pageSize) {
        this.dashboardService.listTraining(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (!result) {
                    this.noDataFound = true;
                    this.isDataTable = false;
                }
                this.trainings = result.data;
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
        this.getTrainings(this.pageIndex, this.pageSize);
    }
};
TotalApplyTrainingsComponent = __decorate([
    Component({
        selector: 'app-total-apply-trainings',
        templateUrl: './total-apply-trainings.component.html',
        styleUrls: ['./total-apply-trainings.component.scss'],
    })
], TotalApplyTrainingsComponent);
export { TotalApplyTrainingsComponent };
//# sourceMappingURL=total-apply-trainings.component.js.map