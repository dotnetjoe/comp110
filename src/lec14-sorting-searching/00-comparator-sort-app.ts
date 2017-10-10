import "introcs";

import { WeatherRow } from "./WeatherRow";
import { Comparator } from "./Comparator";
import { byTempLow, byTempHigh } from "./comparators";
import { printRows } from "./helpers";

function main(): void {
    promptCSV("Select a weather data CSV", WeatherRow, process);
}

function process(data: WeatherRow[]): void {
    print("Unsorted:");
    printRows(data, 3);

    print("Sorted byTempLow");
    data.sort(byTempLow);
    printRows(data, 3);

    print("Sorted byTempHigh");
    data.sort(byTempHigh);
    printRows(data, 3);
}

main();