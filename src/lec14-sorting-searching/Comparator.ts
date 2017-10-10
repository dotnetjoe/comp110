/*
 * A Comparator function is one that can compare the ordering of two values
 * of the same type. There are three possible return values:
 * 
 * Negative Number - when the first parameter is ordered before the second
 * Zero - When the values are equivalent
 * Positive Number - when the first parameter is ordered after the second
 */
export interface Comparator<T> {
    (a: T, b: T): number;
}

export const A_BEFORE_B: number = -1;
export const A_SAME_AS_B: number = 0;
export const A_AFTER_B: number = 1;