import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PAGE_SIZE_OPTIONS } from 'src/app/services/core.service';
import * as FileSaver from 'file-saver';
let TrainingDataComponent = class TrainingDataComponent {
    constructor(trainingService) {
        this.trainingService = trainingService;
        this.displayedColumns = [
            'Training Name',
            'Training Mode',
            'Competency Type',
            'Start Date',
            'End Date',
            'View',
        ];
        this.length = 0;
        this.pageSize = PAGE_SIZE_OPTIONS[0];
        this.pageIndex = 0;
        this.pageSizeOptions = PAGE_SIZE_OPTIONS;
        this.datasource1 = new MatTableDataSource();
        this.isDataTable = true;
        this.noDataFound = false;
        this.training_Mode = ['Online', 'Physical'];
        this.competency_type = ['Functional', 'Domain', 'Behavioural'];
        this.minFromDate = new Date(1900, 0, 1);
        this.maxFromDate = new Date();
        this.minToDate = new Date(1900, 0, 1);
        this.maxToDate = new Date();
        this.selectedTraining = '';
        this.selectedMode = '';
        this.selectedCompetency = '';
    }
    ngOnInit() {
        this.getTrainingDetails();
    }
    getTrainingDetails() {
        this.trainingService.trainingDeatils().subscribe({
            next: (result) => {
                if (!result) {
                    this.isDataTable = false;
                    this.noDataFound = true;
                }
                this.datasource1.data = result['trainingDetails'];
                this.res = result['trainingDetails'];
                this.traning_Deatil = [
                    ...new Set(this.datasource1.data.map((item) => item.name)),
                ];
                console.log(this.traning_Deatil);
            },
        });
    }
    filterData() {
        console.log(this.selectedTraining);
        this.datasource1.data = this.res;
        if (this.selectedCompetency) {
            this.datasource1.data = this.datasource1.data.filter((item) => item.competencyType === this.selectedCompetency.toLowerCase());
        }
        if (this.selectedMode) {
            this.datasource1.data = this.datasource1.data.filter((item) => item.trainingMode === this.selectedMode.toLowerCase());
        }
        if (this.selectedTraining) {
            this.datasource1.data = this.datasource1.data.filter((item) => item.name.toLowerCase() === this.selectedTraining.toLowerCase());
        }
        if (this.fromDate) {
            console.log(this.fromDate);
            this.datasource1.data = this.datasource1.data.filter((item) => {
                const startDate = new Date(item.startDate);
                const fromDate = new Date(this.fromDate);
                return startDate.getTime() >= fromDate.getTime();
            });
        }
        if (this.toDate) {
            this.datasource1.data = this.datasource1.data.filter((item) => {
                const endDate = new Date(item.lastDate);
                const toDate = new Date(this.toDate);
                return endDate.getTime() <= toDate.getTime();
            });
            this.datasource1.data.filter((item) => item.lastDate === this.toDate);
        }
        console.log(this.datasource1.data);
    }
    fromChange(event) {
        this.fromDate = String(event.value);
    }
    toChange(event) {
        this.toDate = String(event.value);
    }
    exportToExcel() {
        this.trainingService.exportToExcel().subscribe((res) => {
            this.saveAsBlob(res);
            console.log(res);
        });
    }
    saveAsBlob(data) {
        const file = new File([data], 'report.xlsx', {
            type: 'application/vnd.ms-excel',
        });
        FileSaver.saveAs(file);
    }
    resetData() {
        this.datasource1.data = this.res;
        this.selectedCompetency = '';
        this.selectedMode = '';
        this.selectedTraining = '';
        this.fromDate = '';
        this.toDate = '';
    }
};
__decorate([
    ViewChild(MatPaginator)
], TrainingDataComponent.prototype, "paginator", void 0);
TrainingDataComponent = __decorate([
    Component({
        selector: 'app-training-data',
        templateUrl: './training-data.component.html',
        styleUrls: ['./training-data.component.scss'],
    })
], TrainingDataComponent);
export { TrainingDataComponent };
//# sourceMappingURL=training-data.component.js.map