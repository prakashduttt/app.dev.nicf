import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SearchResultComponent = class SearchResultComponent {
    constructor(activatedRoute, dashboardService, dialog, coreService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.coreService = coreService;
        this.isApplicants = false;
        this.hasApplied = false;
        this.statusTraining = '';
    }
    ngOnInit() {
        this.trainingId = this.activatedRoute.snapshot.queryParams['trainingId'];
        if (this.trainingId) {
            this.getTrainingById(this.trainingId);
        }
        this.coreService.user$.subscribe({
            next: (user) => {
                this.user = user;
                if (user?.role === 'candidate') {
                    this.isApplicants = true;
                }
                else {
                    this.isApplicants = false;
                }
            },
        });
    }
    getRemainingDays(targetDateString) {
        const targetDate = new Date(targetDateString);
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return remainingDays;
    }
    getTrainingById(trainingId) {
        this.dashboardService.searchTrainingById(trainingId).subscribe({
            next: (result) => {
                this.training = result.data;
                this.hasApplied = result.hasApplied;
                this.statusTraining = result.status;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
};
SearchResultComponent = __decorate([
    Component({
        selector: 'app-search-result',
        templateUrl: './search-result.component.html',
        styleUrls: ['./search-result.component.scss'],
    })
], SearchResultComponent);
export { SearchResultComponent };
//# sourceMappingURL=search-result.component.js.map