import { WeatherRow } from "./WeatherRow";

export function printRows(data: WeatherRow[], n: number): void {
    for (let i: number = 0; i < n && i < data.length; i++) {
        let row: WeatherRow = data[i];
        print(row.date + " - Low: " + row.tempLow + " - High: " + row.tempHigh);
    }
}