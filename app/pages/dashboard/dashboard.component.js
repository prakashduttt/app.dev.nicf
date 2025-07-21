import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(coreService, dashboardService, dialog) {
        this.coreService = coreService;
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.viewBtn = true;
        this.removeBtn = false;
        this.isApplicants = false;
        this.isMyTrainings = false;
        this.isTrainings = false;
        this.isVideos = false;
        this.isPDF = false;
        this.cardItem = 3;
        this.buttonType = [
            {
                title: 'Start learning',
                link: '/trainings/details',
            },
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
                    this.isApplicants = true;
                    this.getMyTrainings(0, 3);
                    this.getVideos(0, 0);
                    this.getPDFs(0, 0);
                }
                else {
                    this.topCardCount();
                    this.isApplicants = false;
                }
                this.getTrainings(0, 6);
            },
        });
    }
    getTrainings(pageIndex, pageSize) {
        this.dashboardService.listTraining(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (result && result.data.length > 0) {
                    this.trainings = result.data;
                    this.isTrainings = true;
                }
                else {
                    this.isTrainings = false;
                }
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    getMyTrainings(pageIndex, pageSize) {
        this.dashboardService.listMyTraining(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (result && result.data.length > 0) {
                    this.myTrainings = result.data;
                    this.isMyTrainings = true;
                }
                else {
                    this.isMyTrainings = false;
                }
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    onActionClick() {
        if (this.viewBtn) {
            this.cardItem = 6;
        }
        else {
            this.cardItem = 3;
        }
        this.viewBtn = !this.viewBtn;
        this.removeBtn = !this.removeBtn;
    }
    topCardCount() {
        this.dashboardService.topCardCount().subscribe({
            next: (result) => {
                this.cardCount = result;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    getVideos(pageIndex, pageSize) {
        this.dashboardService.listVideos(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (result && result.data.length > 0) {
                    this.videos = result.data;
                    this.isVideos = true;
                }
                else {
                    this.isVideos = false;
                }
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    getPDFs(pageIndex, pageSize) {
        this.dashboardService.listPdfS(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (result && result.data.length > 0) {
                    this.pdfS = result.data;
                    this.isPDF = true;
                }
                else {
                    this.isPDF = false;
                }
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss'],
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map