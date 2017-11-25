import { View } from "./support/View";
import { Model } from "./support/Model";
import { Controller } from "./support/Controller";

import { 
    InvertFilter,
    BrightnessFilter
} from "./Filters";

// TODO
// * Mobile Styles


function main(): void {

    let model: Model = new Model();
    model.filterClasses = [
        BrightnessFilter,
        InvertFilter
    ];

    let view: View = new View(model);

    let controller: Controller = new Controller(model, view);

}

main();