import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PAGE_SIZE_BIG_CARD_OPTIONS, } from 'src/app/services/core.service';
let TotalMyTrainingsComponent = class TotalMyTrainingsComponent {
    constructor(dashboardService, coreService) {
        this.dashboardService = dashboardService;
        this.coreService = coreService;
        this.length = 500;
        this.pageSize = PAGE_SIZE_BIG_CARD_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = [8, 16, 24, 32, 40];
        this.showFirstLastButtons = false;
        this.buttonType = [
            {
                title: 'Start learning',
                link: '/trainings/details',
            },
        ];
        this.noDataFound = false;
        this.isDataTable = false;
    }
    ngOnInit() {
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
                if (user?.role === 'candidate') {
                    this.getMyTrainings(this.pageIndex, this.pageSize);
                }
            },
        });
    }
    getMyTrainings(pageIndex, pageSize) {
        this.dashboardService.listMyTraining(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (!result) {
                    this.noDataFound = true;
                    this.isDataTable = false;
                }
                this.myTrainings = result.data;
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
        this.getMyTrainings(this.pageIndex, this.pageSize);
    }
};
TotalMyTrainingsComponent = __decorate([
    Component({
        selector: 'app-total-my-trainings',
        templateUrl: './total-my-trainings.component.html',
        styleUrls: ['./total-my-trainings.component.scss'],
    })
], TotalMyTrainingsComponent);
export { TotalMyTrainingsComponent };
//# sourceMappingURL=total-my-trainings.component.js.map