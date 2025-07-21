import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PAGE_SIZE_CARD_OPTIONS } from 'src/app/services/core.service';
let TotalPdfsComponent = class TotalPdfsComponent {
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
        this.getPDFs(this.pageIndex, this.pageSize);
    }
    getPDFs(pageIndex, pageSize) {
        this.dashboardService.listPdfS(pageIndex, pageSize).subscribe({
            next: (result) => {
                if (!result) {
                    this.noDataFound = true;
                    this.isDataTable = false;
                }
                this.length = result.pagination.total;
                this.isDataTable = true;
                this.noDataFound = false;
                this.PDFs = result.data;
                this.length = result.pagination.total;
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
        this.getPDFs(this.pageIndex, this.pageSize);
    }
};
TotalPdfsComponent = __decorate([
    Component({
        selector: 'app-total-pdfs',
        templateUrl: './total-pdfs.component.html',
        styleUrls: ['./total-pdfs.component.scss'],
    })
], TotalPdfsComponent);
export { TotalPdfsComponent };
//# sourceMappingURL=total-pdfs.component.js.map