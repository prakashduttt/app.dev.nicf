import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let SearchTrainingsComponent = class SearchTrainingsComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.isSearch = false;
        this.unfilteredDataToSearch = [];
        this.filteredDataToSearch = [];
        this.beComponentForm = new FormGroup({
            slct_cntrl: new FormControl(''),
        });
    }
    ngOnInit() {
        this.dashboardService.searchTrainings().subscribe({
            next: (result) => {
                if (result) {
                    this.isSearch = true;
                    result.forEach((element) => {
                        this.unfilteredDataToSearch.push(element);
                    });
                    this.filteredDataToSearch = this.unfilteredDataToSearch.map((w) => {
                        return {
                            text: w.name,
                            value: w._id,
                        };
                    });
                }
            },
            error: () => { },
        });
    }
    lookup(e) {
        this.filteredDataToSearch = this.unfilteredDataToSearch
            .filter((i) => i.name.toString().toLowerCase().indexOf(e.target.value) > -1)
            .map((w) => {
            return {
                text: w.name,
                value: w._id,
            };
        });
    }
    clean(t) {
        t.value = '';
        this.lookup(t.value);
    }
};
SearchTrainingsComponent = __decorate([
    Component({
        selector: 'app-search-trainings',
        templateUrl: './search-trainings.component.html',
        styleUrls: ['./search-trainings.component.scss'],
    })
], SearchTrainingsComponent);
export { SearchTrainingsComponent };
//# sourceMappingURL=search-trainings.component.js.map