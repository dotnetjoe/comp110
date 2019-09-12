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
    // TODO #1 Sort Data using byTempLow comparator
    let comparator: Comparator<WeatherRow> = byTempLow;
    data.sort(byTempLow);

    printRows(data, 3);

    print("Sorted byTempHigh");
    // TODO #2 Sort Data using byTempHigh comparator
    data.sort(byTempHigh);
    printRows(data, 3);
}

main();