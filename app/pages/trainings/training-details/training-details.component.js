import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PDFSRCURL } from 'src/app/services/core.service';
let TrainingDetailsComponent = class TrainingDetailsComponent {
    constructor(activatedRoute, trainingService, sanitizer, dialog) {
        this.activatedRoute = activatedRoute;
        this.trainingService = trainingService;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.allChecked = false;
        this.isStudyMaterial = false;
        this.pdfSrc = PDFSRCURL;
        this.displayedColumns = ['select', 'name', 'download'];
        this.selection = new SelectionModel(true, []);
    }
    ngOnInit() {
        this.trainingId = this.activatedRoute.snapshot.queryParams['trainingId'];
        if (this.trainingId) {
            this.getTrainingById(this.trainingId);
            this.lessonsPdfById(this.trainingId, true);
        }
    }
    goBack() {
        history.go(-1);
    }
    getRemainingDays(targetDateString) {
        const targetDate = new Date(targetDateString);
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return remainingDays;
    }
    getTrainingById(trainingId) {
        this.trainingService.trainingById(trainingId).subscribe({
            next: (result) => {
                this.training = result.data;
                console.log('training', this.training.formId);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    lessonsPdfById(trainingId, hasPdf) {
        this.trainingService.lessonsById(trainingId, hasPdf).subscribe({
            next: (result) => {
                if (result) {
                    this.lessons = result.data;
                    this.dataSource = new MatTableDataSource(result.data);
                    this.isStudyMaterial = true;
                }
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        if (numSelected === numRows) {
            this.allChecked = true;
        }
        else {
            this.allChecked = false;
        }
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row._id}`;
    }
    openVideoDialog(videoLink) {
        this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(videoLink);
        this.dialogRef = this.dialog.open(this.videoDialog, {
            width: '778px',
            height: '438px',
        });
    }
    closeDialog() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }
    onRowClick(row) {
        if (!row.isVideo) {
            window.location.href = this.pdfSrc + row.pdf;
        }
        else {
            this.openVideoDialog(row.video);
        }
    }
};
__decorate([
    Input()
], TrainingDetailsComponent.prototype, "video", void 0);
__decorate([
    ViewChild('videoDialog')
], TrainingDetailsComponent.prototype, "videoDialog", void 0);
TrainingDetailsComponent = __decorate([
    Component({
        selector: 'app-training-details',
        templateUrl: './training-details.component.html',
        styleUrls: ['./training-details.component.scss'],
    })
], TrainingDetailsComponent);
export { TrainingDetailsComponent };
//# sourceMappingURL=training-details.component.js.map