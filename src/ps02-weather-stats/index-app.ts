/**  
 * Author: Adam Alston
 * ONYEN: aalston9
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received  
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting.
 */

import "introcs";
export class WeatherRow {
    date: string = "";
    precipitation: number = 0;
    snow: number = 0;
    tempHigh: number = 0;
    tempLow: number = 0;
}

function main(): void {
     print(" Weather Stats 110");
     promptCSV("Select Weather Data CSV", WeatherRow, process);
}

main();

function process(data: WeatherRow[]):  void {
    print("Total Precipitation: " + totalPrecipitation(data));
    print("Total Snow Days: " + snowDays(data));
    print("Nice Days: " + niceDays(data));
    print("Maximum Temperature: " + maximumTemperature(data));
    print("Coldest Day: " + coldestDay(data));
    print("A temperature of 80 degrees exceeded the high temperature " + daysAbove(data, 80) + " times during this time period!");
    print("A temperature of 90 degrees exceeded the high temperature " + daysAbove(data, 90) + " times during this time period!");
}

export function totalPrecipitation(data: WeatherRow[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (i < data.length) {
            sum = sum + data[i].precipitation;
            i++;
        }
    return sum;
}

export function snowDays(data: WeatherRow[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].snow > 0) {
            sum++;
        }
        i++;
    }
    return sum;
}

export function niceDays(data: WeatherRow[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if ((data[i].tempLow >= 60) && (data[i].tempHigh <= 80)) {
            sum++;
        }
        i++;
    }
    return sum;
}

export function maximumTemperature(data: WeatherRow[]): number {
    let maxTemp: number = data[0].tempHigh;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].tempHigh > maxTemp) {
            maxTemp = data[i].tempHigh;
        }
        i++;
    }
    return maxTemp;
}

export function coldestDay (data:WeatherRow[]): string {
    let coldDay: string = "";
    let minTemp: number = data[0].tempLow;
    let i: number = 0;
    while (i < data.length) {
        if (minTemp > data[i].tempLow) {
            minTemp = data[i].tempLow;
            coldDay = data[i].date;
        }
        i++;
    }
    return coldDay;
}

export function daysAbove(data: WeatherRow[], temperature: number): number {
    let input: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].tempHigh > temperature) {
            input++;
        }
        i++;
    }
    return input;
}