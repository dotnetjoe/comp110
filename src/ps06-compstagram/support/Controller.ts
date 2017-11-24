import { Model } from "./Model";
import { View } from "./View";
import { Filter } from "./Filter";

export class Controller {

    model: Model;
    view: View;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
        this.initEventHandlers();
    }

    private initEventHandlers(): void {
        this.view.filterSelect.addObserver(this.addFilter.bind(this));
        this.view.onremovefilter = this.removeFilter.bind(this);
    }

    private addFilter(filter: Filter): void {
        this.model.filters.push(filter);
        this.view.updateFilters();
    }

    private removeFilter(filter: Filter): void {
        let index: number = this.model.filters.indexOf(filter);
        this.model.filters.splice(index, 1);
        this.view.updateFilters();
    }

}