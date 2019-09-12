import { View } from "./support/View";
import { Model } from "./support/Model";
import { Controller } from "./support/Controller";

import {
    InvertFilter,
    BorderFilter,
    BrightnessFilter,
    ColorizeFilter,
    ContrastFilter,
    SaturationFilter
} from "./compstagram-filters";

function main(): void {

    let model: Model = new Model();

    // TODO: As you work begin work on each filter, comment it out.
    model.filterClasses = [
        SaturationFilter,
        ContrastFilter,
        ColorizeFilter,
        BrightnessFilter,
        BorderFilter,
        InvertFilter
    ];

    let view: View = new View(model);
    let controller: Controller = new Controller(model, view);

}

main();