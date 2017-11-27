import { View } from "./support/View";
import { Model } from "./support/Model";
import { Controller } from "./support/Controller";

// TODO #1: Import your Filter subclasses

function main(): void {

    let model: Model = new Model();

    // TODO #2: After you write a Filter subclass and import it,
    // add the class to the array below for it to show up in the
    // user interface. If you make the Filter subclass you are
    // currently working on the first element in the array, it
    // will be the default filter shown in the filter selector. 
    model.filterClasses = [
        
    ];

    let view: View = new View(model);
    let controller: Controller = new Controller(model, view);

}

main();