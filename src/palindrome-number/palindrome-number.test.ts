import { isPalindromeNumber } from './palindrome-number'

test('should return true', () => {
    const result = isPalindromeNumber(323);
    expect(result).toBe(true);
})

test('should return false',() => {
    const result = isPalindromeNumber(3234);
    expect(result).toBe(false);
})

test('should return false',() => {
    const result = isPalindromeNumber(0);
    expect(result).toBe(true);
})