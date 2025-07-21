import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let TrainingAddUserComponent = class TrainingAddUserComponent {
    constructor(fb, trainingService, dialogRef, data, snackBar) {
        this.fb = fb;
        this.trainingService = trainingService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'top';
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.userForm = this.fb.group({
            name: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern(/^[a-zA-Z\s]+$/),
                ],
            ],
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
                ],
            ],
            designation: [null],
            currentOffice: [null],
            ministryName: [null],
            mobileNo: [null, [Validators.pattern(/^[6-9][0-9]{9}$/)]],
            department: [null],
        });
    }
    onSubmit() {
        if (this.userForm.invalid) {
            this.userForm.markAllAsTouched();
            return;
        }
        else {
            const payload = {
                trainingFormId: this.data.trainformId,
                users: [this.userForm.value],
            };
            this.trainingService.addUserTraining(payload).subscribe({
                next: (response) => {
                    if (response.status === 200) {
                        this.snackBar.open('User added successfully!', 'Close', {
                            duration: 3000,
                            horizontalPosition: this.horizontalPosition,
                            verticalPosition: this.verticalPosition,
                        });
                        this.dialogRef.close(true);
                    }
                },
                error: (error) => {
                    const apiErrorMessage = error.error.message || 'Failed to add user. Try again.';
                    this.snackBar.open(apiErrorMessage, 'Close', {
                        duration: 3000,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });
                    console.error('Failed to add user:', error);
                },
            });
        }
    }
};
TrainingAddUserComponent = __decorate([
    Component({
        selector: 'app-training-add-user',
        templateUrl: './training-add-user.component.html',
        styleUrls: ['./training-add-user.component.scss'],
    }),
    __param(3, Inject(MAT_DIALOG_DATA))
], TrainingAddUserComponent);
export { TrainingAddUserComponent };
//# sourceMappingURL=training-add-user.component.js.map