/**
 * Reverse an Intger, return reversed number if integer range below 32 bit signed integer range
 * return zero if it overflows
 * @param input - number to be reversed
 */
export function reverseInteger(input: number) {
    //remove negative sign 
    let value: number = Math.abs(input);
    let reversedNumber = 0;

    while (value > 0) {
        reversedNumber = reversedNumber * 10 + value % 10;
        value = Math.floor(value / 10);
    }

    //add sign back to the reversed number
    reversedNumber *= Math.sign(input);

    // JavaScript numbers are doubles but when you use bitwise operations on them
    // they are converted to 32 bit signed integers.
    return (reversedNumber | 0) === reversedNumber? reversedNumber: 0
}