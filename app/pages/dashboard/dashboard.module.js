import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard.component';
import { TrainingCardComponent } from './training-card/training-card.component';
import { DashboardService } from './dashboard.service';
import { TotalTrainingComponent } from './total-training/total-training.component';
import { VideosCardComponent } from './videos-card/videos-card.component';
import { PdfCardComponent } from './pdf-card/pdf-card.component';
import { SizeConversionPipe } from 'src/app/pipes/size-conversion/size-conversion.pipe';
import { TotalVideosComponent } from './total-videos/total-videos.component';
import { TotalPdfsComponent } from './total-pdfs/total-pdfs.component';
import { TotalMyTrainingsComponent } from './total-my-trainings/total-my-trainings.component';
import { TotalApplyTrainingsComponent } from './total-apply-trainings/total-apply-trainings.component';
import { WebexCreateComponent } from './webex-create/webex-create.component';
import { SearchTrainingsComponent } from './search-trainings/search-trainings.component';
import { MatSelectModule } from '@angular/material/select';
import { SearchResultComponent } from './search-result/search-result.component';
const routes = [
    { path: '', component: DashboardComponent },
    { path: 'total-training', component: TotalTrainingComponent },
    { path: 'total-videos', component: TotalVideosComponent },
    { path: 'total-pdfs', component: TotalPdfsComponent },
    { path: 'total-my-training', component: TotalMyTrainingsComponent },
    { path: 'total-apply-training', component: TotalApplyTrainingsComponent },
    { path: 'webex-create', component: WebexCreateComponent },
    { path: 'search-result', component: SearchResultComponent },
];
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        declarations: [
            DashboardComponent,
            TrainingCardComponent,
            TotalTrainingComponent,
            VideosCardComponent,
            PdfCardComponent,
            SizeConversionPipe,
            TotalVideosComponent,
            TotalPdfsComponent,
            TotalMyTrainingsComponent,
            TotalApplyTrainingsComponent,
            WebexCreateComponent,
            SearchTrainingsComponent,
            SearchResultComponent,
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatChipsModule,
            //BrowserModule,
            FormsModule,
            MatSelectModule,
            //BrowserAnimationsModule,
        ],
        providers: [DashboardService],
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map