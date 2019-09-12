import { WeatherRow } from "./WeatherRow";
import { A_BEFORE_B, A_SAME_AS_B, A_AFTER_B } from "./Comparator";

export function byTempLow(a: WeatherRow, b: WeatherRow): number {
    if (a.tempLow < b.tempLow) {
        return A_BEFORE_B;
    } else if (a.tempLow > b.tempLow) {
        return A_AFTER_B;
    } else {
        return A_SAME_AS_B;
    }
}

export function byTempHigh(a: WeatherRow, b: WeatherRow): number {
    // TODO!
    if (a.tempHigh > b.tempHigh) {
        return A_BEFORE_B;
    } else if (a.tempHigh < b.tempHigh) {
        return A_AFTER_B;
    } else {
        return A_SAME_AS_B;
    }
}

export function alphabetical(a: string, b: string): number {
    if (a < b) {
        return A_BEFORE_B;
    } else if (a === b) {
        return A_SAME_AS_B;
    } else {
        return A_AFTER_B;
    }
}

export function numerical(a: number, b: number): number {
    if (a < b) {
        return A_BEFORE_B;
    } else if (a === b) {
        return A_SAME_AS_B;
    } else {
        return A_AFTER_B;
    }
}