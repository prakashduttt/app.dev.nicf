import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
import * as XLSX from 'xlsx';
import { TrainingAddUserComponent } from '../../training-add-user/training-add-user.component';
let TrainingViewdetailsComponent = class TrainingViewdetailsComponent {
    constructor(dialog, trainingService, route) {
        this.dialog = dialog;
        this.trainingService = trainingService;
        this.route = route;
        this.displayedColumns = [
            'User Name',
            'Designation',
            'Email',
            'Mobile No.',
            // 'DOB',
            // 'Qualification',
            'Role',
            'Current Office',
            'Department',
            'Ministry Name',
            // 'Pre Assesment',
            // 'Assement',
            // 'Submitted',
            // 'Created At',
            // 'Updated At',
        ];
        this.length = 0;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = PAGE_SIZE_OPTIONS;
        this.isDataTable = true;
        this.noDataFound = false;
        this.fileName = 'Training_Details';
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe((paramMap) => {
            this.paramValue = paramMap.get('id');
        });
        this.getTrainingDetails();
    }
    getTrainingDetails() {
        this.trainingService.trainingDeatils().subscribe({
            next: (result) => {
                result['trainingDetails'].forEach((element) => {
                    if (element._id == this.paramValue) {
                        this.dataSource = element['users'];
                        if (element['users'].length == 0) {
                            this.isDataTable = false;
                            this.noDataFound = true;
                        }
                    }
                    return;
                });
            },
        });
    }
    exportToExcel() {
        let element = document.getElementById('excel-table');
        const ws = XLSX.utils.table_to_sheet(element);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, this.fileName + new Date().getTime() + '.xlsx');
    }
    addUser() {
        const dialogRef = this.dialog.open(TrainingAddUserComponent, {
            width: '600px',
            data: {
                trainformId: this.paramValue,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.getTrainingDetails();
            }
        });
    }
};
__decorate([
    ViewChild(MatPaginator)
], TrainingViewdetailsComponent.prototype, "paginator", void 0);
TrainingViewdetailsComponent = __decorate([
    Component({
        selector: 'app-training-viewdetails',
        templateUrl: './training-viewdetails.component.html',
        styleUrls: ['./training-viewdetails.component.scss'],
    })
], TrainingViewdetailsComponent);
export { TrainingViewdetailsComponent };
//# sourceMappingURL=training-viewdetails.component.js.map