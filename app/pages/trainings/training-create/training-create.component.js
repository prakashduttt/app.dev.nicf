import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/standalone/error-dialog/error-dialog.component';
import { CustomValidatorsYt } from 'src/app/services/core.service';
let TrainingCreateComponent = class TrainingCreateComponent {
    constructor(trainingService, dialog, snackBar, fb, router) {
        this.trainingService = trainingService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.fb = fb;
        this.router = router;
        this.isOnlineMode = true;
        this.isLinear = false;
        this.isPDFUpload = false;
        this.form = this.createForm();
        this.uploadForm = this.fb.group({
            pdfTitle: ['', Validators.required],
            file: [null, Validators.required],
        });
        this.videoForm = this.fb.group({
            videos: this.fb.array([]),
        });
        this.preAssessmentForm = this.fb.group({
            preQuestions: this.fb.array([]),
        });
        this.finalAssessmentForm = this.fb.group({
            finalQuestions: this.fb.array([]),
        });
    }
    ngOnInit() {
        this.updateValidators();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 9000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }
    errorDialog(message) {
        this.dialog.open(ErrorDialogComponent, {
            width: '500px',
            data: { message },
        });
    }
    createForm() {
        return new FormGroup({
            name: new FormControl('', [Validators.required]),
            competencyType: new FormControl('', [Validators.required]),
            startDate: new FormControl('', [Validators.required]),
            lastDate: new FormControl('', [Validators.required]),
            details: new FormControl('', [Validators.required]),
            trainingMode: new FormControl('online', [Validators.required]),
            webExStartDate: new FormControl(''),
            webExEndDate: new FormControl(''),
            webExStartDateTime: new FormControl(new Date().toISOString()),
            webExEndDateTime: new FormControl(new Date().toISOString()),
            state: new FormControl(''),
            district: new FormControl(''),
            place: new FormControl(''),
            pincode: new FormControl(''),
        });
    }
    updateValidators() {
        const { state, district, place, pincode, webExStartDate, webExEndDate, webExStartDateTime, webExEndDateTime, } = this.form.controls;
        if (this.isOnlineMode) {
            webExStartDate.setValidators([Validators.required]);
            webExEndDate.setValidators([Validators.required]);
            webExStartDateTime.setValidators([Validators.required]);
            webExEndDateTime.setValidators([Validators.required]);
            state.clearValidators();
            district.clearValidators();
            place.clearValidators();
            pincode.clearValidators();
            state.updateValueAndValidity();
            district.updateValueAndValidity();
            place.updateValueAndValidity();
            pincode.updateValueAndValidity();
        }
        else {
            state.setValidators([Validators.required]);
            district.setValidators([Validators.required]);
            place.setValidators([Validators.required]);
            pincode.setValidators([Validators.required]);
            webExStartDate.clearValidators();
            webExEndDate.clearValidators();
            webExStartDateTime.clearValidators();
            webExEndDateTime.clearValidators();
            webExStartDate.updateValueAndValidity();
            webExEndDate.updateValueAndValidity();
            webExStartDateTime.updateValueAndValidity();
            webExEndDateTime.updateValueAndValidity();
        }
        this.form.updateValueAndValidity();
    }
    nextStep() {
        this.stepper.next();
    }
    prevStep() {
        this.stepper.previous();
    }
    onCheckedOnline() {
        this.isOnlineMode = true;
        this.updateValidators();
    }
    onCheckedPhysical() {
        this.isOnlineMode = false;
        this.updateValidators();
    }
    isoDateConverter(value) {
        const date = new Date(value);
        const istOffset = 5.5 * 60;
        const istTimestamp = date.getTime() + istOffset * 60 * 1000;
        const istDate = new Date(istTimestamp);
        const istISOString = istDate.toISOString();
        return istISOString;
    }
    dateFormat(isoDateString, isoDateTime) {
        let date = new Date(this.isoDateConverter(new Date(isoDateString)));
        let getHours = new Date(this.isoDateConverter(new Date(isoDateTime))).getHours();
        let getMinutes = new Date(this.isoDateConverter(new Date(isoDateTime))).getMinutes();
        let getSeconds = new Date(this.isoDateConverter(new Date(isoDateTime))).getSeconds();
        // Set the time components
        date.setHours(getHours);
        date.setMinutes(getMinutes);
        date.setSeconds(getSeconds);
        // Format the date
        var formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        return formattedDate;
    }
    onCreateTraining() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = {
            name: this.form.get('name').value,
            competencyType: this.form.get('competencyType').value,
            startDate: new Date(this.form.get('startDate').value),
            lastDate: new Date(this.form.get('lastDate').value),
            details: this.form.get('details').value,
            trainingMode: this.form.get('trainingMode').value,
        };
        if (!this.isOnlineMode) {
            payload.address = {
                pincode: parseFloat(this.form.get('pincode').value),
                place: this.form.get('place').value,
                district: this.form.get('district').value,
                state: this.form.get('state').value,
            };
        }
        else {
            payload.webExStartDate = this.dateFormat(this.form.get('webExStartDate').value, this.form.get('webExStartDateTime').value);
            payload.webExEndDate = this.dateFormat(this.form.get('webExEndDate').value, this.form.get('webExEndDateTime').value);
        }
        this.trainingService.createTraining(payload).subscribe({
            next: (response) => {
                if (response.status === 201) {
                    this.openSnackBar('Training Created!', 'Close');
                    const responseData = response.body;
                    if (responseData && responseData.data && responseData.data._id) {
                        this.id = responseData.data._id;
                        this.addVideoField();
                        this.addPreQuestion();
                        this.addFinalQuestion();
                        this.nextStep();
                    }
                    else {
                        this.errorDialog('Training is lost, create new training.');
                    }
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
    selectFile() {
        const fileInput = document.getElementById('file');
        fileInput.click();
    }
    onFileSelected(event) {
        const inputElement = event.target;
        const file = inputElement.files?.[0];
        this.fileName = file?.name;
        if (file) {
            this.uploadForm.get('file').setValue(file);
            this.fileName = file?.name;
        }
    }
    onFileRemove() {
        this.fileName = '';
        this.uploadForm.get('file').setValue(null);
        const fileInput = document.getElementById('file');
        fileInput.value = '';
    }
    onPDFUpload() {
        if (this.uploadForm.invalid) {
            this.uploadForm.markAllAsTouched();
            return;
        }
        const formData = new FormData();
        formData.append('pdfTitle', this.uploadForm.get('pdfTitle').value);
        formData.append('file', this.uploadForm.get('file').value);
        this.trainingService.assessmentPDFUpload(formData, this.id).subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.isPDFUpload = false;
                    this.openSnackBar('PDF upload successfully !', 'Close');
                    this.uploadForm.reset();
                    this.fileName = '';
                    // this.nextStep();
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
    get videos() {
        return this.videoForm.get('videos');
    }
    addVideoField() {
        this.videos.push(this.createVideoItem());
    }
    createVideoItem() {
        return this.fb.group({
            content: ['', Validators.required],
            video: ['', [Validators.required, CustomValidatorsYt.youtubeUrl]],
            formId: this.id,
            isFree: false,
        });
    }
    removeVideoField(index) {
        this.videos.removeAt(index);
    }
    onVideoSubmit() {
        if (this.videoForm.invalid) {
            this.videoForm.markAllAsTouched();
            return;
        }
        this.trainingService
            .assessmentLessonsVideos(this.videoForm.value.videos)
            .subscribe({
            next: (response) => {
                if (response.status === 201) {
                    this.openSnackBar('Videos upload successfully!', 'Close');
                    this.nextStep();
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
    createPreQuestion() {
        return this.fb.group({
            title: ['', Validators.required],
            isOption: true,
            isPreAssessment: true,
            formId: this.id,
            options: this.fb.array([
                this.createPreOption(),
                this.createPreOption(),
                this.createPreOption(),
                this.createPreOption(),
            ]),
        });
    }
    createPreOption() {
        return this.fb.group({
            name: ['', Validators.required],
            isRight: [false, Validators.required],
            point: 10,
        });
    }
    get preQuestions() {
        return this.preAssessmentForm.get('preQuestions');
    }
    addPreQuestion() {
        this.preQuestions.push(this.createPreQuestion());
    }
    removePreQuestion(index) {
        this.preQuestions.removeAt(index);
    }
    addPreOption(question) {
        const options = question.get('options');
        options.push(this.createPreOption());
    }
    getPreOptions(question) {
        return question.get('options').controls;
    }
    onPreAssessmentSubmit() {
        if (this.preAssessmentForm.invalid) {
            this.preAssessmentForm.markAllAsTouched();
            return;
        }
        this.trainingService
            .assessmentQues(this.preAssessmentForm.value.preQuestions)
            .subscribe({
            next: (response) => {
                if (response.status === 201) {
                    this.openSnackBar('Pre-Assessment add successfully!', 'Close');
                    this.nextStep();
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
    createFinalQuestion() {
        return this.fb.group({
            title: ['', Validators.required],
            isOption: true,
            isPreAssessment: false,
            formId: this.id,
            options: this.fb.array([
                this.createPreOption(),
                this.createPreOption(),
                this.createPreOption(),
                this.createPreOption(),
            ]),
        });
    }
    createFinalOption() {
        return this.fb.group({
            name: ['', Validators.required],
            isRight: [false, Validators.required],
            point: 10,
        });
    }
    get finalQuestions() {
        return this.finalAssessmentForm.get('finalQuestions');
    }
    addFinalQuestion() {
        this.finalQuestions.push(this.createFinalQuestion());
    }
    removeFinalQuestion(index) {
        this.preQuestions.removeAt(index);
    }
    addFinalOption(question) {
        const options = question.get('options');
        options.push(this.createFinalOption());
    }
    getFinalOptions(question) {
        return question.get('options').controls;
    }
    onFinalAssessmentSubmit() {
        if (this.finalAssessmentForm.invalid) {
            this.finalAssessmentForm.markAllAsTouched();
            return;
        }
        this.trainingService
            .assessmentQues(this.finalAssessmentForm.value.finalQuestions)
            .subscribe({
            next: (response) => {
                if (response.status === 201) {
                    this.openSnackBar('Assessment add successfully!', 'Close');
                    this.router.navigate(['/']);
                }
            },
            error: (error) => {
                this.errorDialog(error.error.message);
            },
        });
    }
};
__decorate([
    ViewChild('stepper')
], TrainingCreateComponent.prototype, "stepper", void 0);
TrainingCreateComponent = __decorate([
    Component({
        selector: 'app-training-create',
        templateUrl: './training-create.component.html',
        styleUrls: ['./training-create.component.scss'],
    })
], TrainingCreateComponent);
export { TrainingCreateComponent };
//# sourceMappingURL=training-create.component.js.map