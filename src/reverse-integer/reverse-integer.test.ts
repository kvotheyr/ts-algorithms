import { reverseInteger } from '../reverse-integer/reverse-integer'

test('should reverse integer', () => { 
    expect(reverseInteger(321)).toBe(123);
})

test('should reverse negative integer', () => { 
    expect(reverseInteger(-321)).toBe(-123);
})

test('should return zero when the number overflows', () => {
    expect(reverseInteger(83298928392382)).toBe(0);
})