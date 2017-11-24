import { FilterSelect } from "./components/FilterSelect";
import { Model } from "./Model";
import { Filter } from "./Filter";
import { FilterControl } from "./components/FilterControl";
import { Observer } from "./components/Observers";

export class View {

    model: Model;

    imageSelect: HTMLInputElement;
    viewport: HTMLCanvasElement;
    filters: HTMLElement;
    filterSelect: FilterSelect;
    save: HTMLButtonElement;

    filterControls: FilterControl[] = [];
    onremovefilter: Observer<Filter> | null = null;

    constructor(model: Model) {
        this.model = model;
        this.imageSelect = document.getElementById("imageSelect") as HTMLInputElement;
        this.viewport = document.getElementById("viewport") as HTMLCanvasElement;
        this.filters = document.getElementById("filters")!;
        this.initFilterSelect();
    }

    updateFilters(): void {
        // Add New Filters
        this.model.filters.forEach((filter: Filter, index: number) => {
            if (this.filterControls[index] !== undefined) {
                if (this.filterControls[index].filter === filter) {
                    // FilterControl already correctly configured
                    return;
                } else {
                    this.filters.removeChild(this.filterControls[index].element);
                    this.filterControls.splice(index, 1);
                }
            }
            let control: FilterControl = new FilterControl(this.filters, filter);
            control.onremove = this.onremovefilter;
            this.filterControls.push(control);
        });

        // Remove Deleted Filters
        for (let i: number = this.filterControls.length - 1; i >= this.model.filters.length; i--) {
            this.filters.removeChild(this.filterControls[i].element);
            this.filterControls.splice(i, 1);
        }
    }

    private initFilterSelect(): void {
        let select: HTMLSelectElement = document.getElementById("filterSelect") as HTMLSelectElement;
        let add: HTMLButtonElement = document.getElementById("filterAddButton") as HTMLButtonElement;
        this.filterSelect = new FilterSelect(this.model.filterClasses, select, add);
    }

}