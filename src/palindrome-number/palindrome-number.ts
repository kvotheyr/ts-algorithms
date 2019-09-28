/**
 * Check if the input number is a Palindrome
 * @param input number
 */
export function isPalindromeNumber(input: number): boolean {
    let reversedNumber: number = 0;
    const orginalNumber: number = input;

    // reverse number
    while(input > 0) {
        reversedNumber = reversedNumber * 10 + input % 10;
        input = Math.floor(input / 10);
    }
    
    return reversedNumber === orginalNumber;
}