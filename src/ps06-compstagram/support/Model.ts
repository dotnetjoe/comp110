import { Image } from "./Image";
import { Filter, FilterClass } from "./Filter";

export class Model {

    filterClasses: FilterClass[] = [];
    filters: Filter[] = [];

    process(input: Image): Image {
        return this.filters.reduce(
            function(memo: Image, filter: Filter): Image {
                return filter.process(memo);
            }, 
            input.copy()
        );
    }

}